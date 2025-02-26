import React from 'react';
import { Card, Image } from 'semantic-ui-react';

interface Project {
  title: string;
  deployed: string;
  github: string;
}

const projects: Project[] = [
  { title: 'Project One', deployed: 'https://deployed-app-one.example.com', github: 'https://github.com/yourusername/project-one' },
  { title: 'Project Two', deployed: 'https://deployed-app-two.example.com', github: 'https://github.com/yourusername/project-two' },
  { title: 'Project Three', deployed: 'https://deployed-app-three.example.com', github: 'https://github.com/yourusername/project-three' },
  { title: 'Project Four', deployed: 'https://deployed-app-four.example.com', github: 'https://github.com/yourusername/project-four' },
  { title: 'Project Five', deployed: 'https://deployed-app-five.example.com', github: 'https://github.com/yourusername/project-five' },
  { title: 'Project Six', deployed: 'https://deployed-app-six.example.com', github: 'https://github.com/yourusername/project-six' }
];

const Projects: React.FC = () => {
  return (
    <div style={{ padding: '2em' }}>
      <h2>Portfolio</h2>
      <Card.Group itemsPerRow={3} stackable>
        {projects.map((project, index) => (
          <Card key={index}>
            <Image
              src={`https://via.placeholder.com/300?text=${encodeURIComponent(project.title)}`}
              wrapped
              ui={false}
              alt={project.title}
            />
            <Card.Content>
              <Card.Header>{project.title}</Card.Header>
            </Card.Content>
            <Card.Content extra>
              <a href={project.deployed} target="_blank" rel="noopener noreferrer">
                Deployed App
              </a>
              {' | '}
              <a href={project.github} target="_blank" rel="noopener noreferrer">
                GitHub Repo
              </a>
            </Card.Content>
          </Card>
        ))}
      </Card.Group>
    </div>
  );
};

export default Projects;
