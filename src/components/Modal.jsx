import React from 'react'


import { FaTimesCircle } from 'react-icons/fa'







const Modal = ({ show, bookItem, onclose }) => {


    if (!show) {
        return null
    }


    let thumbnail = bookItem.volumeInfo.imageLinks && bookItem.volumeInfo.imageLinks.smallThumbnail;



    return (
        <>
            <div className='overlay' >

                <div className="overlay-inner">
                    <button className="close" onClick={onclose}><FaTimesCircle /></button>


                    <div className="inner-box">
                        <img src={thumbnail} alt="book-img" />
                        <div className="info">
                            <h1>{bookItem.volumeInfo.title}</h1>
                            <h3>{bookItem.volumeInfo.authors}</h3>

                            <h4>{bookItem.volumeInfo.publisher} <span>{bookItem.volumeInfo.publishedDate}</span></h4><br />

                            <a href={bookItem.volumeInfo.previewLink} target='_blank' rel="noreferrer"><button style={{ cursor: 'pointer' }}>More</button></a>



                        </div>

                    </div>
                    <div className="desc">
                        <h4 >{bookItem.volumeInfo.description}</h4>
                    </div>


                </div>


            </div>
        </>
    )
}

export default Modal