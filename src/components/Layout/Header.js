import React from "react";

import foodImage from "../../assets/meals.jpg";
import classes from "./Header.module.css";

const Header = () => {
    return (
        <>
            <header className={classes.header}>
                <h1>React Restaurant</h1>
                <button>Cart</button>
            </header>
            <div className={classes["main-image"]}>
                <img
                    src={foodImage}
                    alt='Spread of different delicious foods'
                />
            </div>
        </>
    );
};

export default Header;
