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
})