import React from 'react'

function Hero(props) {
    return (
        // <div class="container-fluid bgblack">
        <div class="container-fluid">
            <div class="row">
                <div class="col-sm-12 col-md-6">
                    <div class="row">
                        <span class="edition_no "> {props.enum}</span>
                    </div>
                    <div class="row">
                        <div class="pink"></div>
                        <ul class="twe-text">
                            <li class="twe-text-styles heroh">The</li>
                            <li class="twe-text-styles heroh">Weekly</li>
                            <li class="twe-text-styles heroh">Edge</li>
                        </ul>
                    </div>
                </div>
                <div class="col-sm-12 col-md-6 img-pos">
                    <img class="img-responsive landing-img" src="style/landing.svg" alt="..." />
                </div>

            </div>
        </div>
        // </div>
    )
}

export default Hero