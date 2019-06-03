import React from 'react';
import ReactMarkdown from 'react-markdown';

const markdown = `## &nbsp;&nbsp;My Interest
`;

const Interest = () =>
  <div>
    <ReactMarkdown source={markdown}/>
  </div>

export default Interest;