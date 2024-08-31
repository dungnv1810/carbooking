import React from 'react'

const Contact = () => {
    return (
        <div className='bg-primary text-black
        sm:min-h-[600px] sm:grid sm:place-items-center
        duration-300 pt-24 pb-10 sm:pb-0'>
            <div className='container'>
                <div className='grid grid-cols-1 sm:grid-cols-2
                    place-items-center'>
                    {/* left text content section */}
                    <div className=''>
                        <div className='space-y-5 sm:p-16 pb-6'>
                            <h1 
                            data-aos="fade-up"
                            className='text-2xl sm:text-3xl
                            font-bold'>Best In City</h1>
                            <h1 
                            data-aos="fade-up"
                            className='text-3xl sm:text-4xl uppercase
                            font-bold'>Trusted car servies in new york</h1>
                            <p 
                            data-aos="fade-up"
                            className='leading-8 tracking-wide line-clamp-6'>
                            Lorem Ipsum is simply dummy text of the printing 
                            and typesetting industry. Lorem Ipsum has been the 
                            industry's standard dummy text ever since the 1500s, 
                            when an unknown printer took a galley of type and 
                            scrambled it to make a type specimen book. 
                            It has survived not only five centuries, 
                            but also the leap into electronic typesetting, 
                            remaining essentially unchanged. It was popularised 
                            in the 1960s with the release of Letraset sheets 
                            containing Lorem Ipsum passages, and more recently 
                            with desktop publishing software like Aldus PageMaker 
                            including versions of Lorem Ipsum.
                            </p>
                            <button
                            data-aos="fade-up"
                            data-aos-offset="0" 
                            className='bg-black text-white px-4 py-2
                            rounded-lg'>
                                Book Now
                            </button>
                        </div>
                    </div>
                    {/* right side form section */}
                    <div
                    data-aos="fade">
                        <div className='w-full md:max-w-[350px] mx-auto'>
                            <h1 className='uppercase text-2xl text-white
                            bg-black px-5 py-3'>Book a Cab</h1>
                            <div className='grid grid-cols-1 sm:grid-cols-2
                            gap-x-2 bg-white p-5'>
                                <input
                                className='inputField'
                                type='text'
                                name=''
                                id=''
                                placeholder='Name'
                                />
                                <input
                                className='inputField'
                                type='text'
                                name=''
                                id=''
                                placeholder='Phone'
                                />
                                <input
                                className='inputField'
                                type='text'
                                name=''
                                id=''
                                placeholder='Start'
                                />
                                <input
                                className='inputField'
                                type='text'
                                name=''
                                id=''
                                placeholder='End'
                                />
                                <input
                                className='inputField col-span-2'
                                type='text'
                                name=''
                                id=''
                                placeholder='Choose Vehicle'
                                />
                                <button className='col-span-2 w-full bg-black
                                mt-6 text-white py-2 px-4 rounded-lg'>
                                    Book Now
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
