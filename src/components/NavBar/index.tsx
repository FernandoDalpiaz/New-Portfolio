import styles from './styles.module.css';

import { MoonIcon } from 'lucide-react';
import { Title } from '../Title';
import { NavItem } from '../NavItem';



export function NavBar() {
  return (
    <>
      <div id='navbar-section' className={styles.navbar}>
        <Title>Fernando</Title>
        <div className={styles.navitems}>
          <NavItem>Projetos</NavItem>
          <NavItem>Formação</NavItem>
          <NavItem>Contato</NavItem>
          <NavItem><MoonIcon/></NavItem>
        </div>
      </div>
    </>
  );
}