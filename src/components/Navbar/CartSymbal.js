import React from 'react';
import * as ReactIcons from 'react-icons/fa';
import  {Link} from 'react-router-dom';
import { connect } from 'react-redux';

function CartSymbal(props) {
	return (
		<div>
			<Link to="/cart" id="RouterNavLink" className="nav-link" exact="true">
		      	<ReactIcons.FaShoppingCart/>
		      	<span className="Cart_Count">{props.cartCountReducer}</span>
		    </Link>
		</div>
	)
}
const mapStateToProps = state => {
	return state
}

export default connect(mapStateToProps)(CartSymbal)