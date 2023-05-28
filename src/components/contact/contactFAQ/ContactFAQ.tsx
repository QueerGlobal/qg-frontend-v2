import React, { FC } from "react";

import { AccordionBox, StyledAccordion, PanelBox } from "./ContactFAQ.css";
import { TitleText } from "../contactCTA/ContactCTA.css";

import Accordion from "react-bootstrap/Accordion";

const ContactFAQ: FC = () => {
  return (
    <PanelBox id="panels-box">
      <TitleText>F.A.Q.</TitleText>
      <AccordionBox id="accordion-box">
        <StyledAccordion flush>
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              <b>How do I add a resource?</b>
            </Accordion.Header>
            <Accordion.Body>
              Elit dolor irure dolore reprehenderit Lorem ad id culpa nulla
              nostrud. Non fugiat consectetur minim adipisicing reprehenderit
              amet exercitation. Officia amet nulla esse dolor aliqua
              adipisicing quis officia laboris deserunt occaecat. Anim minim
              eiusmod incididunt do duis sunt occaecat do laboris deserunt
              ullamco consequat commodo anim. Excepteur sit eu amet duis
              excepteur excepteur reprehenderit anim et eu sunt reprehenderit
              nostrud culpa. Sint esse ut magna aliqua.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>
              <b>How do I edit my privacy settings?</b>
            </Accordion.Header>
            <Accordion.Body>
              Dolore adipisicing in dolore occaecat eu. Veniam elit consequat
              pariatur tempor voluptate commodo dolore tempor aliqua laboris
              mollit quis. Magna sit et esse mollit.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>
              <b>How do I block or unblock someone?</b>
            </Accordion.Header>
            <Accordion.Body>
              Adipisicing consectetur labore veniam pariatur. Aliqua ad aute
              labore consectetur magna. Voluptate ullamco ad ad fugiat in
              officia velit aliquip Lorem deserunt aute dolore adipisicing. Elit
              cupidatat dolore aliqua nulla ea nulla quis Lorem Lorem velit.
              Reprehenderit mollit labore non ad eiusmod proident aute mollit
              qui officia do laborum id excepteur. Fugiat nostrud dolor proident
              non veniam et quis minim adipisicing. Deserunt commodo dolore
              exercitation laborum cupidatat eiusmod irure nostrud.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>
              <b>How do I donate something other than money?</b>
            </Accordion.Header>
            <Accordion.Body>
              Ad laboris fugiat do dolore sunt dolor ex est minim occaecat
              deserunt. Consequat quis dolor velit nulla mollit. Nostrud eiusmod
              eu sit aute consequat cupidatat ex sint id esse labore tempor
              nostrud fugiat. Nostrud id fugiat id Lorem deserunt eu fugiat
              voluptate nulla minim. Exercitation ipsum commodo duis occaecat et
              eu culpa esse. Irure et dolor anim consequat officia esse eiusmod
              laboris ad exercitation magna ipsum laborum.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="4">
            <Accordion.Header>
              <b>I am having trouble adding a resource</b>
            </Accordion.Header>
            <Accordion.Body>
              Cillum laboris mollit velit deserunt dolore dolore. Officia in
              exercitation excepteur mollit deserunt. Culpa labore veniam eu ad
              id labore irure id culpa deserunt aute.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="5">
            <Accordion.Header>
              <b>How do I change my username or email address?</b>
            </Accordion.Header>
            <Accordion.Body>
              <p>To change your username or email:</p>
              <ol>
                <li>
                  Go to your profile by clicking your profile icon in the top
                  right corner. ( On mobile, this is in the hamburger menu: ☰ )
                </li>
                <li>Click account settings.</li>
                <li>Scroll down and click privacy.</li>
                <li>Edit your username or email address as desired.</li>
              </ol>
              <p>
                NOTE: updating your username will require confirmation by email.
                After 24 hours, your old username will be available for someone
                else to use.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="6">
            <Accordion.Header>
              <b>
                Is it safe to put my credit card information through the donate
                links you've provided?
              </b>
            </Accordion.Header>
            <Accordion.Body>
              Minim consequat nostrud do pariatur enim mollit. Dolor tempor qui
              aute elit irure. Enim in nisi elit qui culpa veniam ex qui Lorem
              qui irure sint et. Officia sunt nisi dolor culpa reprehenderit ad
              sint nisi mollit quis non laboris proident. Est irure ea quis
              irure eu quis elit. Velit eu est proident cillum nisi irure
              veniam. Officia proident adipisicing nostrud est.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="7">
            <Accordion.Header>
              <b>What is your privacy policy?</b>
            </Accordion.Header>
            <Accordion.Body>
              Velit irure duis ut nisi laborum incididunt exercitation nisi
              adipisicing. Et ea excepteur ullamco Lorem tempor. Nisi in aute eu
              aliquip exercitation cupidatat voluptate deserunt consectetur
              laboris laborum proident. Dolore aute eu deserunt nulla do eu
              culpa est anim.
            </Accordion.Body>
          </Accordion.Item>
        </StyledAccordion>
      </AccordionBox>
    </PanelBox>
  );
};

export default ContactFAQ;
