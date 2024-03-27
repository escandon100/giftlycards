import React from "react"

function Nav(){
    const close = "close"
    const menu = "menu"

    function handleMenu(){
        const menu_close = document.querySelector(".material-symbols-outlined")
        const sidebar = document.querySelector(".sidebar") 
        if(menu_close.textContent === "menu"){
            sidebar.style.display = "flex"
            menu_close.textContent = "close"
        }
            
        else if(menu_close.textContent === "close"){
            sidebar.style.display = "none"
            menu_close.textContent = "menu"
        }else{
            console.log("error")
        }  
    }
    return(
        <div>
            <div id="nav">
                <ul className="nav_items">
                    <li className="nav_item"><div className="nav_brand"><img className="logo" src="images/logo.png" alt="logo" /> Giftly</div></li>
                    <li className="hideonmobile nav_item"><a href="#home">Home</a></li>
                    <li className="hideonmobile nav_item"><a href="#reviews">Customer Reviews</a></li>
                    <li className="hideonmobile nav_item"><a href="#contact">Contact</a></li>
                    <li className="nav_item" onClick={handleMenu}><span className="material-symbols-outlined menu_button">menu</span></li>
                </ul>   
                <ul className="sidebar">
                    <li className="nav_item"><a href="#home">Home</a></li>
                    <li className="nav_item"><a href="#reviews">Customer Reviews</a></li>
                    <li className="nav_item"><a href="#contact">Contact</a></li>
                </ul>    
            </div>
           
        </div>
    )

}

export default Nav