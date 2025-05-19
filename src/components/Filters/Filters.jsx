import React from 'react'

const Filters = ({button}) => {
  return (
    <>
      <div>
        <div className='container flex flex-col mt-10'>
          <div>
            <h3 className='font-semibold text-3xl'>Filters</h3>
          </div>
          <div className='buttons mt-4'>
            
            <div>
              <button className='w-[300px] bg-[#748C70] flex items-center justify-between py-2 mt-2'>{button}
                <h6 className='ml-2 font-bold text-base text-[#FFFFFF]'>Sort By</h6>
                <button className='mr-2'>
                  <p className='font-medium text-xl text-[#FFFFFF]'>+</p>
                </button>
              </button>
            </div>
            


            <div>
              <button className='w-[300px] bg-[#748C70] flex items-center justify-between py-2 mt-2'>{button}
                <h6 className='ml-2 font-bold text-base text-[#FFFFFF]'>Size</h6>
                <button className='mr-2'>
                  <p className='font-medium text-xl text-[#FFFFFF]'>+</p>
                </button>
              </button>
            </div>

            <div>
              <button className='w-[300px] bg-[#748C70] flex items-center justify-between py-2 mt-2'>{button}
                <h6 className='ml-2 font-bold text-base text-[#FFFFFF]'>Color</h6>
                <button className='mr-2'>
                  <p className='font-medium text-xl text-[#FFFFFF]'>+</p>
                </button>
              </button>
            </div>

            <div>
              <button className='w-[300px] bg-[#748C70] flex items-center justify-between py-2 mt-2'>{button}
                <h6 className='ml-2 font-bold text-base text-[#FFFFFF]'>Collection</h6>
                <button className='mr-2'>
                  <p className='font-medium text-xl text-[#FFFFFF]'>+</p>
                </button>
              </button>
            </div>

            <div>
              <button className='w-[300px] bg-[#748C70] flex items-center justify-between py-2 mt-2'>{button}
                <h6 className='ml-2 font-bold text-base text-[#FFFFFF]'>Fabric</h6>
                <button className='mr-2'>
                  <p className='font-medium text-xl text-[#FFFFFF]'>+</p>
                </button>
              </button>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default Filters
