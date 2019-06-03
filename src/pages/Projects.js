import React from 'react';
import ReactMarkdown from 'react-markdown';

const markdown = `## &nbsp;&nbsp;My Projects
`;

const Projects = () =>
  <div>
    <ReactMarkdown source={markdown}/>
  </div>

export default Projects;