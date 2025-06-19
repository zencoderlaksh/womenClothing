import React from 'react'

const SearchCards = (props) => {
  return (
    <>
      <div className='item hover:scale-[1.05] duration-300 mt-10'>
        <div className='relative'>
          <img src={props.img} alt="" className='w-[392px] h-[438px]' />
          <i class="fa-regular fa-heart absolute top-5 right-5" ></i>
        </div>
        <div>
          <h6 className='font-bold text-base text-[#0C0C0C] mt-2 ml-2'>{props.title}</h6>

          <div className='flex items-center justify-between mt-2 mb-5'>
            <p className='font-normal text-base text-[#0C0C0C] ml-2'>{props.content}</p>
            <h6 className='font-bold text-base text-[#0C0C0C] mr-2'>{props.price}</h6>
          </div>
          <div className="color-cart flex gap-3 ml-2">
            {props.color && props.color.length > 0 ? (
              props.color.map((colorValue, i) => {
                return (
                  <div key={i} className='rounded-[50%] w-[20px] h-[20px] hover:scale-[1.3] duration-[300]' style={{ backgroundColor: colorValue }}
                    title={{ colorValue }} >

                  </div>
                )

              })

            ) :
              <p>Color is not avaliable</p>
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

export default SearchCards
