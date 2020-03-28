import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import EmployeeCard from './App';


const employee = {
  name: 'Stefan Timofte',
  position: 'Developer',
  seniority: 'Junior I',
}

class Stefan extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      shoppingCart: '',
      shoppingList : ['milk ', 'sugar ', 'bread ', 'fruits ', 'vegetables ', 'smokes ']
    }
  }
  item1 = 'ceapa '
  item2 = 'ulei '
  manyMoreItems = ['fructe ', 'legume ', 'toate in limba romana ']

  chooseProductFromShoppingList() {
    if (this.state.shoppingList.length) {
      return this.state.shoppingList[0]
    }
  }

  returnNewListAfterPurchase() {
    if (this.state.shoppingList.length) {
      this.setState({...this.state, ...{shoppingCart: this.state.shoppingCart, shoppingList: this.state.shoppingList.shift()}})
    }
    return this.state.shoppingList
  }

  changeStateOnClick() {
    if (this.state.shoppingList.length) {
      let product = this.chooseProductFromShoppingList();
      this.setState({...this.state, ...{shoppingCart: this.state.shoppingCart.concat(product), shoppingList: this.returnNewListAfterPurchase()}});
    } else {
      this.setState({...this.state, ...{shoppingCart: this.state.shoppingCart, shoppingList: ''}});
    }
  }

  useRestOperator(item1, item2, ...manyMoreItems) {
    console.log(item1,);
    
    const brandNewList = [item1, item2, manyMoreItems]
    this.setState({shoppingCart: this.state.shoppingCart, shoppingList: brandNewList})
  }

  render() {
    return (
      <div>
        <h3>shopping list: {this.state.shoppingList}</h3>
        <h1>Currently has in his shopping cart: {this.state.shoppingCart}</h1>
        <button className="left-button" onClick={() => this.changeStateOnClick()}>Click to buy items from your list</button>
        <button onClick={() => this.useRestOperator(this.item1, this.item2, this.manyMoreItems)}>click to add more items on your list</button>
      </div>
    )
  }
}

ReactDOM.render(
  <React.StrictMode>
    <div className="page-content">
      <EmployeeCard
        employee={employee}
      />
      <Stefan 
      />
    </div>

  </React.StrictMode>,
  document.getElementById('root')
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
