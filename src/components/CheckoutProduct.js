import React from 'react'

function CheckoutProduct({ id, image, title, price, rating }) {
    return (
        <div className='checkoutProduct'>
            <img className='checkoutProduct__image' src={image} />

            <div className="checkoutProduct__info">
                <p className='checkoutProduct__info-title'>{title}</p>

                <p className='checkoutProduct__info-price'>
                    <small>$</small>
                    <strong>{price}</strong>
                </p>

                <div className="checkoutProduct__info-rating">
                    {
                        Array(rating).fill().map((_, i) => (
                            <p>🌟</p>
                        ))
                    }
                </div>

                <button>Remove from Basket</button>
            </div>
        </div>
    )
}

export default CheckoutProduct;
