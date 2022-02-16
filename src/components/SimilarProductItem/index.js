import './index.css'

const SimilarProductItem = props => {
  const {productDetails, getSimilarProductDetails} = props
  const {id, title, brand, imageUrl, rating, price} = productDetails

  const onClickedSimilarProduct = () => {
    getSimilarProductDetails(id)
  }

  return (
    <li className="similar-product-item">
      <button
        className="similar-product-card-button"
        onClick={onClickedSimilarProduct}
        type="button"
      >
        <img
          src={imageUrl}
          className="similar-product-img"
          alt={`similar product ${title}`}
        />
        <p className="similar-product-title">{title}</p>
        <p className="similar-products-brand">by {brand}</p>
        <div className="similar-product-price-rating-container">
          <p className="similar-product-price">Rs {price}/-</p>
          <div className="similar-product-rating-container">
            <p className="similar-product-rating">{rating}</p>
            <img
              src="https://assets.ccbp.in/frontend/react-js/star-img.png"
              alt="star"
              className="similar-product-star"
            />
          </div>
        </div>
      </button>
    </li>
  )
}

export default SimilarProductItem
