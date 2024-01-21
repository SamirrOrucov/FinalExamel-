import React from 'react'
import "./Welcome.scss"
function Welcome() {
    return (
        <div className='welcome'>
            <div className="welcome_container">
                <div className="text">
                    <p className='first'>OUR STORY
                    </p>
                    <div className="head">
                        <h6>Welcome
                        </h6>
                    </div>
                    <div className="info">
                        <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.
                        </p>
                    </div>
                    <button>Learn More About Us</button>
                </div>
                <div className="image">
                    <img src="https://preview.colorlib.com/theme/eatwell/images/about_img_1.jpg.webp" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Welcome