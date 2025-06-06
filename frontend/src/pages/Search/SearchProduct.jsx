import React from 'react'
import SearchCards from '../../components/SearchCart/SearchCards'
import IMAGES from '../../assets/images/projectImage'
import Filters from '../../components/Filters/Filters'

const SearchProduct = () => {

  const DataProduct = [
    {
      id: 1,
      img: IMAGES.searchOne,
      title: 'Elastic Waist ',
      content: 'Turn It Up Pants',
      price: '$110',
      color: ['#7DC3EB','#748C70'],
    },

    {
      id: 2,
      img: IMAGES.searchTwo,
      title: 'Tailored Stretch',
      content: 'Turn It Up Pants',
      price: '$150',
      color:['#0C0C0C'],
    },

    {
      id: 3,
      img: IMAGES.searchThree,
      title: 'Tailored Stretch',
      content: 'Turn It Up Pants',
      price: '$140',
      color:['#0C0C0C','#CA2929','#748C70']
    },

    {
      id: 4,
      img: IMAGES.searchFour,
      title: 'High Tillie',
      content: 'Turn It Up Pants',
      price: '$110',
      color:['#0C0C0C','#909225','#748C70']
    },

    {
      id: 5,
      img: IMAGES.searchFive,
      title: 'Casual Wild Leg',
      content: 'Turn It Up Pants',
      price: '$130',
      color:['#0C0C0C','#748C70']
    },

    {
      id: 6,
      img: IMAGES.searchSix,
      title: 'Linen Wide Leg',
      content: 'Turn It Up Pants',
      price: '$180',
      color:['#0C0C0C','#D0A5EA']
    }
  ]
  return (
    <>
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
        </div>
      </div>
    </>
  )
}

export default SearchProduct
