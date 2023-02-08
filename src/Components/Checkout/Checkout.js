import React from 'react'
import CheckoutProduct from '../CheckoutProduct/CheckoutProduct'
import { useStateValue } from '../StateProvider'
import Subtotal from '../Subtotal/Subtotal'
import './Checkout.css'

const Checkout = () => {
  const [{ basket, user }, dispatch] = useStateValue();

  return (
    <div className='checkout'>
      <div className="checkout__left">
        <img className='checkout__ad' src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" alt="" />

        <h3>Hello {!user ? '' : user.email}</h3>
        <div className="checkout__title">
        
          <h2> Your shopping Basket</h2>

          <CheckoutProduct
            id='112342'
            title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
            image='https://m.media-amazon.com/images/I/51T-sMqSMiL._SX329_BO1,204,203,200_.jpg'
            price={19.99}
            rating={5} />

          <CheckoutProduct
            id='112342'
            title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
            image='https://m.media-amazon.com/images/I/51T-sMqSMiL._SX329_BO1,204,203,200_.jpg'
            price={19.99}
            rating={5} />


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

      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  )
}

export default Checkout