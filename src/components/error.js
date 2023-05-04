import React from 'react';
import { useNavigate } from "react-router-dom"

const Error = () => {

  const history = useNavigate();

  return (
    <>
      <div className="error">

        <h1>404 ERROR ! Page Not Found !!</h1>

        <button class="cmn_btn" onClick={() => history("/")}>Redirect To Login Page</button>

      </div>
    </>
  );
}

export default Error;
