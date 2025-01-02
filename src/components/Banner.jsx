import React from 'react';
import Image1 from "../assets/image1.png";
import Image2 from "../assets/image2.png";
import Image3 from "../assets/image3.png";
import Slider from "react-slick";
import TopProducts from './TopProducts';

const ImageList = [
    {
      id: 1,
      img: Image1,
      title: "Upto 50% off on all Men's Wear",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio in ab incidunt veniam, corporis ea eos facere quidem molestias pariatur doloremque eius, at, sapiente reiciendis autem optio aspernatur assumenda similique."
    },
    {
      id: 2,
      img: Image2,
      title: "30% off on all Women's Wear",
      description: "Who's there Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio in ab incidunt veniam, corporis ea eos facere quidem molestias pariatur doloremque eius, at, sapiente reiciendis autem optio aspernatur assumenda similique."
    },
    {
      id: 3,
      img: Image3,
      title: "70% off on all Products Sale",
      description: "consectetur adipisicing elit. Distinctio in ab incidunt veniam, corporis ea eos facere quidem molestias pariatur doloremque eius, at, sapiente reiciendis autem optio aspernatur assumenda similique."
    }
]
const Banner = ({handleOrderPopup}) => {

  var settings = {
     dots: false,
     arrows:false,
     infinite: true,
     speed: 800,
     slidesToScroll: 1,
     autoplay: true,
     autoplaySpeed: 4000,
     cssEase: "ease-in-out",
     pauseOnHover: false,
     pauseOnFocus: true,
  }
  return (
    <>
    <div className='relative overflow-hidden min-h-[550px] sm:min-h-[650px] bg-gray-100 flex justify-center items-center dark:bg-gray-950 dark:text-white duration-200'>
      {/* background pattern */}
      <div className='h-[600px] w-[700px] bg-primary/40 absolute -top-1/2 right-0 rounded-3xl rotate-45 -z-9'>
      </div>

      {/* hero section */}
      <div className='container pb-8 sm:pb-0'> 
         <Slider {...settings}>
          {ImageList.map((item)=>(
            <div key={item.id}>
               <div className='grid grid-cols-1 sm:grid-cols-2'>
                   <div className='flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10'>
                      <h1 data-aos="zoom-out" data-aos-duration="500" data-aos-once="true" className='text-4xl sm:text-4xl lg:text-5xl font-bold '>
                       {item.title}</h1>
                      <p data-aos="fade-up" data-aos-duration="500" data-aos-delay="100" className='text-sm pt-4'>
                      {item.description}
                      </p>
                      <div data-aos="fade-up" data-aos-duration="500" data-aos-delay="300">
                          <button className='bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-2 px-4 rounded-full mt-4'
                          onClick={handleOrderPopup}>
                          Order Now</button>
                      </div> 
                   </div>

                   <div className='order-1 sm:order-2'>
                     <div data-aos="zoom-in" data-aos-once="true" className='relative z-10'>
                         <img src={item.img} className='w-[300px] h-[300px] sm:h-[450px] sm:w-[450px] sm:scale-105 lg:scale-120 object-contain mx-auto'/>
                     </div>
                   </div>

               </div>
          </div>
          ))}
          </Slider>
      </div>
      
    </div>


    <TopProducts handleOrderPopup={handleOrderPopup} />
    </>
  )
}

export default Banner;