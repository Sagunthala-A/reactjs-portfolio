import React from 'react';
import ReactDOM  from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import HireMe from './Components/HireMe/HireMe';
import { Routes ,Route } from 'react-router';

ReactDOM.render(
<BrowserRouter >
    <Routes>
        <Route path='/' element = {<App/>}/>
        <Route path='hireme' element = {<HireMe/>}/>
    </Routes>
</BrowserRouter>
, document.getElementById('root'))