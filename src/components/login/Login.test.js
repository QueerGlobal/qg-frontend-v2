import { render, screen } from '@testing-library/react';
import Login from './Login';

test('renders top text', () => {
    render(<Login />);
    const wbText = screen.getByText(/Welcome Back/i);
    expect(wbText).toBeInTheDocument();
});

test('renders log in heading', () => {
    const { container } = render(<Login />);

    expect(container.getElementsByTagName("header")[0].textContent).toBe("LOG IN");
});

test('renders log in btn', () => {
    const { container } = render(<Login />);
    
    expect(container.getElementsByTagName("button")[0].textContent).toBe("LOG IN");
});

test('renders forgot pw link', () => {
    render(<Login />);

    const fPWLink = screen.getByTitle("forgot-pw");
    expect(fPWLink).toBeInTheDocument();
});

test('renders sign up link', () => {
    render(<Login />);

    const signupLink = screen.getByTitle("sign-up");
    expect(signupLink).toBeInTheDocument();
});
