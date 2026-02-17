import styles from './styles.module.css';
import profile from '../../assets/images/profile-picture.png'
import { SectionTitle } from '../SectionTitle';

export function Hero() {
  return (
    <>
      <div id='hero-section' className={styles.hero}>
        <div className={styles['hero-text']}>
          <SectionTitle>Desenvolvedor Web</SectionTitle>
          <p className={styles['hero-paragraph']}>Gosto de criar projetos pensando na <strong>experiência do usuário</strong>, através de designs agradáveis e fáceis de usar, utilizando <strong>HTML</strong>, <strong>CSS</strong>, <strong>JavaScript</strong>, <strong>React</strong>, <strong>Tailwind CSS</strong> e diversas outras tecnologias. Estou sempre desenvolvendo novos projetos, buscando me desafiar e evoluir como profissional.</p>
        </div>
        <img className={styles['profile-picture']} src={profile} alt="profile picture" />
      </div>
    </>
  );
}

