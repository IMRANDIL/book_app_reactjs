import React from 'react'

import './Main.css'

import { FaSearch } from "react-icons/fa";


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
                        {FaSearch}
                        <button ><i>{FaSearch}</i></button>
                    </div>
                </div>
            </div>

        </>
    )
}

export default MainComp