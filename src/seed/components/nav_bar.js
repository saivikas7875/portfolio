import React, { Component } from 'react';
import { Link } from 'react-router';

class NavBar extends Component {
	render () {
		return (
			<div className="nav-bar">
				<h2 className="page-title">Sai Vikas Gopal</h2>
				<div className="buttons">
					<ul>
						<Link to="/">
							<li className="nav-btn">
								Home
							</li>
						</Link>

						<Link to="/about">
							<li className="nav-btn">
								About
							</li>
						</Link>

						<Link to="/rants">
							<li className="nav-btn">
								Rants
							</li>
						</Link>

					</ul>
				</div>
			</div>
		);
	}
}

export default NavBar;
