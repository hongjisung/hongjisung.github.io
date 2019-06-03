import React from 'react';
import '../css/main.css';
import ReactMarkdown from 'react-markdown';

const mainMarkdown = `## &nbsp;&nbsp;Jisung Hong(홍지성)
`;

const Main = () =>
  <main className="main-main">
    <ReactMarkdown source={mainMarkdown}/>
  </main>

export default Main;