import React, { Component } from 'react';
import Cart from './Cart';

class OnlineShopping extends Component {
  constructor(props) {
    super(props);
    this.state = {
      carts: [
        { id: 1, itemName: 'Laptop', price: 1200 },
        { id: 2, itemName: 'Headphones', price: 150 },
        { id: 3, itemName: 'Keyboard', price: 80 },
        { id: 4, itemName: 'Mouse', price: 40 },
        { id: 5, itemName: 'Monitor', price: 300 }
      ]
    };
  }

  render() {
    const { carts } = this.state;
    return (
      <div>
        <h2>Online Shopping Cart</h2>
        {carts.map((c) => (
          <Cart key={c.id} itemName={c.itemName} price={c.price} />
        ))}
      </div>
    );
  }
}

export default OnlineShopping;
