import React, { useEffect, useState } from 'react'
import { Poll } from '../../components/Poll';
import { Poll as IPoll } from '../../types/Poll';
import styles from './Home.module.css'
import { handleUpdateScreen } from '../../utils/handleUpdateScreen';
import { isPollOngoing, isPollUpcoming } from '../../utils/dateComparison';
import surveyImg from '../../assets/survey.svg';
import { Link } from 'react-router-dom';


export function Home() {

  const [polls, setPolls] = useState<IPoll[]>([]);
  const [displayingPolls, setDisplayingPolls] = useState<IPoll[]>([]);
  const [selectedOption, setSelectedOption] = useState<string>("");


  const getPolls = () => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/polls`)
      .then((res) => res.json())
      .then((data) => {
        setPolls(data)
        setDisplayingPolls(data);
      })
  }


  useEffect(() => {
    getPolls()
  }, [])


  const handleVote = (optionId: string) => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/options`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ optionId })
    })
      .then((res) => res.json())
      .then((data) => {
        const updatedPolls = handleUpdateScreen(polls, data);
        setPolls(updatedPolls);
      })
  }

  const handleDeletePoll = (pollId: string) => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/polls/${pollId}`, {
      method: "DELETE"
    })
      .then((res) => {
        getPolls();
      })
  }

  const fecthPollsBySelectedOption = (option: string) => {
    switch (option) {
      case "1":
        setDisplayingPolls(polls);
        break;
      case "2":
        setDisplayingPolls(polls.filter((poll) => isPollUpcoming(poll.begin_date)))
        break;
      case "3":
        setDisplayingPolls(polls.filter((poll) => isPollOngoing(poll.begin_date, poll.end_date)))
        break;
      case "4":
        setDisplayingPolls(polls.filter((poll) => !isPollUpcoming(poll.begin_date) && !isPollOngoing(poll.begin_date, poll.end_date)));
        break;
    }
  }

  const handleChangeSelectedOption = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const option = e.target.value;
    setSelectedOption(e.target.value);
    fecthPollsBySelectedOption(option);
  }


  return (
    <div className={styles.container}>
      <div className={styles.selectArea}>
        <select value={selectedOption} onChange={handleChangeSelectedOption}>
          <option value="1">Todas</option>
          <option value="2">Não iniciadas</option>
          <option value="3">Em andamento</option>
          <option value="4">Finalizadas</option>
        </select>
      </div>
      {displayingPolls.length > 0 ?
        (
          <ul className={styles.grid}>
            {displayingPolls.map((poll) => (
              <Poll poll={poll} onUpdateVote={handleVote} key={poll.id} onDeletePoll={handleDeletePoll} />
            ))}
          </ul>
        ) : (
          <div className={styles.noPollArea}>
            <div className={styles.left}>
              <img src={surveyImg} alt="imagem de pesquisa" />
            </div>
            <div className={styles.right}>
              <h4>Ops, não encontramos nada :(</h4>
              <button>
                <Link to="/create-poll">
                  Criar nova
                </Link>
              </button>
            </div>
          </div>
        )
      }
    </div >
  )
}