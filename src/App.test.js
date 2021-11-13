import { render, screen } from '@testing-library/react';
import App , {replaceCamelWithSpaces} from './App';

test('render', () => {
 
});


describe('spaces before came-case capital letters',()=>{
    test('works for no inner capital letter',()=>{
        expect(replaceCamelWithSpaces("Red")).toBe("Red")
    })

    test('wors for one inner capital letter',()=>{
        expect(replaceCamelWithSpaces("MidnightBlue")).toBe("Midnight Blue")
    })

    test('works for multiple inner capital letters',()=>{
        expect(replaceCamelWithSpaces("MediumVioletRed")).toBe("Medium Violet Red");
    })
})