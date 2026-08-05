import React, { Component } from 'react';

class Cart extends Component {
  render() {
    const { itemName, price } = this.props;
    return (
      <div className="cart-item">
        <h3>{itemName}</h3>
        <p>Price: ${price}</p>
      </div>
    );
  }
}

export default Cart;
