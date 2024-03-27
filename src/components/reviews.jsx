import React from "react"


function Reviews(){
    return(
        <div style={{backgroundColor:"#1f2937"}}>
            <div id="reviews">
                        <div className="review1">
                            <h3>
                                "We have partnered with CardCheckers for several years and have found them to be extremely reliable, responsive, and helpful.
                                Their service provides a robust framework that provides rapid verification through the use of a smart algorithm that runs very quickly to provide adequate information."
                            </h3>
                            <div className="reviewer"><img src="images/michael-gouch.png" alt="" /><p>Michael Gouch</p><p className="reviewertown">Salisbury County</p></div>
                        </div>
                        <div className="review2">
                            <h3>
                                "Your service is extremely fast and efficient - both in terms of the speed of processing, and communication. 
                                I was very impressed with how quickly you were able to verify our information, especially since we were new customers. 
                                We will definitely be using your services again!"
                            </h3>
                            <div className="reviewer"><img src="images/jese-leos.png" alt="" /><p>Jese Leos</p><p className="reviewertown">Parachute Greeley Shell</p></div> 
                        </div>
            </div>
        </div>
    )

}

export default Reviews