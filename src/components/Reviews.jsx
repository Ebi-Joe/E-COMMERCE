import React from 'react'

function Reviews() {
  return (
    <>
        <div className="reviews bg-[#F7ECDD] h-[90vh]">
            <p className='font-bold text-xl md:text-4xl text-center py-12'>WHAT OUR CUSTOMERS SAY</p>

            <div className="img w-[50vw] h-[10vh] md:w-[30vw] md:h-[20vh] mx-auto">
                <img src="/img/IMG_3079.JPG" alt="" className='rounded-xl' />
              <div className="rating text-center text-[.9em] md:text-xl lg:text-2xl">
                  <i className="fa-solid fa-star text-[lime]"></i>
                  <i className="fa-solid fa-star text-[lime]"></i>
                  <i className="fa-solid fa-star text-[lime]"></i>
                  <i className="fa-solid fa-star text-[lime]"></i>
                  <i className="fa-solid fa-star-half-stroke text-[lime]"></i>
              </div>
            </div>

        </div>
    </>
  )
}

export default Reviews