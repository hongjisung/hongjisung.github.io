import React, { useState } from 'react';
import './css/app.css';
import { HashRouter as Router, Route, browserHistory } from 'react-router-dom';
import { Header, ContentList } from './components';
import { Home, Projects, Study, Interest } from './pages'

const App = () => {
  const [mobileList, setMobileList] = useState(false);

  return (
    <Router>
      <div className="app">
        <Header setMobileList={() => setMobileList(!mobileList)}/>
        <div className='app-top'></div>
        { mobileList ? <ContentList /> : null}
        <Route exact path='/' component={Home} />
        <Route path='/projects' component={ Projects } />
        <Route path='/study' component={ Study } />
        <Route path='/interest' component={ Interest } />
      </div>
    </Router>
  );
}

export default App;
