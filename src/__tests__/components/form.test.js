import React from 'react';
import { shallow, mount } from 'enzyme';

import Form from '../../components/form/form';

describe('<Form />', () => {
    it('can store users input into state', () => {
        let app = mount(<Form />);

        let input = app.find('input');
        input.simulate('change', { target: {value: 'www'}});

        expect(app.state('url')).toBe('www');
    });

    it('displays users input in output area on submit', () => {
        let app = mount(<Form />);

        let input = app.find('input');
        input.simulate('change', {target: {value: 'www'}});

        // simulate a click on method
        let method = app.find('#get');
        method.simulate('click');

        // simulate click for submit
        let form = app.find('form');
        form.simulate('submit');

        expect(app.find('span.url').text()).toBe('www');
    })
})