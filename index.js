import React from "react";
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppLayout from 'src/app.js';

const Layout = () =>{
    return(
        <AppLayout />
    )
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Layout />);