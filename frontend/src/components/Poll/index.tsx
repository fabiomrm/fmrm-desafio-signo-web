import { Poll as IPoll } from '../../types/Poll';
import { dateFormat } from '../../utils/dateFormat';
import checkImg from '../../assets/check.svg';
import styles from './Poll.module.css';
import { calculateTotal } from '../../utils/calculateTotal';
import { isPollOngoing } from '../../utils/dateComparison';
import { ProgressBar } from '../ProgressBar';
import { AiOutlineCalendar, AiOutlineClose, AiOutlineCheckCircle } from 'react-icons/ai'

interface PollProps {
  poll: IPoll;
  onUpdateVote: (optionId: string) => void;
  onDeletePoll: (pollId: string) => void;
}

export function Poll({ poll, onUpdateVote, onDeletePoll }: PollProps) {

  return (
    <li key={poll.id} className={`${styles.card} ${!isPollOngoing(poll.begin_date, poll.end_date) && styles.notEditable}`}>
      <AiOutlineClose onClick={() => onDeletePoll(poll.id)} className={styles.deleteOption} />
      <h4>{poll.title}</h4>
      <div className={styles.dateArea}>
        <div className={styles.beginArea}>
          <AiOutlineCalendar />
          <span>{dateFormat(poll.begin_date)}</span>
        </div>
        <div className={styles.endArea}>
          <AiOutlineCalendar />
          <span>{dateFormat(poll.end_date)}</span>
        </div>
      </div>
      <div className={styles.optionsArea}>
        {poll.options && poll.options.map((option) => (
          <div className={styles.optionArea} key={option.id}>
            <div className={styles.optionDataArea}>
              <p>{option.text}</p>
              <span>{option.vote_count}</span>
              <button onClick={() => onUpdateVote(option.id)} disabled={!isPollOngoing(poll.begin_date, poll.end_date)}>
                <AiOutlineCheckCircle className={styles.checkIcon} />
              </button>
            </div>
            {
              calculateTotal(poll.options!) > 0 && (
                <ProgressBar vote_count={option.vote_count} total={calculateTotal(poll.options!)} />
              )
            }
          </div>
        ))}
      </div>
      <div className={styles.totalArea}>
        <p>Total:</p>
        <span>{poll.options && calculateTotal(poll.options!)}</span>
      </div>
    </li>
  )
}