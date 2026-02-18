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
              project='https://github.com/FernandoDalpiaz/focus-pomodoro'
              video='https://player.vimeo.com/video/1132805238?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479'>
              Focus Pomodoro
            </ProjectContainer>

            <ProjectContainer 
              tech={['Express', 'Node', 'OAuth']} 
              img='Secrets.png' 
              description='Aplicação de registrar e ver segredos com login e autenticação.' 
              video='https://player.vimeo.com/video/1125262355?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479'
              project='https://github.com/FernandoDalpiaz/Secrets-Project'>
              Secrets Web Application
            </ProjectContainer>

            <ProjectContainer 
              tech={['Express', 'Node', 'Postgres']} 
              img='TravelTracker.png' 
              description='Salva os países visitados por pessoa e mostra em tempo real.' 
              video='https://player.vimeo.com/video/1125654247?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479'
              project='https://github.com/FernandoDalpiaz/Family-Travel-Tracker_PG'>
              Family Travel Tracker
            </ProjectContainer>

            <ProjectContainer 
              tech={['Express', 'Node']} 
              img='Blog.png' 
              description='Aplicação e que visualiza, cria e deleta posts de um blog.' 
              video='https://player.vimeo.com/video/1125180558?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479'
              project='https://github.com/FernandoDalpiaz/Blog-Project'>
              Blog Web Application
            </ProjectContainer>
          </div>
      </div>
    </>
  );
}

