import { useEffect, useState } from 'react';
import HomeCarousel from './HomeCarousel'
import { baseAPI } from '../../api/axiosInstance';
import { CarouselMovieType } from '../../utils/constant';
import HomeCarouselList from './HomeCarouselList';

function HomeSlider() {
    const [carouselMovies, setCarouselMovies] = useState<CarouselMovieType[]>([])
    const [selected, setSelected] = useState(0)
    const [next, setNext] = useState<number[]>([])

    useEffect(() => {
        if(carouselMovies.length) {
            const ind1 = (selected + 1) % carouselMovies.length
            const ind2 = (selected + 2) % carouselMovies.length
            const ind3 = (selected + 3) % carouselMovies.length
            setNext([ind1, ind2, ind3])
        }
    }, [carouselMovies, selected])

    useEffect(() => {
        const myCarousel = document.getElementById("carouselExample")

        const handleSlide = (event: Event) => {
            const customerEvent = event as any 
            // console.log(event.from, "---", event.to)
            setSelected(customerEvent.to)
        }

        if(myCarousel) {
            myCarousel.addEventListener('slide.bs.carousel', handleSlide)

            return () => {
                myCarousel.removeEventListener('slide.bs.carousel', handleSlide)
            }
        }
    })

    const fetchUpcoming = async () => {
        try {
            const response = await baseAPI.get('/3/movie/popular?language=en-US&page=1')
            // console.log(response.data.results)
            setCarouselMovies(response.data.results)
        } catch (err) {
            console.log("fetch upcoming movies error", err)
        }
    }

    useEffect(() => {
        fetchUpcoming()
    }, [])

    return (
        <div className="row">
        <div className='relative col-8'>
                <div id="carouselExample" className="carousel slide">
                    <HomeCarousel carouselMovies={carouselMovies} />
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
  
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
        </div>
        <div className="col-4">
            <HomeCarouselList next={next} carouselMovies={carouselMovies}/>
        </div>
        </div>
  )
}

export default HomeSlider