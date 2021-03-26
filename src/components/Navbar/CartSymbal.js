import React,{useEffect,useState} from 'react';
import * as ReactIcons from 'react-icons/fa';
import  {Link} from 'react-router-dom';
import { connect } from 'react-redux';

function CartSymbal(props) {
	const [count,setCount] = useState(0);
	useEffect(()=>{
		let baseCount = 0;
		if(props.cartReducer.length !=0){
			props.cartReducer.cartItems.map(item => item.count != 0 ? baseCount += item.count : 0)
		}
		setCount(baseCount)
	},[props.cartReducer])
	
	return (
		<div>
			<Link to="/cart" id="RouterNavLink" className="nav-link" exact="true">
		      	<ReactIcons.FaShoppingCart/>
		      	<span className="Cart_Count">{count}</span>
		    </Link>
		</div>
	)
}
const mapStateToProps = state => {
	return state
}

export default connect(mapStateToProps)(CartSymbal)