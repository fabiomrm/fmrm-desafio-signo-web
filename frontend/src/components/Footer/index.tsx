import styles from './Footer.module.css';
import { AiOutlineLinkedin, AiOutlineGithub, AiOutlineWhatsApp } from 'react-icons/ai'

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.aboutArea}>
        <img src="https://github.com/fabiomrm.png" alt="foto do criador" />
        <h4>Fábio Monteiro</h4>
        <p>Desenvolvedor Fullstack Jr.</p>
        <div className={styles.iconsArea}>
          <a href="https://www.linkedin.com/in/fabiomrm/" target="_blank">
            <AiOutlineLinkedin className={styles.socialIcon} />
            <span>/fabiomrm</span>
          </a>
          <a href="https://github.com/fabiomrm" target="_blank">
            <AiOutlineGithub className={styles.socialIcon} />
            <span>/fabiomrm</span>
          </a>
        </div>
      </div>
      <div className={styles.info}>
        <p>Teste para vaga de desenvolvedor Signo Soluções Web</p>
      </div>
    </footer>
  )
}