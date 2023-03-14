

import classes from './BookItem.module.css';
import BookItemForm from './BookItemForm';

const BookItem = (props) => {

  const price = `$${props.price.toFixed(2)}`;

  return (
    <li className={classes.Book}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <BookItemForm />
      </div>
    </li>
  );
};

export default BookItem;
