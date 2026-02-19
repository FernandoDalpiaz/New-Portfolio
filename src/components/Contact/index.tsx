import { Button } from '../Button';
import { Title } from '../Title';
import styles from './styles.module.css';

export function Contact() {
  return (
    <>
      <div id='contact-section' className={styles.contact}>
          <Title>Contato</Title>
          <div className={styles['contact-btns']}>
            <Button href='https://www.linkedin.com/in/fernando-dalpiaz' target="_blank" rel="noopener noreferrer">Linkedin</Button>
            <Button href='https://github.com/FernandoDalpiaz' target="_blank" rel="noopener noreferrer">Github</Button>
            <Button href='mailto:fernandoldalpiaz@gmail.com' target="_blank" rel="noopener noreferrer">Email</Button>
          </div>
      </div>
    </>
  );
}

