import React from "react"
import EastIcon from '@mui/icons-material/East';

function Home(){
    return(
        <div>
            <div id="home">
                <div class="home_text">
                    <h1>Verify any card with confidence</h1>
                    <p>Giftly is software that is used to verify, track and test the integrity of gift card or credit card information.</p>
                   <a href="#card"> <button>Verify Now <EastIcon /> </button></a>
                </div>
                <div class="home_img">
                    <img src="images/cards.png" alt="cards" />
                </div>

            </div>

        </div>
    )


}

export default Home