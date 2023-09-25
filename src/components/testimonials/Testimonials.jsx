// import React from 'react'
// import './testimonials.css'
// import AVTR1 from '../../assets/avatar1.jpg'

// // Import Swiper React components
// import { Pagination } from 'swiper';
// import { Swiper, SwiperSlide } from 'swiper/react';

// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/pagination';
// import 'swiper/css/swiper.css';

// const data = [
//   {
//     id: 1,
//     avatar: AVTR1,
//     name: "Achiever 1",
//     statement: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum aperiam enim voluptate, fugit at voluptatibus. Quod, odio a! Voluptate ducimus corporis deserunt modi veritatis animi recusandae quas, distinctio voluptatum dignissimos?"
//   },
//   {
//     id: 2,
//     avatar: AVTR1,
//     name: "Achiever 2",
//     statement: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum aperiam enim voluptate, fugit at voluptatibus. Quod, odio a! Voluptate ducimus corporis deserunt modi veritatis animi recusandae quas, distinctio voluptatum dignissimos?"
//   },
//   {
//     id: 2,
//     avatar: AVTR1,
//     name: "Achiever 3",
//     statement: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum aperiam enim voluptate, fugit at voluptatibus. Quod, odio a! Voluptate ducimus corporis deserunt modi veritatis animi recusandae quas, distinctio voluptatum dignissimos?"
//   }
// ]

// const Testimonials = () => {
//   return (
//     <section id='testimonials'>
//       <h5>Review from Clients</h5>
//       <h2>Testimonials</h2>

//       <Swiper className="container testiomnials__container"
//       // modules={[ Pagination ]}
//       spaceBetween={40}
//       slidesPerView={1}
//       pagination={{clickable: true}}
//       >
//         {
//           data.map(({id, avatar, name, statement}) => {
//             return(
//               <SwiperSlide className='testimonial'>
//                 <div className="client__avatar">
//                   <img src={avatar} alt="Avatar" />
//                 </div>
//                 <h5 className='client__name'>{name}</h5>
//                   <small className='client__review'>
//                     {statement}
//                   </small>
//               </SwiperSlide>
//             )
//           })
//         }
//       </Swiper>
//     </section>
//   )
// }

// export default Testimonials
