import React, { useState } from 'react'
import Modal from './Modal';





const Card = ({ book }) => {

    let bookItema;
    const [show, setShow] = useState(false);

    const [Item, setItem] = useState();


    const handleClick = () => {
        setItem(bookItema);
        setShow(true)
    }


    const handleClose = () => {
        setItem();
        setShow(false)
    }





    return (
        <>

            {book.map((bookItem) => {
                let thumbnail = bookItem.volumeInfo.imageLinks && bookItem.volumeInfo.imageLinks.smallThumbnail;
                let amount = bookItem.saleInfo.listPrice && bookItem.saleInfo.listPrice.amount
                bookItema = bookItem;
                return (
                    < div key={bookItem.id} style={{ cursor: 'pointer' }}>
                        <div className="card" onClick={handleClick}>
                            <img src={thumbnail ? thumbnail : 'https://via.placeholder.com/200'} alt="book-img" />

                            <div className="bottom">

                                <h3 className="title">{bookItem.volumeInfo.title}</h3>
                                <p className="amount">&#8377;{amount || 3000}</p>
                            </div>

                        </div>
                        <Modal show={show} bookItem={Item} onclose={handleClose} />
                    </div>
                )
            })}




        </>
    )
}

export default Card