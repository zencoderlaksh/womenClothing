import React from 'react'
import SearchCards from '../../components/SearchCart/SearchCards'
import IMAGES from '../../assets/images/projectImage'
import Filters from '../../components/Filters/Filters'

const PlusSize = ({button}) => {
  const DataProduct = [
        {
            id: 1,
            img: IMAGES.plusSizeOne,
            title: 'Chill Dress',
            content: 'Turn It Up Dress',
            price: '$260',
            color: ['#909225'],
        },

        {
            id: 2,
            img: IMAGES.plusSizeTwo,
            title: 'Essential Dress',
            content: 'Turn It Up Dress',
            price: '$195',
            color: ['#0C0C0C', '#7DC3EB', '##D0A5EA'],
        },

        {
            id: 3,
            img: IMAGES.plusSizeThree,
            title: 'Casual Pants',
            content: 'Turn It Up Pants',
            price: '$85',
            color: ['#909225', '#7DC3EB', '##CA6D29']
        },

        {
            id: 4,
            img: IMAGES.plusSizeFour,
            title: 'Easy Skirt ',
            content: 'Turn It Up Skirt',
            price: '$109',
            color: ['#909225', '#19418E']
        },

        {
            id: 5,
            img: IMAGES.plusSizeFive,
            title: 'New Age Shirt',
            content: 'Turn It Up Shirt',
            price: '$80',
            color: ['#0C0C0C', '#19418E', '#748C70']
        },

        {
            id: 6,
            img: IMAGES.plusSizeSix,
            title: 'Boss Dress',
            content: 'Turn It Up Dress',
            price: '$280',
            color: ['#0C0C0C', '#748C70']
        }
    ]
  return (
    <>
      <div>
                <div>
                    <img className='mt-10 w-screen' src={IMAGES.plussizefilterbanner} alt="" />
                </div>
                <div className='lg:flex'>
                    <div className="card-left bg-white ml-4 sm:ml-6 md:ml-59 lg:ml-18 mt-5 lg:w-[30%]">
                        <Filters></Filters>
                    </div>
                    <div className='card-data lg:mx-auto flex items-center justify-center gap-5 flex-wrap px-3'>

                        {
                            DataProduct.map((item, i) => {
                                return (

                                    <div className="card">
                                        <div className="card-right">
                                            <SearchCards key={i} id={item.id} img={item.img} icon={item.i} title={item.title} content={item.content} price={item.price} color={item.color} />
                                        </div>
                                    </div>
                                )
                            })
                        }
                        <div className='flex items-center justify-center'>
                            <button className='w-[184px] py-2 mb-5 border-1 border-[#5A6D57] text-[#5A6D57] cursor-pointer'>{button}Load More</button>
                        </div>
                    </div>
                </div>
            </div>
    </>
  )
}

export default PlusSize
