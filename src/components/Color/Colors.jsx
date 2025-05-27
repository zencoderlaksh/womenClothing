import React from 'react'

const Colors = (props) => {
    return (
        <>
            <div>
                <div className="colors-cart flex gap-3">
                    {
                        props.colors && props.colors.length > 0 ? (
                            props.colors.map((colorValue, index) => {

                                return (
                                    <div key={index}
                                        className='rounded-[50%] w-[30px] h-[30px] hover:scale-[1.3] decoration-[300] mt-3'
                                        style={{ backgroundColor: colorValue }}
                                        title={colorValue}
                                    >

                                    </div>
                                )
                            })
                        ) :
                            <p>No colors available</p>
                    }
                </div>
            </div>

        </>
    )
}

export default Colors