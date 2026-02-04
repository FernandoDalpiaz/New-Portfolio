import styles from './styles.module.css';
import profile from '../../assets/images/profile-picture.png'
import { SectionTitle } from '../SectionTitle';

export function Hero() {
  return (
    <>
      <div id='hero-section' className={styles.hero}>
        <div className={styles['hero-text']}>
          <SectionTitle>Desenvolvedor Front-End</SectionTitle>
          <p className={styles['hero-paragraph']}>Gosto de criar projetos pensando na experiência do usuário, através de designs agradáveis, fáceis de usar e eficientes. Estou sempre desenvolvendo novos projetos, buscando me desafiar e evoluir como profissional.</p>
        </div>
        <img className={styles['profile-picture']} src={profile} alt="profile picture" />
      </div>
    </>
  );
}

