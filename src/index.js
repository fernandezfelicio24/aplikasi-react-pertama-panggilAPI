// eslint-disable-next-line
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import HelloComponent from './component/HelloComponent';
import StatefullComponent from './container/StateFullComponent';
import YoutubeComp from './component/YoutubeComp/YoutubeComp';
import Home from './container/Home/Home';
// const Helloworld = () => {
//     return <p> Hello World </p>
// }
//stateless Component

//StatefullComponent

ReactDOM.render(< Home /> ,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();