import { Fragment } from 'react';

import booksImage from '../../assets/books.jpg';
import classes from './Header.module.css';
import HeaderCartButton from './HeaderCartButton';

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>ReactBooks</h1>
        <HeaderCartButton/>
      </header>
      <div className={classes['main-image']}>
        <img src={booksImage} alt='A shelf full of various books!' />
      </div>
    </Fragment>
  );
};

export default Header;
