import Modal from "../UI/Modal";
import classes from "./Cart.module.css";

const Cart = (props) => {
  //todo
  const cartitems = (
    <ul className={classes["cart-items"]}>
      {[{ id: 1, name: "سوشی", amount: 2, price: 12.99 }].map((item) => (
        <li>{item.name}</li>
      ))}
    </ul>
  );

  return (
    <Modal  onClose={props.onClose} >
      {cartitems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>35.62</span>
      </div>
      <div className={classes.actions}>
        <button onClick={props.onClose} className={classes["button--alt"]}>Close</button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
