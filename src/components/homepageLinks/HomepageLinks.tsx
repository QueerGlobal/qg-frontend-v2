import React, { FC } from 'react';

import Button from '../common/button/Button';
import { LinksWrapperProps, Header } from './HomepageLinks.css';

const HomepageLinks: FC = () => {
  return (
    <LinksWrapperProps>
    <Header>Find what you need</Header>
      <Button label='primary' buttonText='resources'/>
      <Button label='primary' buttonText='businesses' />
      <Button label='primary' buttonText='events' />
      <Button label='secondary' buttonText='support us' />
    </LinksWrapperProps>
  );
};
export default HomepageLinks;
