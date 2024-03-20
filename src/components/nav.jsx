import React from "react"

function Nav(){
    return(
        <div>
            <div id="nav">
                <div class="brand">
                    <img class="logo" src="images/logo.png" alt="logo" /><h3 class="nav_brand">Giftly</h3> 
                </div>
                <div class="nav_items">
                        <h3 class="nav_item"><a href="#home" >Home</a></h3>
                        <h3 class="nav_item"><a href="#reviews" >Customer Reviews</a></h3>
                        <h3 class="nav_item"><a href="#contact" >Contact</a></h3>                   
                </div>    
            </div>
           
        </div>
    )

}

export default Nav