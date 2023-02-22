import React from 'react';
import { NavLink } from 'react-router-dom';
import style from '../scss/Style.module.scss';

function Header() {
  return (
    <div className={style.header}>
      <h1 className={style.h1}>Math Magicians</h1>
      <section className={style.navLinksSection}>
        <NavLink to="/" className={style.navLink}>
          Home
        </NavLink>
        <h2>|</h2>
        <NavLink to="/calculator" className={style.navLink}>
          Calculator
        </NavLink>
        <h2>|</h2>
        <NavLink to="/Quote" className={style.navLink}>
          Quote
        </NavLink>
      </section>
    </div>
  );
}

export default Header;
