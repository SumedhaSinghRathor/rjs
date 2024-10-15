import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { baseAPI } from '../../api/axiosInstance'
import { imagepath } from '../../utils/constant'
import { MovieDetailType } from '../../utils/constant'


function Details() {
  const params = useParams()
  console.log(params)
  const [details, setDetails] = useState<MovieDetailType>()

  const fetchDetails = async () => {
    try {
      const response = await baseAPI.get(`/3/movie/${params.id}?language=en-US`)
      console.log(response.data)
      setDetails(response.data)
    } catch (error) {
      console.log('Fetch Details Error', error)
    }
  }

  useEffect(() => {
    fetchDetails()
  }, [params])
  
  return (
    <div>
      {
        details && params.id ? 
        <div className='relative h-fit w-full'>
          <div className="relative">
            <img src={imagepath + details?.backdrop_path} className="opacity-40 w-full min-h-[500px] aspect-[7/4] object-cover" alt="background" />
            <div className="absolute bottom-0 w-full h-full _carouselGradient"></div>
          </div>
          <div className="absolute top-0 w-full pb-[100px]">
            <div className="w-[90%] mx-auto lg:mt-[500px] md:mt-[400px] mt-[200px]">
              <div className="md:flex gap-8">
                <img src={imagepath + details?.poster_path} className='lg:w-[350px] md:w-[280px] sm:w-[250px] w-[200px] h-fit aspect-[4/6]' alt="" />
              </div>
            </div>
          </div>
        </div>
      }
    </div>
  )
}

export default Details