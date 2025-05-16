import React from 'react'

const ModiweekItem = (props) => {
    return (
        <>

            <div className="item hover:scale-[1.05] duration-300 mt-6">
                <img src={props.img} alt=""/>
                <div>
                    <h6 className='text font-bold mt-[3rem]'>{props.title}</h6>
                </div>
            </div>
        </>
    )
}

export default ModiweekItem