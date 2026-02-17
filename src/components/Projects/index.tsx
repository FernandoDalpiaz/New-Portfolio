import styles from './styles.module.css';
import { SectionTitle } from '../SectionTitle';
import { ProjectContainer } from '../ProjectContainer';

export function Projects() {
  return (
    <>
      <div id='projects-section' className={styles.projects}>
          <SectionTitle>Projetos</SectionTitle>
          <p className={styles.description}>Essa é uma seleção de projetos que demonstram minha experiência em criar aplicações completas e de alta qualidade.</p>
          <div className={styles.list}>
            <ProjectContainer 
              tech={['React', 'Javascript', 'Typescript']} 
              img='Pomodoro.png' 
              description='Uma aplicação de gerenciamento de tempo estilo pomodoro.' 
              website='https://focus-pomodoro-pi.vercel.app/'
              project='https://github.com/FernandoDalpiaz/focus-pomodoro'>
              Focus Pomodoro
            </ProjectContainer>

            <ProjectContainer 
              tech={['Express', 'Node', 'OAuth']} 
              img='Secrets.png' 
              description='Aplicação de registrar e ver segredos com login e autenticação.' 
              website='https://vimeo.com/1125262355?fl=pl&fe=ti'
              project='https://github.com/FernandoDalpiaz/Secrets-Project'>
              Secrets Web Application
            </ProjectContainer>

            <ProjectContainer 
              tech={['Express', 'Node', 'Postgres']} 
              img='TravelTracker.png' 
              description='Salva os países visitados por pessoa e mostra em tempo real.' 
              website='hhttps://vimeo.com/1125654247?fl=pl&fe=vl'
              project='https://github.com/FernandoDalpiaz/Family-Travel-Tracker_PG'>
              Family Travel Tracker
            </ProjectContainer>

            <ProjectContainer 
              tech={['Express', 'Node']} 
              img='Blog.png' 
              description='Aplicação e que visualiza, cria e deleta posts de um blog.' 
              website='https://vimeo.com/1125180558?fl=pl&fe=vl'
              project='https://github.com/FernandoDalpiaz/Blog-Project'>
              Blog Web Application
            </ProjectContainer>
          </div>
      </div>
    </>
  );
}

