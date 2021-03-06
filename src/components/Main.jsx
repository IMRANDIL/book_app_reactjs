import React, { useState } from 'react';
import axios from 'axios'

import { FcSearch } from 'react-icons/fc'
import Card from './Card'

















const MainComp = () => {

    const [search, setSearch] = useState('');
    const [bookData, setBookData] = useState([]);
    const [loading, setLoading] = useState('');
    const [error, setError] = useState('');
    const [empty, setisEmpty] = useState('')


    const searchBook = async (e) => {
        if (e.key === 'Enter') {
            try {

                if (!search) {
                    return setError('Please pass the key')
                }


                setLoading('Loading...')
                const { data: { items } } = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${search}&key=${process.env.REACT_APP_KEY}&maxResults=40`);
                setLoading('')
                setError('')
                setBookData(items);
                if (bookData.length === 0) {
                    return setisEmpty('No such book exists!')
                }
            } catch (error) {
                console.log(error);
            }

        }



    }


    const handleClick = async () => {
        try {
            if (!search) {
                return setError('Please pass the key')
            }


            setLoading('Loading...')
            const { data: { items } } = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${search}&key=${process.env.REACT_APP_KEY}&maxResults=40`);
            setLoading('');
            setError('');

            setBookData(items)

            if (!bookData) {
                return setisEmpty('No such book exists!')
            }
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
                    <h1 style={{ textAlign: 'center', color: 'white', marginBottom: '15px' }}>{error}</h1>
                    <div className="search">
                        <input type="text" placeholder='Search Your Book...' onChange={(e) => setSearch(e.target.value)} onKeyPress={searchBook} />

                        <button onClick={handleClick}>{<FcSearch />}</button>
                    </div>
                    <img src="./images/img2.png" alt="child-img" />
                </div>
            </div>

            <h2 style={{ marginTop: '15px', textAlign: 'center', color: 'white' }}>{loading}</h2>


            {!bookData ? (<h1 style={{ marginTop: '15px', textAlign: 'center', color: 'white' }}>{empty}</h1>) : (
                <div className="container">
                    <Card book={bookData} />



                </div>)}

        </>
    )
}

export default MainComp