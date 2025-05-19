import React from 'react'
import SearchCards from '../../../../components/SearchCart/SearchCards'
import IMAGES from '../../../../assets/images/projectImage'
import Filters from '../../../../components/Filters/Filters'

const SearchProduct = () => {

  const DataProduct = [
    {
      id: 1,
      img: IMAGES.searchOne,
      title: 'Elastic Waist ',
      content: 'Turn It Up Pants',
      price: '$110'
    },

    {
      id: 2,
      img: IMAGES.searchTwo,
      title: 'Tailored Stretch',
      content: 'Turn It Up Pants',
      price: '$150'
    },

    {
      id: 3,
      img: IMAGES.searchThree,
      title: 'Tailored Stretch',
      content: 'Turn It Up Pants',
      price: '$140'
    },

    {
      id: 4,
      img: IMAGES.searchFour,
      title: 'High Tillie',
      content: 'Turn It Up Pants',
      price: '$110'
    },

    {
      id: 5,
      img: IMAGES.searchFive,
      title: 'Casual Wild Leg',
      content: 'Turn It Up Pants',
      price: '$130'
    },

    {
      id: 6,
      img: IMAGES.searchSix,
      title: 'Linen Wide Leg',
      content: 'Turn It Up Pants',
      price: '$180'
    }
  ]
  return (
    <>
     <div className='lg:flex'>
       <div className="card-left bg-white ml-4 sm:ml-6 md:ml-59 lg:ml-20 lg:w-[30%]">
        <Filters></Filters>
      </div>
      <div className='card-data lg:mx-auto flex items-center justify-center gap-5 flex-wrap px-3'>

        {
          DataProduct.map((item, i) => {
            return (

              <div className="card">
                <div className="card-right">
                  <SearchCards key={i} id={item.id} img={item.img} icon={item.i} title={item.title} content={item.content} price={item.price} />
                </div>
              </div>
            )
          })
        }
      </div>
     </div>
    </>
  )
}

export default SearchProduct
