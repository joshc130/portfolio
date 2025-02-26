import React from 'react';
import { Container, Segment } from 'semantic-ui-react';

const Footer: React.FC = () => {
  return (
    <Segment inverted vertical style={{ padding: '1em 0em', marginTop: '2em' }}>
      <Container textAlign="center">
        <p>
          Connect with me:{' '}
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">GitHub</a> |{' '}
          <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">LinkedIn</a> |{' '}
          <a href="https://stackoverflow.com/users/youruserid" target="_blank" rel="noopener noreferrer">Stack Overflow</a>
        </p>
      </Container>
    </Segment>
  );
};

export default Footer;

