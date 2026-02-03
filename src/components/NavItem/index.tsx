import styles from './styles.module.css';

type ContainerProps = {
  children: React.ReactNode;
};

export function NavItem({ children }: ContainerProps) {
  return (
    <a href='#' className={styles.item}>{children}</a>
  );
}