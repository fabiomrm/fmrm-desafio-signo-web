import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import { AiOutlinePlusSquare } from 'react-icons/ai'

export function Header() {
  return (
    <header className={styles.header}>
      <Link to="/">
        <strong>ENQUETES</strong>
      </Link>
      <Link to="/create-poll">
        <AiOutlinePlusSquare className={styles.addImage} />
      </Link>
    </header>
  )
}