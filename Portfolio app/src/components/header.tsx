import React from 'react';
import { Container, Header as SemanticHeader } from 'semantic-ui-react';
import Nav from './nav';
import { Section } from '../types';

interface HeaderProps {
  currentSection: Section;
  setSection: (section: Section) => void;
}

const Header: React.FC<HeaderProps> = ({ currentSection, setSection }) => {
  return (
    <Container textAlign="center" style={{ marginTop: '2em' }}>
      <SemanticHeader as="h1">John Doe</SemanticHeader>
      <Nav currentSection={currentSection} setSection={setSection} />
    </Container>
  );
};

export default Header;

