export default function ProductCard({
  products,
  clickAddCart,
  quantity,
  increaseCart,
  decreaseCart,
}) {
  const { id, name, description, price, image } = products;

  return (
    <div className='product-card'>
      <img className='product-image' src={image} alt='product' />
      <div className='product-content'>
        <p className='product-title'>{name}</p>
        <p className='product-description'>{description}</p>
      </div>
      <div className='price-content'>
        <p className='product-price'>${price}</p>
        {quantity > 0 ? (
          <div className='added-cart'>
            <span onClick={decreaseCart}> - </span>
            <span className='margin-top-4'> {quantity} </span>
            <span className='margin-top-4' onClick={increaseCart}>
              +
            </span>
          </div>
        ) : (
          <button className='add-cart-btn' onClick={clickAddCart}>
            Add +
          </button>
        )}
      </div>
    </div>
  );
}
