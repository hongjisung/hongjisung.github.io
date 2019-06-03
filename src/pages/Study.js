import React from 'react';
import ReactMarkdown from 'react-markdown';

const markdown = `## &nbsp;&nbsp;My Study
`;

const Study = () =>
  <div>
  <ReactMarkdown source={markdown}/>
  </div>

export default Study;