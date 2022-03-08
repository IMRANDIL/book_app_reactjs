import React, { useState } from 'react';
import axios from 'axios'

import { FcSearch } from 'react-icons/fc'
import Card from './Card'

















const MainComp = () => {

    const [search, setSearch] = useState('');
    const [bookData, setBookData] = useState([]);
    const [loading, setLoading] = useState('')


    const searchBook = async (e) => {
        if (e.key === 'Enter') {
            try {
                setLoading('Loading...')
                const { data: { items } } = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${search}&key=${process.env.REACT_APP_KEY}&maxResults=40`);
                setLoading('')
                setBookData(items)
            } catch (error) {
                console.log(error);
            }

        }



    }


    const handleClick = async () => {
        try {
            setLoading('Loading...')
            const { data: { items } } = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${search}&key=${process.env.REACT_APP_KEY}&maxResults=40`);
            setLoading('')
            setBookData(items)
        } catch (error) {
            console.log(error);
        }
    }




    return (
        <>

            <div className="header">

                <div className="row1">
                    <h1>A room without book is like<br /> a body without a soul.</h1>
                </div>

                <div className="row2">
                    <h2>Find Your Favourite Book</h2>
                    <div className="search">
                        <input type="text" placeholder='Search Your Book...' value={search} onChange={(e) => setSearch(e.target.value)} onKeyPress={searchBook} />

                        <button onClick={handleClick}>{<FcSearch />}</button>
                    </div>
                    <img src="./images/img2.png" alt="child-img" />
                </div>
            </div>

            <h2 style={{ marginTop: '15px', textAlign: 'center', color: 'white' }}>{loading}</h2>
            <div className="container">
                <Card book={bookData} />



            </div>

        </>
    )
}

export default MainComp