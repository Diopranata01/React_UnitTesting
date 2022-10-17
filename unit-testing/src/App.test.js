import { render, screen } from '@testing-library/react';
import App from './App';
import userEvent from '@testing-library/user-event';
import NameForm from './FormCoding';

// Element test nameform
describe('App', () => { 
  test('Get element Pendaftaran Peserta Coding Bootcamp test', ()=> {
      render(<NameForm/>)
      const newTest = screen.getByText('Pendaftaran Peserta Coding Bootcamp')
      expect(newTest).toBeInTheDocument();
  })
 })

// Form List Render
describe('App', () => { 
  test('Render 7 Label Input Element', ()=> {
      render(<NameForm/>)
      const newTest = screen.getAllByPlaceholderText('label')
      expect(newTest.length).toEqual(7);
  })
 })

// Form Input Text Render
describe('App', () => { 
  test('Render 3 Input Text Element', ()=> {
      render(<NameForm/>)
      const newTest = screen.getAllByRole('textbox')
      expect(newTest.length).toEqual(3);
  })
 })

// Form Input Email Render
describe('App', () => { 
  test('Render Input Email Element', ()=> {
      render(<NameForm/>)
      const newEmail = screen.getByTestId('email-form')
      expect(newEmail).toBeInTheDocument();
  })
 })

// Form Input Email Valid
describe('App', () => { 
  test('Render Input Valid Email Element ', ()=> {
      render(<NameForm/>)
      const newEmail = screen.getByTestId('email-form')
      const errMassage = screen.queryByTestId('error-form')

      userEvent.type(newEmail, 'newtest@mail.com')//user input schema

      expect(newEmail).toHaveValue('newtest@mail.com');//valid email input
      expect(errMassage).not.toBeInTheDocument();//err massage not show
  })
 })

// Render 1 Radio Element Value
describe('App', () => { 
  test('Render Input Value Radio Element', ()=> {
      render(<NameForm/>)
      const radioValue1 = screen.getByPlaceholderText('label-radio1')
      const radioValue2 = screen.getByPlaceholderText('label-radio2')
      expect(radioValue1.value).toEqual('IT');
      expect(radioValue2.value).toEqual('Non IT');
  })
 })
 
// Render Selected Element Value
describe('App', () => { 
  test('Render Input Value Select Element', ()=> {
      render(<NameForm/>)
      const selectedValue1 = screen.getByTestId('select-input1')
      const selectedValue2 = screen.getByTestId('select-input2')
      const selectedValue3 = screen.getByTestId('select-input3')

      expect(selectedValue1.value).toEqual('golang');
      expect(selectedValue2.value).toEqual('reactjs');
      expect(selectedValue3.value).toEqual('fullstack');
  })
 })

// Form Submit Button
describe('App', () => { 
  test('Render Submit Button', ()=> {
      render(<NameForm/>)
      const newTest = screen.getByTestId('submit-form')
      expect(newTest).toBeInTheDocument();
      expect(newTest).toHaveAttribute('type', 'submit');
  })
 })

// Form Reset Button
describe('App', () => { 
  test('Render Submit Button', ()=> {
      render(<NameForm/>)
      const newTest = screen.getByText('Reset')
      expect(newTest).toBeInTheDocument();
  })
 })

// Err Massage Not Displayed
describe('App', () => { 
  test('Err Massage not Displayed', ()=> {
      render(<NameForm/>)
      const errMassage = screen.queryByTestId('error-form')
      expect(errMassage).not.toBeInTheDocument();
  })
 })

// Form Input Showing Err Massage
// describe('App', () => { 
//   test('Render Input Valid Email Element ', ()=> {
//       render(<NameForm/>)
//       const newEmail = screen.getByTestId('email-form')
//       const errMassage = screen.queryByTestId('error-form')

//       userEvent.type(newEmail, 'different@mail.com')//user input schema

//       expect(newEmail).not.toHaveValue('newEmail@mail.com');//valid email input
//       expect(errMassage).toBeInTheDocument();//err massage show
//   })
//  })


