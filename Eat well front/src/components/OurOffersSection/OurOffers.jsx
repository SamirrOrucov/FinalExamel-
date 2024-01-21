import React, { useContext, useEffect, useState } from 'react'
import "./OurOffers.scss"
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper/modules';
import { BasketContext } from '../../context/BasketContext';
import { Link } from 'react-router-dom';
import { WishlistContext } from '../../context/WishlistContext';
function OurOffers() {
    const { addBasket } = useContext(BasketContext)
    const { wishlist, handleWishlist } = useContext(WishlistContext)

    const [dbData, setDbData] = useState([])

    async function getFetch() {
        const response = await fetch("http://localhost:3003/")
        const data = await response.json()
        setDbData(data)
    }
    useEffect(() => {
        getFetch()
    }, [])


    return (
        <div className='offer'>
            <div className="offer_container">
                <div className="offer_container_head">
                    <span>OUR OFFERS
                    </span>
                    <h6>
                        Our Offer This Summer

                    </h6>
                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                </div>
                <div className="offer_container_cards">
                    <Swiper
                        slidesPerView={3}
                        spaceBetween={30}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Pagination]}
                        breakpoints={{
                            300: {
                                slidesPerView: 1,
                                spaceBetween: 2,
                            }, 600: {
                                slidesPerView: 1,
                                spaceBetween: 2,
                            },
                            768: {
                                slidesPerView: 2,
                                spaceBetween: 40,
                            },
                            1204: {
                                slidesPerView: 3,
                                spaceBetween: 50,
                            },
                        }}
                        className="mySwiper"
                    >

                        {
                            dbData.map((item) => <SwiperSlide key={item._id}>
                                <div className="offer_container_cards_card">

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
                                        <button>Order Now!</button>
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

                            </SwiperSlide>


                            )
                        }
                    </Swiper>


                </div>
            </div>
        </div>
    )
}

export default OurOffers