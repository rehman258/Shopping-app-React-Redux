import React,{useEffect} from 'react';
import * as ReactBootstraps from 'react-bootstrap';
import * as ReactIcons from 'react-icons/fa';
import  {Link} from 'react-router-dom';
import '../../App.css';
import { connect } from 'react-redux';

import CartSymbal from './CartSymbal.js'

function Navbar(props) {
	// console.log(props)


	// useEffect(()=>{
	// 	console.log(props,'s');
	// },[])

	return (
			<ReactBootstraps.Navbar expand="lg"  className="MyNav  pt-3 pb-3" bg="dark">
	  			<ReactBootstraps.Container>
	  				<ReactBootstraps.Navbar.Brand >
	  				<Link to="/">
	  					<img src='https://seeklogo.com/images/D/d3-logo-C1884590DC-seeklogo.com.png' alt="" />
	  				</Link>	
	  			</ReactBootstraps.Navbar.Brand>
	  			<ReactBootstraps.Navbar.Toggle aria-controls="responsive-navbar-nav"/>
		  		<ReactBootstraps.Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end" >
		    		<ReactBootstraps.Nav>
		      				<Link to="/" id="RouterNavLink" className="nav-link" exact="true">Home</Link>
		      				<Link to="/about" id="RouterNavLink" className="nav-link" exact="true">About</Link>
		      				<Link to="/products" id="RouterNavLink" className="nav-link" exact="true">Products</Link>
		      				<Link to="/contact" id="RouterNavLink" className="nav-link" exact="true">Contact</Link>
		      				<CartSymbal />
		    		</ReactBootstraps.Nav>
	  			</ReactBootstraps.Navbar.Collapse>
	  			</ReactBootstraps.Container>	
			</ReactBootstraps.Navbar>
	)
}

const mapStateToProps = state =>{
	return state
}
export default connect(mapStateToProps)(Navbar)