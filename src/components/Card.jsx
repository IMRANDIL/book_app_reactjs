import React from 'react'
import Modal from './Modal';





const Card = ({ book }) => {
    return (
        <>

            {book.map((bookItem) => {
                let thumbnail = bookItem.volumeInfo.imageLinks && bookItem.volumeInfo.imageLinks.smallThumbnail;
                let amount = bookItem.saleInfo.listPrice && bookItem.saleInfo.listPrice.amount

                return (
                    <div key={bookItem.id}>
                        <div className="card">
                            <img src={thumbnail ? thumbnail : 'https://via.placeholder.com/200'} alt="book-img" />

                            <div className="bottom">

                                <h3 className="title">{bookItem.volumeInfo.title}</h3>
                                <p className="amount">&#8377;{amount || 3000}</p>
                            </div>

                        </div>
                        <Modal />
                    </div>
                )
            })}




        </>
    )
}

export default Card