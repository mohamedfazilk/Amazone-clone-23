import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import CurrencyFormat from 'react-currency-format';
import { Link } from 'react-router-dom';
import CheckoutProduct from '../CheckoutProduct/CheckoutProduct';
import { getBasketTotal } from '../reducer';
import { useStateValue } from '../StateProvider';
import './Payment.css'

const Payment = () => {
    const [{ basket, user }, dispatch] = useStateValue();

    const stripe = useStripe();
    const elements = useElements()

    const [clientSecret, setClientSecret] = useState(true);
    const [succeeded, setSucceeded] = useState(false);
    const[processing, setProcessing] = useState("")
    const [disabled, setDisabled] = useState(true)
    const [error, setError] = useState(null);
  
    useEffect(()=>{
        // generate the special stripe which allows us to charge
        //a customer 
        const getClientSecret = async() =>{
            const response = await axios({
                method: 'post',
                //stripe expects the total ina currencies subunits
                url:`/payments/create/?total=${getBasketTotal(basket) * 100}`
            })

            setClientSecret(response.data.clientSecret)

        }
        getClientSecret();;
    },[basket])

    const handleSubmit = async (e) => {
        e.preventDefault();
        setProcessing(true);
        const payload = await stripe.confirmCardPayment(clientSecret,
            {payment_method:{
                
            }
            }) 
    }

    const handleChange = (e => {
        //Listen for changes in the cardElement
        //display errornas the customer types thier card details
        setDisabled(e.empty);
        setError(e.error ? e.error.message : "");
    })

  
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
                                <button disabled={processing || disabled 
                                    || succeeded}>
                                        <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                                    </button>
                            </div>

                            {error && <div>{error}</div>}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Payment