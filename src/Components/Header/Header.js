import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { Link } from 'react-router-dom';
import { useStateValue } from '../StateProvider';
import { auth } from '../firebase';


const Header = () => {
    const [{ basket,user },  dispatch] = useStateValue();

 
    const handleAuthentication = () => {
        if (user) {
          auth.signOut();
        }
      }

    return (
        <div className='header'>
            <Link to='/'>
                <img className='header_logo' src='http://pngimg.com/uploads/amazon/amazon_PNG11.png' alt="" />
            </Link>


            <div className="header_search">
                <input className='header_searchinput'
                    type='text' />
                <SearchIcon className='search_icon' />
            </div>

            <div className='header_nav'>
                <Link to={!user && '/login'}>
                    <div onClick={handleAuthentication} className="header_option">
                        <span className='header_optionOne'>
                            Hello { !user ? 'Guest' : user.email} 
                        </span>
                        <span className='header_optionTwo'>
                        {user ? 'Sign Out' : 'Sign In'}</span>
                    </div>
                </Link>

                <div className="header_option">
                    <span className='header_optionOne'>
                        Returns
                    </span>
                    <span className='header_optionTwo'>
                        &Orders
                    </span>
                </div>
                <div className="header_option">
                    <span className='header_optionOne'>
                        Your
                    </span>
                    <span className='header_optionTwo'>
                        Prime
                    </span>
                </div>
                <Link to='/checkout'>
                    <div className="header_optionbasket">
                        <ShoppingBasketIcon />
                        <span className="header_optiontwo header_basketcount">{basket.length}</span>
                    </div>
                </Link>


            </div>

        </div>
    )
}

export default Header