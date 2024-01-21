import React, { useEffect, useState } from 'react'
import "./News.scss"
function News() {
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
        <div className='news'>
            <div className="news_container">
                <div className="news_container_head">
                    
                    <h6>
                       NEWS

                    </h6>
                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                </div>
                <div className="news_container_cards">

                    {
                        dbData.map((item) =>
                            <div className="news_container_cards_card" key={item._id}>

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

                                </div>



                            </div>



                        )
                    }


                </div>
            </div>
        </div >
    )
}

export default News