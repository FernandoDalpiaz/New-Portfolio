import styles from './styles.module.css';

type ButtonProps = {
  children: React.ReactNode;
  href : string;
} & React.ComponentProps<'a'>;

export function Button( props : ButtonProps) {
  const children = props.children
  const href = props.href;
  if (props.target) {
    return (
      <a href={href} className={styles.btn} target="_blank" rel="noopener noreferrer">{children}</a>
    );
  }
  else {
    return (
      <a href={href} className={styles.btn}>{children}</a>
    );
  }
  
}

