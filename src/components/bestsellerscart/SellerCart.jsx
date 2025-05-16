import React from 'react'

const SellerCart = (props) => {


    return (
        <>

            <div className="item hover:scale-[1.05] duration-300 mt-4">
                <img src={props.img} className='images w-[400px]' />
                <div>
                    <h6 className='font-bold'>{props.title}</h6>

                    <div className='flex items-center justify-between'>
                        <p className='text-[#0C0C0C]'>{props.content}</p>
                        <h6 className='font-bold'>{props.price}</h6>
                    </div>
                </div>

            </div>

            <div>
                <button>{props.button}</button>
            </div>

        </>
    )
}

export default SellerCart