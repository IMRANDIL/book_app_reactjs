import React from 'react'



import { FcSearch } from 'react-icons/fc'
import Card from './Card'

const MainComp = () => {
    return (
        <>

            <div className="header">

                <div className="row1">
                    <h1>A room without book is like<br /> a body without a soul.</h1>
                </div>

                <div className="row2">
                    <h2>Find Your Favourite Book</h2>
                    <div className="search">
                        <input type="text" placeholder='Search Your Book...' />

                        <button><i>{<FcSearch />}</i></button>
                    </div>
                    <img src="./images/img2.png" alt="child-img" />
                </div>
            </div>
            <div className="container">
                <Card />
            </div>

        </>
    )
}

export default MainComp