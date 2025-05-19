import React from 'react'

const SellerCart = (props) => {


    return (
        <>

            <div className="relative item hover:scale-[1.05] duration-300 mt-4">
                <img src={props.img} className='images w-[400px]' />
                <i class="fa-regular fa-heart absolute top-5 right-5"></i>
                <div>
                    <h6 className='font-bold'>{props.title}</h6>

                    <div className='flex items-center justify-between'>
                        <p className='text-[#0C0C0C]'>{props.content}</p>
                        <h6 className='font-bold'>{props.price}</h6>
                    </div>

                    <div className="color-cart flex gap-3">
                        {
                            props.color && props.color.length > 0 ? (
                                props.color.map((colorValue, index) => {

                                    return (
                                        <div key={index}
                                            className='rounded-[50%] w-[30px] h-[30px] hover:scale-[1.3] decoration-[300] mt-3'
                                            style={{ backgroundColor: colorValue }}
                                            title={{ colorValue }}
                                        >

                                        </div>
                                    )
                                })
                            ) :
                                <p>No colors available</p>
                        }
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