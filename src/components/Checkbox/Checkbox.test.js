import { render, screen, fireEvent} from '@testing-library/react';
import App from '../../App';

test('initial conditions',()=>{
    render(<App/>)

    //check that the checkbox starts out unchecked
    const checkBox = screen.getByRole('checkbox')
    expect(checkBox).not.toBeChecked()
})

test('check if button is disabled when checkbox is checked',()=>{
  render(<App/>)
  const checkBox = screen.getByRole('checkbox');
  const colorButton = screen.getByRole('button', {name: "Change to blue"});
  fireEvent.click(checkBox);
  expect(colorButton).toBeDisabled()

  fireEvent.click(checkBox)
  expect(colorButton).toBeEnabled();
})