/* eslint-disable react/prop-types */


const Slide = ({ image, header, paragraph }) => {
  return (
    <div
      className='w-full bg-center bg-cover h-[38rem]'
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      <div className='flex items-center justify-center w-full h-full bg-gray-900/70'>
        <div className='text-center'>
          <h1 className='text-3xl font-semibold text-white lg:text-4xl font-montserrat'>
            {header}
          </h1>
          <p className='w-9/12 mx-auto text-white font-poppins mt-4'>{paragraph}</p>
        </div>
      </div>
    </div>
  )
}

export default Slide