import { Button } from '@mui/material'
import React from 'react'
import CurrencyFormat from 'react-currency-format'
import { useNavigate } from 'react-router-dom'
import { getBasketTotal } from '../reducer'
import { useStateValue } from '../StateProvider'
import './Subtotal.css'


const Subtotal = () => {

  const navigate = useNavigate();
  const[{basket},dispatch] = useStateValue();

  return (
    <div className='subtotal'>
         <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              {/* Part of the homework */}
              Subtotal ({basket.length} items): <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)} // Part of the homework
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />

      <button onClick={(e)=>navigate('/payment')}>Proceed to checkout</button>
    </div>
  )
}

export default Subtotal