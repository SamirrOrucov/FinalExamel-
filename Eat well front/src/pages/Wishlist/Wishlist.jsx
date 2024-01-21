import React, { useContext } from 'react'
import { Helmet } from 'react-helmet-async'
import { WishlistContext } from '../../context/WishlistContext'
import { BasketContext } from '../../context/BasketContext'
import { Link } from 'react-router-dom'
import "./Wishlist.scss"
function Wishlist() {
    const { addBasket } = useContext(BasketContext)
    const { wishlist, handleWishlist } = useContext(WishlistContext)

    return (
        <div className='wishlist'>
            <div>
                <Helmet>
                    <title>Wishlist</title>
                </Helmet>
            </div>
            <div className="wishlist_container">
                <div className="wishlist_container_cards">
                    {
                        wishlist.map((item) =>
                            <div className="wishlist_container_cards_card" key={item._id}>

                                <div className="image">
                                    <img src={item.image} alt="" />
                                </div>
                                <div className="info">
                                    <div className="price">
                                        <span>${item.price}</span>
                                    </div>
                                    <div className="title">
                                        <p>{item.title}</p>
                                    </div>
                                    <div className="detail">
                                        <p>{item.detail}</p>

                                    </div>


                                    <div className="operations">
                                        <i onClick={() => addBasket(item)}
                                            className="fa-solid fa-cart-shopping"></i>
                                        {
                                            wishlist.some((x) => x._id === item._id) ?
                                                <i onClick={() => handleWishlist(item)} className="fa-solid fa-heart red"></i> :
                                                <i onClick={() => handleWishlist(item)} className="fa-regular fa-heart heart"></i>
                                        }

                                        <Link to={"/detail/" + item._id}>  <i className="fa-solid fa-eye"></i></Link>
                                    </div>
                                </div>



                            </div>




                        )
                    }


                </div>
            </div>

        </div>
    )
}

export default Wishlist