import { render, screen } from '@testing-library/react';
import About from './About';

test('renders about text', () => {
  render(<About />);
  const aboutText = screen.getByText(/ABOUT US/i);
  expect(aboutText).toBeInTheDocument();
});

test('renders about page copy', () => {
  render(<About />);

  const andWeBelieveBodyText = screen.getByText(/And we believe that kind of diversity is what makes Queerness beautiful./i);
  expect(andWeBelieveBodyText).toBeInTheDocument();

  const weAreHereForHeaderText = screen.getByText(/WE ARE HERE FOR/i);
  expect(weAreHereForHeaderText).toBeInTheDocument();
  
  const sendUsBtnText = screen.getByText(/SEND US YOUR PHOTO OR ARTWORK/i);
  expect(sendUsBtnText).toBeInTheDocument();
  
  const addAResourceBtnText = screen.getByText(/ADD A RESOURCE/i);
  expect(addAResourceBtnText).toBeInTheDocument();
});
