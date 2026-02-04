import styles from './styles.module.css';
import profilePicture from '../../assets/images/profile-picture.png'
import { Button } from '../Button';

type ContainerProps = {
  children: React.ReactNode;
  img: React.ReactNode;
  description: React.ReactNode;
  tech: Array<string>;
};

export function ProjectContainer(props: ContainerProps) {
  const children = props.children;
  // const img = props.img;
  const description = props.description;
  const tech = props.tech;

  return (
    <div className={styles.container}>
      <img className={styles.img} src={profilePicture} alt="" />
      <h3>{children}</h3>
      <p>{description}</p>
      <div>
        <p>{tech}</p>
      </div>
      <div className={styles['btn-container']}>
          <Button>Site</Button>
          <Button>Código</Button>
      </div>
    </div>
  );
}

