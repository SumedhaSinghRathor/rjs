import { imagepath } from '../../utils/constant'
import { FiThumbsUp } from 'react-icons/fi'
import { CarouselMovieType } from '../../utils/constant'

interface HomeSliderProps {
    carouselMovies: CarouselMovieType[]
}

function HomeSlider({ carouselMovies }: HomeSliderProps) {
    return (
        <div className="carousel-inner">
            {
                carouselMovies.map((movie, ind) => (
                    <div key={ind} className={`carousel-item ${ind == 0 ? "active": ""}`}>
                        <div className="relative">
                            {/* <div className="block bg-red-300 aspect-[7/4]"></div> */}
                            <img src={imagepath + movie?.backdrop_path} className='w-full ascpect-[7/4]' alt="" />
                            <div className={`absolute w-full h-full top-0 left-0 bg-black opacity-[0.1] hover:opacity-[0.2]`}></div>
                            <div className="absolute bottom-0 h-44 w-full _carouselGradient"></div>
                        </div>
                        <div className="absolute bottom-0 flex items-end gap-4 px-4">
                            {/* <div className="block bg-blue-400 w-[160px] aspect-[4/5]"></div> */}
                            <img src={imagepath + movie?.poster_path} alt="" className='w-[160px] aspect-[4/5]'/>
                            <div className="flex flex-col gap-1">
                                <h1 className='text-4xl text-white'>{movie?.title}</h1>
                                <h2 className='w-[600px] text-x1 line-clamp-3 text-zinc-400'>{movie?.overview}</h2>
                                <div className="flex items-center gap-1 text-zinc-400 text-xl">
                                    <FiThumbsUp />
                                    <h3 className='text-lg'>{movie?.vote_count}</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                ))
            }
                </div>
    )
}

export default HomeSlider