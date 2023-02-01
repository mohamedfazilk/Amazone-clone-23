import React from 'react'
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <img className='header_logo' src='http://pngimg.com/uploads/amazon/amazon_PNG11.png' />

            <div className="header_search">
                <input className='header_searchinput'
                    type='text' />
                {/* //logo// */}
            </div>

            <div className='header_nav'>
                <div className="header_option">
                    <span className='header_optionOne'>
                        Hello
                    </span>
                    <span className='header_optionTwo'>
                        Sign In
                    </span>

                </div>
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
            </div>

        </div>
    )
}

export default Header