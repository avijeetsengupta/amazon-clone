import React from 'react'
import './Home.css'
import Product from './Product'

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img className="home__image"
                    src=" https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg " alt="  " />
            </div>

            <div className="home__row">
                <Product
                    id="12321341"
                    title='The lean Startup: How Constant Innovation creates Radically Successful Businesses Paperback'
                    price={29.99}
                    image=' https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg '
                    rating={5} />
                <Product
                    id="49538094"
                    title="Kenwood Kmix stand mixer for baking, Styling Kitchen Mixer With K=beater, dough Hook and Whisk, 5 Liter Glass Bowl"
                    price={299.0}
                    rating={4}
                    image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"
                />
            </div>

            <div className="home__row">
                 <Product
                     id="4903850"
                     title="Samsung LC49RG90SSUXEN 49' Curved led Gaming Monitor"
                     price={199.99}
                     rating={3}
                     image="https://m.media-amazon.com/images/I/71it2biogSS._AC_UY218_.jpg"                     
                 />
                 <Product 
                    id="23445930"
                    title="Amazon Echo (3rd generation) | Smart with alexa, Charcoal Fabric"
                    price={98.99}
                    rating={5}
                    image=" https://m.media-amazon.com/images/I/51qkBdfmymS._AC_UY218_.jpg "
                 />
                 <Product 
                    id="3254354345"
                    title="New Apple ipad pro (12.9inch, Wi-Fi, 128GB) - Silver (4th Generation)"
                    price={598.99}
                    rating={4}
                    image=" https://m.media-amazon.com/images/I/71RJDWctbwL._AC_UY218_.jpg "
                 />
            </div>

            <div className="home__row">
                    <Product 
                        id="90829332"
                        title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
                        price={1094.98}
                        rating={4}
                        image=" https://m.media-amazon.com/images/I/41Xw+5u38wL._AC_UY218_.jpg "
                    />
            </div>


        </div>
    )
}

export default Home
