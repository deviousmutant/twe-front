import React from 'react'
import './edition.css'

function Home() {
    return (
        <div>
            <div class="container-fluid bgblack">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-12 col-lg-6">
                            <span class="edition_no"> 27 </span>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-sm-12 col-lg-6 twe">
                            <div class="pink"></div>
                            <span class="heroh"> The Weekly Edge </span>


                        </div>
                        <div class="col-sm-12 col-lg-6">
                            <img class="img-responsive hero-img" src="style/herobg.svg" />
                        </div>
                    </div>
                    {/* <!--  <div class="row">
                        <div class="col-sm-12">
                            <img src="style/hero-arrow.svg">
              </div>
                        </div>--> */}
                </div>
            </div>

            <div class="container-fluid">
                {/* <!-- Swiper --> */}
                <div class="swiper-container">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide">
                            <div class="swiper-img">
                                <img class="card-img" src="style/cardimg.jpg" />
                            </div>
                            <div class="swiper-details">
                                <h3> News Headline </h3>
                            </div>
                        </div>

                        <div class="swiper-slide">
                            <div class="swiper-img">
                                <img class="card-img" src="style/cardimg.jpg" />
                            </div>
                            <div class="swiper-details">
                                <h3> News Headline </h3>
                            </div>
                        </div>

                        <div class="swiper-slide">
                            <div class="swiper-img">
                                <img class="card-img" src="style/cardimg.jpg" />
                            </div>
                            <div class="swiper-details">
                                <h3> News Headline </h3>
                            </div>
                        </div>

                        <div class="swiper-slide">
                            <div class="swiper-img">
                                <img class="card-img" src="style/cardimg.jpg" />
                            </div>
                            <div class="swiper-details">
                                <h3> News Headline </h3>
                            </div>
                        </div>

                        <div class="swiper-slide">
                            <div class="swiper-img">
                                <img class="card-img" src="style/cardimg.jpg" />
                            </div>
                            <div class="swiper-details">
                                <h3> News Headline </h3>
                            </div>
                        </div>

                        <div class="swiper-slide">
                            <div class="swiper-img">
                                <img class="card-img" src="style/cardimg.jpg" />
                            </div>
                            <div class="swiper-details">
                                <h3> News Headline </h3>
                            </div>
                        </div>

                    </div>
                    {/* <!-- Add Pagination --> */}
                    <div class="swiper-pagination"></div>
                </div>
            </div>


            <div class="article-section">
                <div class="article-cont">
                    <div class="article-text">
                        <h3>Some cool fancy attention grabbing article title</h3>
                        <h6>Luke Skywalker</h6>
                        <p class="content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam deleniti enim suscipit, consectetur sequi quasi adipisci a inventore ex ratione numquam animi sint, cum ea repellendus perferendis porro aperiam non?</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis eveniet cum unde reprehenderit commodi expedita esse dolor quis libero repellendus rerum blanditiis earum consequatur, dolorum culpa. Quos dolorem quibusdam voluptas! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium vitae ipsa aliquid laboriosam accusantium dicta explicabo esse ratione, error, enim aut ut doloribus veritatis magni incidunt dolorum, ad perspiciatis sapiente.</p>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta ratione porro consequatur illum odio sit quidem velit magnam. Voluptas nobis repellat eveniet, debitis reprehenderit dolorum autem animi. Vel, possimus perferendis!Sequi libero quis quae, cum reiciendis ullam! Praesentium ullam, quasi, et officiis dolorem vero temporibus ad modi consectetur quam, error quibusdam hic aspernatur consequatur harum. Impedit tempora unde praesentium. Saepe.</p>
                    </div>
                </div>
                <div class="article-tabs">
                    <div class="tab">
                        <img src='./style/articlebg.svg' />
                        <div class="tab-text">
                            <h4>Some other article</h4>
                            <h6>Han Solo</h6>
                        </div>
                    </div>
                    <div class="tab">
                        <img src='./style/articlebg.svg' />
                        <div class="tab-text">
                            <h4>Some other article</h4>
                            <h6>Han Solo</h6>
                        </div>
                    </div>
                    <div class="tab">
                        <img src='./style/articlebg.svg' />
                        <div class="tab-text">
                            <h4>Some other article</h4>
                            <h6>Han Solo</h6>
                        </div>
                    </div>
                    <div class="tab">
                        <img src='./style/articlebg.svg' />
                        <div class="tab-text">
                            <h4>Some other article</h4>
                            <h6>Han Solo</h6>
                        </div>
                    </div>
                </div>
            </div>

            <div class="container-fluid mt-5 mb-4">
                <div class="row hov-title">
                    <div class="col-sm-12">
                        <h3> Humans Of VIT </h3>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-12 col-lg-6">
                        <iframe class="hov-video" width="560" height="310" src="https://www.youtube.com/embed/s8XIgR5OGJc" frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>

                    <div class="col-sm-12 col-lg-6">
                        <div class="hov-desc">
                            <h3> Bla bla bla </h3>
                            <p> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore at enim, est possimus officia rerum accusantium necessitatibus nemo vero consequuntur ipsam nihil corporis quam perspiciatis in cum quis sapiente veniam. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad laboriosam iusto dolore ullam minima obcaecati dicta placeat illo veritatis perferendis? Earum dolorem explicabo quod perspiciatis laborum ad labore sequi culpa.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Home;