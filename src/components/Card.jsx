import React from 'react'





const Card = ({ book }) => {
    return (
        <>

            {book.map((bookItem) => {
                let thumbnail = bookItem.volumeInfo.imageLinks && bookItem.volumeInfo.imageLinks.smallThumbnail;


                return (
                    <div key={bookItem.id}>
                        <div className="card">
                            <img src={thumbnail ? thumbnail : 'https://via.placeholder.com/200'} alt="book-img" />

                            <div className="bottom">

                                <h3 className="title">{bookItem.volumeInfo.title}</h3>
                                <p className="amount">&#8377;3698</p>
                            </div>

                        </div>
                    </div>
                )
            })}




        </>
    )
}

export default Card