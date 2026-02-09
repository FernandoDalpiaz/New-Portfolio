import { Button } from '../Button';
import { Title } from '../Title';
import styles from './styles.module.css';

export function Contact() {
  return (
    <>
      <div id='contact-section' className={styles.contact}>
          <Title>Contato</Title>
          <div className={styles['contact-btns']}>
            <Button>Linkedin</Button>
            <Button>Github</Button>
            <Button>Email</Button>
          </div>
      </div>
    </>
  );
}

