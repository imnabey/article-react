import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import News from './components/News.jsx';
import Article from './components/Article.jsx';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
<Router history>
    <Route path="/" component={App}>
        <Route path="news" component={News}></Route>
        <Route path="article" component={Article}></Route>
    </Route>
</Router>, document.getElementById('root'));

registerServiceWorker();
