import React from 'react'

const OrderProductDummy = (props) => {
    return (
        <>
            <div className='images'>
                <div className="images-left">
                    <img src={props.img} alt="" />
                  
                </div>
                <div className="right">
                    <img src={props.images} alt="" />
                </div>

            </div>

        </>
    )
}

export default OrderProductDummy