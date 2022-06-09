import React from 'react';
// import { shallow } from 'enzyme';
import {GifGridItem} from '../../components/GifGridItem';
import '@testing-library/jest-dom/extend-expect';
import {render} from '@testing-library/react';



describe('Pruebas en <GifGridItem/>', () =>{

    const title = 'Un titulo';
    const url = 'https://github.com/'

    test('Debe mostrar el componente correctamente', ()=>{
        const nota = {
            content: 'This is a test',
            important: true
        }

        const utils = render(<GifGridItem title={title} url={url} />);
        // console.log(utils);
        utils.asFragment('this is a test');
        expect(utils).toBeDefined();
        
    });

    test('Debe de tener un párrafo con el tittle', ()=>{
        const utils = render(<p>{title}</p>);
        
    })
})

