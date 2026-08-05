import React, { Component } from 'react';

class CurrencyConvertor extends Component {
  constructor(props) {
    super(props);
    this.state = { rupees: '', euros: '' };
  }

  handleChange = (e) => {
    this.setState({ rupees: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const rate = 0.011; // example conversion rate INR -> EUR
    const rupees = Number(this.state.rupees) || 0;
    const euros = (rupees * rate).toFixed(2);
    this.setState({ euros });
  };

  render() {
    const { rupees, euros } = this.state;
    return (
      <div style={{ marginTop: 16 }}>
        <h2>Currency Convertor</h2>
        <form onSubmit={this.handleSubmit}>
          <label>
            Rupees:
            <input type="number" value={rupees} onChange={this.handleChange} />
          </label>
          <button type="submit" style={{ marginLeft: 8 }}>Convert</button>
        </form>
        {euros !== '' && <p>Euros: {euros}</p>}
      </div>
    );
  }
}

export default CurrencyConvertor;
