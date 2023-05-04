import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/header";
import Home from "./components/home";
import Login from "./components/login";
import Details from "./components/details";
import Error from "./components/error";
import Protected from './components/Protected';
import { Helmet } from 'react-helmet';
import { Routes, Route } from "react-router-dom"
import { useState } from 'react';


function App() {

  const [isLogin, setIsLogin] = useState(false);
  const TITLE = 'ToDo';

  return (
    <>

      <Helmet><title>{TITLE}</title></Helmet>
      
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login setIsLogin={setIsLogin} />} />
        <Route path="/details" element={<Details />} />
        <Route path='/details'
          element={
            <Protected isLogin={isLogin}>
              <Details />
            </Protected>
          }
        />
        <Route path="*" element={<Error />} />
      </Routes>

    </>
  );
}

export default App;
