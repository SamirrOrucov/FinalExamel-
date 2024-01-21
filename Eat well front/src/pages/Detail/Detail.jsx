import React, { useContext, useEffect, useState } from 'react'
import "./Deatil.scss"
import { useParams } from 'react-router-dom'
import { BasketContext } from '../../context/BasketContext'
import { Helmet } from 'react-helmet-async'
import Wishlist from '../Wishlist/Wishlist'
import { WishlistContext } from '../../context/WishlistContext'
function Detail() {
    const { id } = useParams()
    const [dbData, setDbData] = useState([])
    const { addBasket } = useContext(BasketContext)
    const { wishlist, handleWishlist } = useContext(WishlistContext)

    async function getFetch() {
        const response = await fetch("http://localhost:3003/" + id)
        const data = await response.json()
        setDbData(data)
    }
    useEffect(() => {
        getFetch()
    }, [])
    return (
        <div className='detailSec'>
            <div>
                <Helmet>
                    <title>Detail</title>
                </Helmet>
            </div>
            <div className="detailSec_container">
                <div className="detailSec_container_cards">
                    {
                        <div className="detailSec_container_cards_card">

                            <div className="image">
                                <img src={dbData.image} alt="" />
                            </div>
                            <div className="info">
                                <div className="price">
                                    <span>${dbData.price}</span>
                                </div>
                                <div className="title">
                                    <p>{dbData.title}</p>
                                </div>
                                <div className="detail">
                                    <p>{dbData.detail}</p>

                                </div>


                                <div className="operations">
                                    <i onClick={() => addBasket(dbData)} className="fa-solid fa-cart-shopping"></i>
                                    {
                                        wishlist.some((x) => x._id === dbData._id) ?
                                            <i onClick={() => handleWishlist(dbData)} className="fa-solid fa-heart red"></i> :
                                            <i onClick={() => handleWishlist(dbData)} className="fa-regular fa-heart heart"></i>
                                    }
                                </div>
                            </div>



                        </div>




                    }


                </div>
            </div>

        </div>
    )
}

export default Detail