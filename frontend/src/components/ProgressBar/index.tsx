import styles from './ProgressBar.module.css';

interface ProgressBarProps {
  vote_count: number;
  total: number;
}

export function ProgressBar({ vote_count, total }: ProgressBarProps) {
  return (
    <div className={styles.progressBar}>
      <div className={styles.progressBarInner} style={{ width: `${(vote_count / total) * 100}%` }}>
        {vote_count && <span>{`${Math.round((vote_count / total) * 100)}%`}</span>}
      </div>
    </div >
  )
}