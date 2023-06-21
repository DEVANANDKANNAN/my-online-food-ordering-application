import React from "react";
import ReactDOM from 'react-dom/client';


const Header = () => {
    return(
        <div className="container d-flex">
            <div className="header flex-row">
                <div >
                <img className="logo" src="https://previews.123rf.com/images/apilukartists/apilukartists1512/apilukartists151200039/49572427-restaurant-design-vector.jpg"></img>
                </div>
                <div className="search-btn">
                    <span>Search</span>
                </div>
                <div className="nav-bar">
                    <ul>
                        <li>Offer</li>
                        <li>Help</li>
                    </ul>
                </div>
            <div>

            </div>
        </div>
        </div>
    )
};

const AppLayout = () => {
    return(
        <Header />
    )
};

export default AppLayout;