import React from "react";
import { Search, ShoppingBasket } from "@material-ui/icons";

function Header() {
  return (
    <div className="header">
      <img
        className="header__logo"
        src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
        alt="Amazon Logo"
      />

      <div className="header__search">
        <input className="header__search-input" type="text" />

        <Search className='header__search-icon' />
      </div>

      <div className="header__nav">
        <div className="header__nav-option">
          <span className="header__nav-option-lineOne">Hello Guest</span>

          <span className="header__nav-option-lineTwo">Sign In</span>
        </div>

        <div className="header__nav-option">
          <span className="header__nav-option-lineOne">Returns</span>

          <span className="header__nav-option-lineTwo">& Orders</span>
        </div>

        <div className="header__nav-option">
          <span className="header__nav-option-lineOne">Your</span>

          <span className="header__nav-option-lineTwo">Prime</span>
        </div>

        <div className="header__nav-option-basket">
            <ShoppingBasket />

            <span className='header__nav-option-lineTwo header__nav-basketCount'>0</span>
        </div>
      </div>
    </div>
  );
}

export default Header;
