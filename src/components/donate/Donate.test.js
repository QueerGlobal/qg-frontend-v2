import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Donate from './Donate';
import monthlyDonations from "./donate-interfaces";

test('renders support us heading', () => {
  render(<Donate />);
  const donatePageText = screen.getByText(/SUPPORT US/i);
  expect(donatePageText).toBeInTheDocument();
});

test('renders support us btn', () => {
  render(<Donate />);
  const monthlyBtn = screen.getByText(/SET UP MONTHLY DONATIONS/i);
  expect(monthlyBtn).toBeInTheDocument();
});

test('renders volunteer button', () => {
  render(<Donate />);
  const volunteerBtn = screen.getByText(/SEE VOLUNTEER OPPORTUNITIES/i);
  expect(volunteerBtn).toBeInTheDocument();
});

test('renders first monthly donation button', () => {
  let line1 = new RegExp(`DONATE ${monthlyDonations.qty1}`, "i");

  render(<Donate />);

  const donate1Btn = screen.getByText(line1);
  expect(donate1Btn).toBeInTheDocument();
});

test('renders second monthly donation button', () => {
  let line2 = new RegExp(`DONATE ${monthlyDonations.qty2}`, "i");
  
  render(<Donate />);
  const donate2Btn = screen.getByText(line2);
  expect(donate2Btn).toBeInTheDocument();
});

test('renders third monthly donation button', () => {
  let line3 = new RegExp(`DONATE ${monthlyDonations.qty3}`, "i");
  
  render(<Donate />);
  const donate3Btn = screen.getByText(line3);
  expect(donate3Btn).toBeInTheDocument();
});

test('renders donation services list', async () => {
  const user = userEvent.setup();
  const { container } = render(<Donate />);

  // each card has an image and title
  //      find image class "donation-svc" #
  expect(container.getElementsByClassName("donation-svc").length).toBe(5);

  // each card btn works
  //      TODO: trigger click event and look at window location
  await user.click(screen.getByRole('button', {name: /GoFundMe/i}));

  // each card btn opens new window
  //      TODO: trigger click event. Separate tab opened?Or is _blank resent?      
});
