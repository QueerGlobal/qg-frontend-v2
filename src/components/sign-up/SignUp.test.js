import { render, screen } from '@testing-library/react';
import SignUp from './SignUp';

test('renders top text', () => {
    render(<SignUp />);
    const hiText = screen.getByText(/Hi!/i);
    expect(hiText).toBeInTheDocument();
});

test('renders create account heading', () => {
    render(<SignUp />);
    const createAcctText = screen.getByText(/CREATE ACCOUNT/i);
    expect(createAcctText).toBeInTheDocument();
});

test('renders personal acct btn', () => {
    const { container } = render(<SignUp />);
    
    expect(container.getElementsByTagName("button")[0].textContent).toBe("PERSONAL");
});

test('renders business acct button', () => {
    const { container } = render(<SignUp />);
    
    expect(container.getElementsByTagName("button")[1].textContent).toBe("BUSINESS");
});

test('renders log in link', () => {
    render(<SignUp />);

    const logInLink = screen.getByTitle("login");
    expect(logInLink).toBeInTheDocument();
});
