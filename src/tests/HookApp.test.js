import React from 'react';
import { shallow } from "enzyme";
import { HookApp } from '../HookApp';


describe('Pruebas sobre <HookApp />', () => {
    
    test('Debe de mostrar el componente correctamente', () => {
        
        const wrapper = shallow(<HookApp />);
        expect(wrapper).toMatchSnapshot();

    });    

});
