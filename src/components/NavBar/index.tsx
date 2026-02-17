import styles from './styles.module.css';

import { Title } from '../Title';
import { useState, useEffect } from 'react';
import { MoonIcon, SunIcon } from 'lucide-react';

type AvailableThemes = 'dark' | 'light'

export function NavBar() {

  const [theme, setTheme] = useState<AvailableThemes>(() => {
    const storageTheme = localStorage.getItem('theme') as AvailableThemes || 'light';
    return storageTheme
  });

  const nextThemeIcon = {
    dark: <SunIcon/>,
    light: <MoonIcon/>
  }

  function handleThemeChange(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
    event.preventDefault();
    setTheme(prevTheme => {
      const nextTheme = prevTheme === 'dark' ? 'light' : 'dark';
      return nextTheme;
    })
  }

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme)
  }, [theme])

  return (
    <>
      <div id='navbar-section' className={styles.navbar}>
        <Title>Fernando Dalpiaz</Title>
        <div className={styles.navitems}>
          <a href='#projects-section' className={styles.item}>Projetos</a>
          <a href='#about-section' className={styles.item}>Formação</a>
          <a href='#contact-section' className={styles.item}>Contato</a>
          <a  onClick={handleThemeChange} href='#' className={styles.item}>
            {nextThemeIcon[theme]}
          </a>
        </div>
      </div>
    </>
  );
}