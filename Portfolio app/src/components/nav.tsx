import React from 'react';
import { Menu } from 'semantic-ui-react';
import { Section } from '../types';

interface NavProps {
  currentSection: Section;
  setSection: (section: Section) => void;
}

const Nav: React.FC<NavProps> = ({ currentSection, setSection }) => {
  return (
    <Menu pointing secondary>
      {Object.values(Section).map((section) => (
        <Menu.Item
          key={section}
          name={section}
          active={currentSection === section}
          onClick={() => setSection(section)}
        />
      ))}
    </Menu>
  );
};

export default Nav;
