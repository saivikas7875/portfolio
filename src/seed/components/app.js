import React from 'react';
import { Component } from 'react';
import NavBar from './nav_bar';


export default class App extends Component {
  render() {
    return (

			<div>
				<NavBar />
				<div>
					{this.props.children}
				</div>
			</div>
    );
  }
}
