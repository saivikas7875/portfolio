import { renderComponent, expect }from '../test_helper';
import HomePage from '../../src/components/home_page';

describe ('HomePage', () => {

	let component;

	beforeEach(() => {
		component = renderComponent(HomePage);
	});


	it ('HomePage exists', () => {
		expect(component).to.exist;
	})
});

