import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { Link } from "react-router-dom";
// import { useStateValue } from './StateProvider';

function Header() { 
    // const [ basket, dispatch] = useStateValue();

    return (
        <div className='header'>
            <Link to='/'> <img className="header__logo" alt=" " src="data:image/png;base64,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" />
            </Link>

            <div className="header__search">
                <input className="header__searchInput" type="text" />
                <SearchIcon
                    className="header__searchIcon"
                />
            </div>

            <div className="header__nav">
                <div className="header__option">
                    <span className="header__opitonLineOne">
                        hello, Guest
                    </span>
                    <span className="header__optionLineTwo">
                        Sign In
                    </span>
                </div>

                <div className="header__option">
                    <span className="header__opitonLineOne">
                        returns
                    </span>
                    <span className="header__optionLineTwo">
                        & Orders
                    </span>
                </div>

                <div className="header__option">
                    <span className="header__opitonLineOne">
                        Your
                    </span>
                    <span className="header__optionLineTwo">
                        Prime
                    </span>
                </div>
                <Link to='/checkout'>
                <div className="header__optionBasket">
                    <ShoppingBasketIcon />
                    <span className="header__optionLineTwo header__basketCount">
                          0
                    </span>
                </div>
                </Link>
            </div>

        </div>
    )
}

export default Header
