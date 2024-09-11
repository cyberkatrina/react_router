/* 
    Write code for React Router here
Import the Home and About components from 
the component folder. Assign the default
path "/" to the Home component and "/about"
to the About component.

Remember to export the component at the end
*/
import React from 'react'
import { Routes, Route} from 'react-router-dom';

import About from './components/About';
import Home from './components/Home';
import Car from './components/Car';


const Router = () => {
  return (
    /* Then we use Routes and Route. Routes acts like a regular JS Switch Statement */
    <Routes>
        {/* depending on the path in the URL, one of these Routes will be returned and their component rendered */}
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/car/:id" element={<Car/>} />
    </Routes>
  );
}

export default Router
