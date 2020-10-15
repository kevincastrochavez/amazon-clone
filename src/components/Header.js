import React from "react";
import { Search, ShoppingBasket } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useStateValue } from "../StateProvider";
import { auth } from "../firebase";

function Header() {
  const [{ basket, user }, dispatch] = useStateValue();

  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  }

  return (
    <div className="header">
      <Link to="/">
        <img
          className="header__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="Amazon Logo"
        />
      </Link>

      <div className="header__search">
        <input className="header__search-input" type="text" />

        <Search className="header__search-icon" />
      </div>

      <div className="header__nav">
        <Link to={!user && '/login'}>
          <div onClick={handleAuthentication} className="header__nav-option">
            <span className="header__nav-option-lineOne">Hello Guest</span>

            <span className="header__nav-option-lineTwo">
              {user ? "Sign Out" : "Sign In"}
            </span>
          </div>
        </Link>

        <div className="header__nav-option">
          <span className="header__nav-option-lineOne">Returns</span>

          <span className="header__nav-option-lineTwo">& Orders</span>
        </div>

        <div className="header__nav-option">
          <span className="header__nav-option-lineOne">Your</span>

          <span className="header__nav-option-lineTwo">Prime</span>
        </div>

        <Link to="/checkout">
          <div className="header__nav-option-basket">
            <ShoppingBasket />

            <span className="header__nav-option-lineTwo header__nav-basketCount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
