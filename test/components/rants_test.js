import { renderComponent, expect }from '../test_helper';
import Rants from '../../src/seed/components/rants';

describe ('Rants', () => {

	let component;

	beforeEach(() => {
		component = renderComponent(Rants);
	});


	it ('Rants exists', () => {
		expect(component).to.exist;
	})
});

