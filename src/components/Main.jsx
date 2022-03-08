import React from 'react'

import './Main.css'

import { FcSearch } from 'react-icons/fc'

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

                        <button>{<FcSearch />}</button>
                    </div>
                </div>
            </div>

        </>
    )
}

export default MainComp