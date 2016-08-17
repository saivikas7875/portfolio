import { renderComponent, expect }from '../test_helper';
import About from '../../src/seed/components/about';

describe ('About', () => {

	let component;

	beforeEach(() => {
		component = renderComponent(About);
	});


	it ('about exists', () => {
		expect(component).to.exist;
	})
});

