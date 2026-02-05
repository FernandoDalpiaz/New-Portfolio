import styles from './styles.module.css';

type ContainerProps = {
  children: React.ReactNode;
};

export function TechItem({ children }: ContainerProps) {
  return (
    <h3 className={styles.item}>{children}</h3>
  );
}