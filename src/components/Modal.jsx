import React from 'react'


import { FaTimesCircle } from 'react-icons/fa'



const Modal = () => {
    return (
        <>
            <div className='overlay'>

                <div className="overlay-inner">
                    <button className="close"><i><FaTimesCircle /></i></button>


                    <div className="inner-box">
                        <img src="./images/book.png" alt="book-img" />
                        <div className="info">
                            <h1>ReactJS with Example - Building Modern Web Applications with React</h1>
                            <h3>Ali Imran Adil</h3><br />

                            <h4>passionate Ltd <span>2022-03-12</span></h4><br />

                            <a href="#"><button>More</button></a>



                        </div>

                    </div>

                    <h4 className="desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque ex excepturi similique qui doloremque quidem distinctio fugit impedit. Quasi, quaerat.</h4>

                </div>


            </div>
        </>
    )
}

export default Modal