import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useState } from 'react'
import CurrencyFormat from 'react-currency-format';
import { Link } from 'react-router-dom';
import CheckoutProduct from '../CheckoutProduct/CheckoutProduct';
import { getBasketTotal } from '../reducer';
import { useStateValue } from '../StateProvider';
import './Payment.css'

const Payment = () => {

    const [disable, setDisabled] = useState(true)
    const [error, setError] = useState(null);
    const stripe = useStripe();
    const elements = useElements()

    const handleSubmit = (e => {
        //
    })

    const handleChange = (e => {
        //Listen for changes in the cardElement
        //display errornas the customer types thier card details
        setDisabled(e.empty);
        setError(e.error ? e.error.message : "");
    })

    const [{ basket, user }, dispatch] = useStateValue();
    return (
        <div className='payment'>
            <div className="payment_container">
                <h1>Checkout(
                    <Link to='/checkout'>{basket.length} items</Link>
                    )</h1>
                <div className="payment_section">
                    <div className="payment_title">
                        <h3>Delivery Address</h3>
                    </div>
                    <div className="payment_address">
                        <p>{!user ? '' : user.email}</p>
                        <p>123 React Lane</p>
                        <p>Los Angeles CA</p>
                    </div>
                </div>

                <div className="payment_section">
                    <div className="payment_title">
                        <h3>Review items and delivery</h3>
                    </div>
                    <div className="payment_items">
                        {basket.map(item => (
                            <CheckoutProduct
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                            />
                        ))}
                    </div>
                </div>

                <div className="payment_section">
                    <div className="payment_title">
                        <h3>Payment Method</h3>
                    </div>
                    <div className="payment_details">
                        <form onSubmit={handleSubmit} action="">
                            <CardElement onChange={handleChange} />

                            <div className="payment_priceContainer">
                                <CurrencyFormat
                                    renderText={(value) => (
                                        <>
                                            <h3>Order Total: {value}</h3>
                                        </>
                                    )}
                                    decimalScale={2}
                                    value={getBasketTotal(basket)} // Part of the homework
                                    displayType={"text"}
                                    thousandSeparator={true}
                                    prefix={"$"}
                                />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Payment