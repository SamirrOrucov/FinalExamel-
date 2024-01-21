import React from 'react'
import "./Gallery.scss"
function Gallery() {
    return (
        <div className='gallery'>
            <div className="gallery_container">
                <div className="gallery_container_head">

                    <h6>
                        Gallery

                    </h6>
                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                </div>
                <div className="gallery_container_cards">
                    <div className="gallery_container_cards_card">
                        <img src="https://preview.colorlib.com/theme/eatwell/images/menu_1.jpg" alt="" />
                    </div>
                    <div className="gallery_container_cards_card">
                        <img src="https://preview.colorlib.com/theme/eatwell/images/menu_1.jpg" alt="" />
                    </div><div className="gallery_container_cards_card">
                        <img src="https://preview.colorlib.com/theme/eatwell/images/menu_1.jpg" alt="" />
                    </div><div className="gallery_container_cards_card">
                        <img src="https://preview.colorlib.com/theme/eatwell/images/menu_1.jpg" alt="" />
                    </div><div className="gallery_container_cards_card">
                        <img src="https://preview.colorlib.com/theme/eatwell/images/menu_1.jpg" alt="" />
                    </div><div className="gallery_container_cards_card">
                        <img src="https://preview.colorlib.com/theme/eatwell/images/menu_1.jpg" alt="" />
                    </div>
                 
                </div>
            </div>
        </div>
    )
}

export default Gallery