import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import About from './About';

describe("what is rendered", () => {
  test('renders About text', () => {
    const { container } = render(<About />);
  
    const aboutUsH2 = container.getElementsByTagName("h2")[0];
    expect(aboutUsH2.textContent).toMatch(/ABOUT US/);
  });
  
  test('renders a specific set of three h2s', () => {
    const { container } = render(<About />);
  
    const weAreH2s = container.getElementsByTagName("h2");
    
    // WE ARE appears three times in h2
    expect(weAreH2s[1].textContent).toMatch(/WE ARE (?!HERE FOR)/);
    expect(weAreH2s[2].textContent).toMatch(/WE ARE (?!HERE FOR)/);
    expect(weAreH2s[3].textContent).toMatch(/WE ARE (?!HERE FOR)/);
  });
  
  test('renders the last h2 with specific text', () => {
    const { container } = render(<About />);
  
    const weAreHereForyouH2 = container.getElementsByTagName("h2")[4];
  
    // WE ARE HERE FOR in one h2
    expect(weAreHereForyouH2.textContent).toMatch(/WE ARE HERE FOR/);
  });
  
  test('renders three buttons', () => {
    const { container } = render(<About />);
  
    const btns = container.getElementsByTagName("button");
  
    // There are only three buttons on this page
    expect(btns).toHaveLength(3);
  
    // SEE VOLUNTEER OPPORTUNITIES button appears
    expect(btns[0]).toHaveTextContent("SEE VOLUNTEER OPPORTUNITIES");

    // SEND US YOUR PHOTO OR ARTWORK button appears
    expect(btns[1]).toHaveTextContent("SEND US YOUR PHOTO OR ARTWORK");

    // ADD A RESOURCE button appears
    expect(btns[2]).toHaveTextContent("ADD A RESOURCE");
  });
});

xdescribe("what happens after a button is clicked", () => {
  test.skip('volunteer button after mouse click', () => {
    const user = userEvent.setup();

    const { container } = render(<About />);
  
    const volunteerBtn = container.getElementsByTagName("button")[1];
  
    // VOLUNTEER button navigates to /volunteer[TBD]
    user.click(volunteerBtn);
    const loc = window.location.href;

    expect(loc).toMatch(/(\/volunteer)$/);
  });

  test.skip('volunteer button after keyboard selection and enter press', () => {
    const user = userEvent.setup();

    const { container } = render(<About />);
  
    const volunteerBtn = container.getElementsByTagName("button")[1];
  
    // VOLUNTEER button navigates to /volunteer[TBD]
    // user.???(volunteerBtn);
    const loc = window.location.href;

    expect(loc).toMatch(/(\/volunteer)$/);
  });

  test.skip('submit artwork button after mouse click', () => {
    const user = userEvent.setup();

    const { container } = render(<About />);
  
    const addResourceBtn = container.getElementsByTagName("button")[1];
  
    // SUBMIT ARTWORK button navigates to /submit-artwork[TBD]
    user.click(addResourceBtn);
    const loc = window.location.href;

    expect(loc).toMatch(/(\/submit-artwork)$/);
  });

  test.skip('submit artwork button after keyboard selection and enter press', () => {
    const user = userEvent.setup();

    const { container } = render(<About />);
  
    const submitArtworkBtn = container.getElementsByTagName("button")[1];
  
    // SUBMIT ARTWORK button navigates to /submit-artwork[TBD]
    // user.???(submitArtworkBtn);
    const loc = window.location.href;

    expect(loc).toMatch(/(\/submit-artwork)$/);
  });

  test.skip('add resource button after mouse click', async () => {
    const user = userEvent.setup();

    const { container } = render(<About />);
  
    const addResourceBtn = container.getElementsByTagName("button")[2];
    
    // ADD A RESOURCE button navigates to /add-a-resource[TBD]
    await user.click(addResourceBtn);

    expect(jest.fn()).toHaveBeenCalled();

    const loc = window.location.href;
    
    expect(loc).toMatch(/(\/add-a-resource)$/);
  });

  test.skip('add resource button after keyboard selection and enter press', () => {
    const user = userEvent.setup();

    const { container } = render(<About />);
  
    const addResourceBtn = container.getElementsByTagName("button")[2];
  
    // ADD A RESOURCE button navigates to /add-a-resource[TBD]
    // user.???(addResourceBtn);
    const loc = window.location.href;

    expect(loc).toMatch(/(\/add-a-resource)$/);
  });
});
