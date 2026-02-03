import styles from './styles.module.css';

type ContainerProps = {
  children: React.ReactNode;
};

export function Title({ children }: ContainerProps) {
  return (
    <h2 className={styles.title}>{children}</h2>
  );
}