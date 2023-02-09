import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React from 'react'
import { Link } from 'react-router-dom';
import CheckoutProduct from '../CheckoutProduct/CheckoutProduct';
import { useStateValue } from '../StateProvider';
import './Payment.css'

const Payment = () => {

    const stripe = useStripe();
    const elements = useElements()
    const [{ basket,user },  dispatch] = useStateValue();
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
                    <p>{!user ?'' :user.email}</p>
                    <p>123 React Lane</p>
                    <p>Los Angeles CA</p>
                </div>
            </div>

            <div className="payment_section">
                <div className="payment_title">
                    <h3>Review items and delivery</h3>
                </div>
                <div className="payment_items">
                    {basket.map(item=>(
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
                        <form action="">
                            <CardElement/>
                        </form>
                </div>
                </div>
        </div>
    </div>
  )
}

export default Payment