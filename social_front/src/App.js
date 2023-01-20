import React, { useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

import Login from "./components/login";
import Home from "./containers/home";
import { fetchUser } from '../src/utils/fetchUser';


const App = () => {
  const navigate = useNavigate()

  useEffect(() => {
    const user = fetchUser();

    if (!user) return navigate('/login');
  }, []);

  return (
   <Routes>
     <Route path='/*' element={<Home/>}/>
     <Route path='/login' element={<Login/>}/>     
   </Routes>
  )
}
export default App;
