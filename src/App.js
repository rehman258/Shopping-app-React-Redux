import 'bootstrap/dist/css/bootstrap.min.css';
import * as ReactBootstraps from 'react-bootstrap';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import About from './components/About/About';
import Products from './components/Products/Products';
import Cart from './components/Cart/Cart'
import Contact from './components/Contact/Contact';
import Details from './components/Details/Details'
import ErrorPage from './components/ErrorPage/ErrorPage';

import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import {connect} from 'react-redux';
import {useEffect} from 'react';
import axios from 'axios';

import { cartCount } from './components/actions/cartCount';
import {updateCart} from './components/actions/cart-action'; 
import { pushingProducts } from './components/actions/product-action';

function App(props) {
  let count = 0;
    // console.log()
    useEffect(() => {
      let myArr = props.cartReducer.cartItems;
       axios.get('https://testshopping-59c29-default-rtdb.firebaseio.com/.json')
      .then(elem => elem.data)
      .then(data => data.items)
      .then(items => props.pushingProducts(items) && true ? haha(items)  : [])

        const haha=(items)=>{
          let j=0;
          for(let i=0;i<items.length;i++){
            if(items[i].isInCart){
              j++
              props.cartCount(j)
              myArr.push(items[i])
              props.updateCart(myArr)
            }
          }
        }

    },[])
      
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <ReactBootstraps.Container fluid className="mx-0 px-0">
          <Switch>
                  <Route path="/" exact  component={Home} />
                  <Route path="/about" exact component={About} />
                  <Route path="/products" exact component={Products} />
                  <Route path="/details/:id" exact component={Details} />
                  <Route path="/contact" exact component={Contact} />
                  // <Route path="/cart" exact> <Cart/> </Route>
                  <Route component={ErrorPage}></Route>
          </Switch>
        </ReactBootstraps.Container>
      </Router>
    </div>
  );
}

const mapStateToProps = state =>{
  return state
}
const mapDispatchToProps ={
  pushingProducts,
  cartCount,
  updateCart
}
export default connect(mapStateToProps,mapDispatchToProps)(App);
