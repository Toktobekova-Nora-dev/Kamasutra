import React from 'react';
import Home from '../pages/Home';
import About from '../pages/About';
import SignUp from '../pages/SignUp';
import { Route, Routes } from 'react-router-dom';



const MainRoutes = () => {
    let PUBLIC = [
        {
            Link: "/",
            element: <Home/>,
            id:1
        },
       {
          Link:"/About",
          element: <About/>,
          id: 2
       },
       {
        Link:"/SignUp",
        element: <SignUp/>,
        id: 2
     },

    ]
    return (
        <Routes>
            {PUBLIC.map((el)=>(<Route path={el.Link} element={el.element} key={el.id}/>))}
        </Routes>
    );
};

export default MainRoutes;