import React from "react";

class AddAccount extends React.Component {
  state = {
    name: "",
    balance: 0
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    this.props.addAccount(this.state.name, this.state.balance);
    e.preventDefault();
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <input
            onChange={this.handleChange}
            name="name"
            value={this.state.name}            
            size={20}
            placeholder="Enter account name"
          />
          <br />
          <input
            onChange={this.handleChange}
            name="balance"
            type="number"
            value={this.state.balance}
            size={20}
            placeholder="Enter initial deposit"
          />
          <br />
          <button onClick={this.handleSubmit}>Create Account</button>
          <label />
        </div>
      </form>
    );
  }
}

export default AddAccount;