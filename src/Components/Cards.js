import React, { Component } from 'react'

const Card = (props) => {
    return (
        <>
            
               
                    <div className="col-md-4 my-3">
                        
                        <div class="card" style={{width:"18rem"}}>
                            <img src="https://images.unsplash.com/photo-1593642634524-b40b5baae6bb?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1032&q=80" class="card-img-top" alt="..."/>
                            <div class ="card-body">
                            <p class ="card-text">{props.description}</p>
                            </div>
                        </div>
                    </div>
            
            
        </>
    )
}
export default Cards
