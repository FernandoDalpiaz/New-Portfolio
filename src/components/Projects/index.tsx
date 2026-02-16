import styles from './styles.module.css';
import { SectionTitle } from '../SectionTitle';
import { Button } from '../Button';
import { ProjectContainer } from '../ProjectContainer';

export function Projects() {
  return (
    <>
      <div id='projects-section' className={styles.projects}>
          <SectionTitle>Projetos</SectionTitle>
          <div className={styles.filter}>
            <Button>Todos</Button>
            <Button>React</Button>
            <Button>Node</Button>
            <Button>Html/Css</Button>
          </div>
          <div className={styles.list}>
            <ProjectContainer tech={['React', 'Node']} img='../../../public/Pomodoro.png' description='Esse é um projeto inventado, esse é um projeto inventado, esse é um projeto inventado.' website='www.google.com'>Nome do Projeto</ProjectContainer>
          </div>
      </div>
    </>
  );
}

