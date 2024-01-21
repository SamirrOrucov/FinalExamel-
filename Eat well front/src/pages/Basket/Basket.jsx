import React, { useContext } from 'react'
import { BasketContext } from '../../context/BasketContext'
import "./Basket.scss"
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { WishlistContext } from '../../context/WishlistContext'
function Basket() {
    const {basket,deleteBasket,incDec} = useContext(BasketContext)
    const {wishlist,handleWishlist} = useContext(WishlistContext)

    return (
        <div className='basket'>
              <div>
          <Helmet>
        <title>Basket</title>
      </Helmet>
          </div>
            <div className="basket_container">
                <div className="basket_container_cards">
                    {
                        basket.map((item) =>
                            <div className="basket_container_cards_card" key={item._id}>

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
                                    <button onClick={()=>incDec(item,"dec")}>-</button>
                                    {item.count}
                                    <button onClick={()=>incDec(item,"inc")}>+</button>

                                    <div className="operations">
                                        <i onClick={()=>deleteBasket(item)} className="fa-solid fa-x"></i>
                                        {
                                                wishlist.some((x) => x._id === item._id) ?
                                                    <i onClick={() => handleWishlist(item)} className="fa-solid fa-heart red"></i> :
                                                    <i onClick={() => handleWishlist(item)} className="fa-regular fa-heart heart"></i>
                                            }
                                        <Link to={"/detail/"+item._id}>  <i className="fa-solid fa-eye"></i></Link>
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

export default Basket