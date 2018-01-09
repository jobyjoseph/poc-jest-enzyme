import React from 'react';
import {shallow} from 'enzyme';
import Enzyme from 'enzyme';
import Welcome from '../src/client/components/welcome.jsx';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('Welcome (Snapshot)', () => {
    it('Welcome renders hello world', () => {
        const welcome = shallow(<Welcome />);
        expect(welcome.find('div').text()).toEqual('Hello world');
    });
});