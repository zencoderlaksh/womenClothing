import React from 'react'

const ModiweekItem = (props) => {
    return (
        <>

            <div className=" item relative hover:scale-[1.05] duration-300 mt-6">
                <i class="fa-regular fa-heart absolute top-5 right-5 cursor-pointer"></i>
                <img src={props.img} alt="" className='cursor-pointer'/>
                <div>
                    <h6 className='text font-bold mt-[3rem]'>{props.title}</h6>
                </div>
            </div>


           
        </>
    )
}

export default ModiweekItem