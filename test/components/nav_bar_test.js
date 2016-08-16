import { renderComponent, expect }from '../test_helper';
import NavBar from '../../src/components/nav_bar';

describe ('NavBar', () => {

	let component;

	beforeEach(() => {
		component = renderComponent(NavBar);
	});


	it ('NavBar exists', () => {
		expect(component).to.exist;
	})
});

