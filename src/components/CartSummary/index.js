import CartContext from '../../context/CartContext'

import './index.css'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
      const noOfItems = cartList.length
      const priceOfItemsList = cartList.map(
        eachItem => eachItem.price * eachItem.quantity,
      )
      const totalCost = priceOfItemsList.reduce(
        (accumulator, eachItem) => accumulator + eachItem,
      )

      return (
        <div className="cart-summary-bg-container">
          <div className="cart-summary-responsive-container">
            <div className="order-total-container">
              <div>
                <h1 className="order-total">
                  Order Total:{' '}
                  <span className="total-amount">Rs {totalCost}/-</span>
                </h1>
                <p className="no-of-items">{noOfItems} items in cart</p>
              </div>
            </div>
            <button className="checkout-btn" type="button">
              Checkout
            </button>
          </div>
        </div>
      )
    }}
  </CartContext.Consumer>
)
export default CartSummary
