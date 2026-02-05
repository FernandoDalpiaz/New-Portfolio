import styles from './styles.module.css';
import pomodoro from '../../assets/images/Pomodoro.png'
import { Button } from '../Button';
import { TechItem } from '../TechItem';

type ContainerProps = {
  children: React.ReactNode;
  img: React.ReactNode;
  description: React.ReactNode;
  tech: Array<string>;
};

export function ProjectContainer(props: ContainerProps) {
  const children = props.children;
  const description = props.description;
  const tech = props.tech;
  
  return (
    <div className={styles.container}>
      <img className={styles.img} src={pomodoro} alt="" />
      <h3>{children}</h3>
      <p>{description}</p>
      <div className={styles['tech-list']}>
        {tech.map((item, index) => (
          <TechItem key={index}>{item}</TechItem>
        ))}        
      </div>
      <div className={styles['btn-container']}>
          <Button>Website</Button>
          <Button>Projeto</Button>
      </div>
    </div>
  );
}

