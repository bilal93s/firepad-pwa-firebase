import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import Editor from './components/App';
import './firepad-userlist.css';
import "bootstrap/dist/css/bootstrap.min.css";
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />,document.getElementById('root'));
ReactDOM.render(<Editor />,document.getElementById('root'));
serviceWorker.register();