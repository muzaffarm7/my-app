import React, { Component } from 'react'

const Card = (props) => {
    return (
        <>


            <div className="col-md-4 mt-3">

                <div className="card" style={{ width: "18rem" }}>
                    <img src={props.image} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <p className="card-text">{props.description} </p>
                    </div>
                </div>

            </div>



        </>
    )
}

export default Card
