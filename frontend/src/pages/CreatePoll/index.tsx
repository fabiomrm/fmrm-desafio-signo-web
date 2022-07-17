import styles from './CreatePoll.module.css';
import { useNavigate } from 'react-router-dom';
import { AiOutlineDelete, AiOutlinePlusCircle } from 'react-icons/ai';
import React, { useState } from 'react';

import { days, months, years } from '../../utils/dateFormat';
import { isEndAfterBegining } from '../../utils/dateComparison';

interface OptionCreate {
  text: string;
}

export function CreatePoll() {

  const navigate = useNavigate();
  const [isDisabled, setIsDisabled] = useState<boolean>(true);
  const [beginDate, setBeginDate] = useState<string>();
  const [endDate, setEndDate] = useState<string>();
  const [options, setOptions] = useState<OptionCreate[]>([
    {
      text: ""
    },
    {
      text: ""
    },
    {
      text: ""
    }
  ]);

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const currentOptions = [...options];
    currentOptions[index].text = e.target.value;
    setOptions(currentOptions);

    checkIfCanSubmit(currentOptions);

  }

  const checkIfCanSubmit = (options: OptionCreate[]) => {
    if (!isAnyValueEmpty(options) && options.length >= 3) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }

  const isAnyValueEmpty = (options: OptionCreate[]) => {
    return options.some((option) => option.text.trim().length === 0);
  }

  const handleDeleteOption = (index: number) => {
    const currentOptions = [...options];
    currentOptions.splice(index, 1);
    setOptions(currentOptions);
    checkIfCanSubmit(currentOptions);
  }

  const handleAddOptionField = () => {
    setOptions([...options, { text: "" }])
  }


  const submitForm = (e: any) => {
    e.preventDefault();
    if (e.target.title.value.trim() === "") {
      alert("Preencha o título da enquete!")
      return;
    }

    if (!beginDate || !endDate) {
      alert("Preencha as datas!")
      return;
    }
    if (isEndAfterBegining(beginDate as string, endDate as string)) {
      alert("A data do fim deve ser após a do início!")
      return;
    }

    const newPoll = {
      title: e.target.title.value,
      beginDate,
      endDate,
      options
    }


    fetch("http://localhost:3334/polls", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newPoll)
    })
      .then(res => res.json())
      .then(data => navigate("/"))
  }

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <form onSubmit={submitForm}>
          <div className={styles.formGroup}>
            <label>Título</label>
            <input type="text" name="title" />
          </div>
          <div className={styles.dateArea}>
            <div className={styles.formGroup}>
              <label>Início: </label>
              <input type="datetime-local" name="beginDate" onChange={(e) => setBeginDate(e.target.value)} />
            </div>
            <div className={styles.formGroup}>
              <label>Fim: </label>
              <input type="datetime-local" name="endDate" onChange={(e) => setEndDate(e.target.value)} />
            </div>
          </div>
          <p className={styles.options}>Opções:</p>
          <div className={styles.optionsArea}>
            {options.map((option, index) => (
              <div className={styles.optionArea} key={index}>
                <input type="text" name="text" value={option.text} onChange={(e) => handleChangeInput(e, index)} />
                <AiOutlineDelete className={styles.deleteIcon} onClick={() => handleDeleteOption(index)} />
              </div>
            ))}
          </div>
          <div className={styles.addOption}>
            <button type="button" onClick={handleAddOptionField} >
              <AiOutlinePlusCircle className={styles.addOptionIcon} />
            </button>
          </div>
          <div className={styles.btnArea}>
            <button type="submit" className={styles.submitBtn} disabled={isDisabled}>CRIAR</button>
          </div>
        </form>
      </div>
    </div>
  )
}