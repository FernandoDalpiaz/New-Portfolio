import styles from './styles.module.css';

type ContainerProps = {
  children: React.ReactNode;
};

export function Button({ children }: ContainerProps) {
  return (
    <a className={styles.btn}>{children}</a>
  );
}

