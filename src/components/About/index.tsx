import styles from './styles.module.css';
import { SectionTitle } from '../SectionTitle';

export function About() {
  return (
      <div id='about-section' className={styles.about}>
        <SectionTitle>Sobre Mim</SectionTitle>
        <div className={styles['outer-container']}>
          <div className={styles['left-container']}>
            <h3 className={styles.subtitle}>Graduação e Cursos</h3>
            <ul className={styles.list}>
              <li className={styles['list-item']}>Tecnólogo em Análise e Desenvolvimento de Sistemas (2022-2025).</li>
              <li className={styles['list-item']}>Curso completo de Inglês Wizard.</li>
              <li className={styles['list-item']}>The Complete Full-Stack Web Development Bootcamp (62 horas).</li>
              <li className={styles['list-item']}>Curso de React JS 19 e Next.js 15 (83,5 horas).</li>
            </ul>
          </div>
          <div className={styles['right-container']}>
            <h3 className={styles.subtitle}>Principais Conhecimentos</h3>
            <ul className={styles.list}>
              <li className={styles['list-item']}>Inglês avançado.</li>
              <li className={styles['list-item']}>React.</li>
              <li className={styles['list-item']}>NextJs</li>
              <li className={styles['list-item']}>TailWind</li>
              <li className={styles['list-item']}>NodeJS.</li>
              <li className={styles['list-item']}>JavaScript</li>
              <li className={styles['list-item']}>TypeScript</li>
              <li className={styles['list-item']}>Html/Css</li>
              <li className={styles['list-item']}>Express</li>
            </ul>
          </div>
        </div>
      </div>
  );
}

