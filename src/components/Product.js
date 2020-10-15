import React from 'react'

function Product({ id, title, image, price, rating }) {
    return (
        <div className='product'>
            <div className="product__info">
                <p>{title}</p>

                <p className='product__info-price'>
                    <smal>$</smal>
                    <strong>{price}</strong>
                </p>

                <div className="product__info-rating">
                    {Array(rating).fill().map((_, i) => (
                        <p>🌟</p>
                    ))}
                </div>
            </div>

            <img src={image} alt=""/>

            <button>Add to Basket</button>
        </div>
    )
}

export default Product;
