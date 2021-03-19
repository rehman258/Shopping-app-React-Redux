import React from 'react'
import * as ReactBootstraps from 'react-bootstrap';
export default class About extends React.Component {
	render() {
		return (
			<div>
				<ReactBootstraps.Container>
					<ReactBootstraps.Row>
						<ReactBootstraps.Col xs={4}>
					      	<ReactBootstraps.Image src="https://seeklogo.com/images/D/d3-logo-C1884590DC-seeklogo.com.png" thumbnail />
					    </ReactBootstraps.Col>
					    <ReactBootstraps.Col xs={6}>
					    	<p className="h6">
					    		Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
								tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
								quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
								consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
								cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
								proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
								Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
								tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
								quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
								consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
								cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
								proident, sunt in culpa qui officia deserunt mollit anim id est laborum.		
					    	</p>
					    </ReactBootstraps.Col>
					</ReactBootstraps.Row>
				</ReactBootstraps.Container>
				
			</div>
		)
	}
}