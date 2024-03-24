import React from "react"
import Nav from "./nav"
import Home from "./home"
import Card from "./card"
import Solution from "./solution"
import Reviews from "./reviews"
import Verifiaction from "./verification"
import Footer from "./footer"


function App(){
    return(
        <div>
            <Nav />
            <Home />
            <Card />
            <Solution />
            <Reviews />
            <Verifiaction />
            <Footer />

        </div>
     
    )

}
export default App