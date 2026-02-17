import styles from './styles.module.css';
import { Button } from '../Button';
import { TechItem } from '../TechItem';

type ContainerProps = {
  children: string;
  img: string;
  description: string;
  tech: Array<string>;
  website?: string;
  project: string;
};

export function ProjectContainer(props: ContainerProps) {
  const children = props.children;
  const description = props.description;
  const tech = props.tech;
  const img = '../../../public/' + props.img;
  const website = props.website;
  const project = props.project;
  
  return (
    <div className={styles.container}>
      <img className={styles.img} src={img} alt="" />
      <h3>{children}</h3>
      <p>{description}</p>
      <div className={styles['tech-list']}>
        {tech.map((item, index) => (
          <TechItem key={index}>{item}</TechItem>
        ))}        
      </div>
      <div className={styles['btn-container']}>
          {website && <Button href={website} target="_blank" rel="noopener noreferrer">Website</Button>}
          <Button href = {project} target="_blank" rel="noopener noreferrer">Projeto</Button>
      </div>
    </div>
  );
}