import React from 'react';
import '../css/Contact.css';
function Cotnact() {
	return (
		<div>
			<section id="contact" className="container">
  				<h1 className="section-header">CONTACT</h1>
	  			<div className="contact-wrapper">
	    			<div className="container">
	    				<div className="row">
	    					<div className="col-md-6">
	    						<form className="form-horizontal w-100" role="form" method="post" action="#">
							      	<div className="form-group">
								        <div className="col-sm-12">
								          	<input type="text" className="form-control" id="name" placeholder="NAME" name="name"  />
								        </div>
							      	</div>
							      	<div className="form-group">
								        <div className="col-sm-12">
								          	<input type="email" className="form-control" id="email" placeholder="EMAIL" name="email" />
								        </div>
							      	</div>
							      	<div className="form-group">
								      	<div className="col-sm-12">
								      		<textarea className="form-control" rows="10"  placeholder="MESSAGE" name="message"></textarea>
								      	</div>
							      	</div>
							      	<div className="form-group">
								      	<div className="col-sm-12">
								      		<button className="btn  send-button" id="submit" type="submit">
								      			SEND
								      		</button>
								      	</div>
							      	</div>	
	    						</form>
	    					</div>
	    					<div className="col-md-6">
	    						<div className="direct-contact-container">
							      	<ul className="contact-list">
								        <li className="list-item"><i className="fa fa-map-marker fa-1x"><span className="contact-text place">Fabrication Bay near Tech Park SRM-IST Kattankulathur Chennai(TN) - 603203</span></i></li><br />
								        <li className="list-item"><i className="fa fa-phone fa-1x"><span className="contact-text phone"><a href="tel:+919797009876" title="Give us a call">(+91) 9797009876</a></span></i></li>
								        <li className="list-item"><i className="fa fa-envelope fa-1x mail"><span className="contact-text gmail"><a href="mailto:theelecruisers@gmail.com" title="Send us an email">elecruisers@gmail.com</a></span></i></li>
							      	</ul>
	    						</div>
	    					</div>
	    				</div>
	      				<hr />
	    				<div className="copyright">&copy;TEAM WEBARCH||ALL OF THE RIGHTS RESERVED</div>
	    			</div>
  				</div>
			</section>
		</div>
	)
}

export default Cotnact