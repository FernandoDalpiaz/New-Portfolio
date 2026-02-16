import styles from './styles.module.css';

type ContainerProps = {
  children: React.ReactNode;
  href ?: string;
};

export function Button( props : ContainerProps) {
  const children = props.children
  const href = props.href;
  if (href) {
    return (
      <a href={href} className={styles.btn}>{children}</a>
    );
  }
  else {
    return (
      <a className={styles.btn}>{children}</a>
    );
  }
  
}

