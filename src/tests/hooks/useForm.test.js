import { act, renderHook } from '@testing-library/react-hooks';
import { useForm } from "../../hooks/useForm";


describe('Pruebas en useCounter', () => {

    const initialForm = {
        name: 'Gaston',
        email: 'gaston@gmail.com'
    }
   
    test('Debe de regresar un formulario por defecto', () => {
        
        const { result } = renderHook(() => useForm(initialForm));
        const [formValues, handleInputChange, reset] = result.current; 

        expect(formValues).toEqual(initialForm);
        expect(typeof handleInputChange).toEqual('function');
        expect(typeof reset).toEqual('function');

    });

    test('Debe de cambiar el valor del formulario (cambiar name)', () => {
        
        const { result } = renderHook(() => useForm(initialForm));
        const [ , handleInputChange ] = result.current;

        act(() => {
            handleInputChange({ 
                target: { 
                    name: 'name', 
                    value: 'Maria' 
                } 
            });
        });

        const [ formValues ] = result.current;

        expect(formValues).toEqual({ ...initialForm, name: 'Maria' });

    });
    
    test('debe de re-establecer el formulario con reset', () => {

        const { result } = renderHook(() => useForm(initialForm));
        const [ , handleInputChange, reset ] = result.current;

        act(() => {
            handleInputChange({ 
                target: { 
                    name: 'name', 
                    value: 'Maria' 
                } 
            });

            reset();
        });

        const [ formValues ] = result.current;

        expect(formValues).toEqual(initialForm);

    });

});
