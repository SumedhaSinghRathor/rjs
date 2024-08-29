import React, { useEffect, useState } from 'react'
import { category, MovieCardType } from '../../utils/constant'
import { baseAPI } from '../../api/axiosInstance'
import MovieList from '../../components/Home/MovieList'
import LoadMoreBtn from '../../components/Button/LoadMoreBtn'

interface pageType {
	[key: string]: number
}

function Movies() {

	const [filter, setFilter] = useState(category[0].name)
	const [nowplaying, setNowPlaying] = useState<MovieCardType[]>([])
	const [popular, setPopular] = useState<MovieCardType[]>([])
	const [topRated, setTopRated] = useState<MovieCardType[]>([])
	const [upcoming, setUpcoming] = useState<MovieCardType[]>([])
	const [pages, setPages] = useState<pageType>({ "now_playing" : 1, "popular" : 1, "top_rated" : 1, "upcoming" : 1})

	const toggleSelection = (item: string) => {
		setFilter(item)
	}

	const fetchMovies = async (path: string, page: number) => {
		// console.log(page)
		try {
			const response = await baseAPI.get(`/3/movie/${path}?language=en-US&page=${page}`)
			// console.log(response.data.results)
			switch (path) {
				case "now_playing":
					setNowPlaying(prev => [...prev, response.data.results])
					break
				case "popular":
					setPopular(prev => [...prev, response.data.results])
					break
				case "top_rated":
					setTopRated(prev => [...prev, response.data.results])
					break
				case "upcoming":
					setUpcoming(prev => [...prev, response.data.results])
					break
				default:
					break
			}
		} catch (err) {
			console.log("Fetch error in Movies Page", err)
		}
	}

	const handleLoadMore = () => {
		const currentCategory = category.find(item => item.name == filter)
		if(currentCategory) {
			// console.log(currentCategory[0].path)
			setPages(prev => ({
				...prev, [currentCategory.path]: prev[currentCategory.path] + 1
			}))
			fetchMovies(currentCategory.path, pages[currentCategory.path] + 1)
		}
	}

	useEffect(() => {
		const current = category.filter(item => item.name == filter)
		// console.log(current)
		fetchMovies(current[0].path, 1)
	}, [filter])

	return (
		<div className='w-[90%] mx-auto mt-4'>
			<h1 className='text-3xl font-bold text-yellow-500'>Explore Movies</h1>
			<div className="flex mt-2">
				{
					category.map((item, ind) => (
						<div className="" key={ind}>
							<button 
							onClick={() => toggleSelection(item.name)}
							className='text-base font-semibold w-44 h-10 hover:bg-[#121212]'>{item.name}</button>
							<div className={`h-0.5 bg-yellow-500 mx-auto ${filter === item.name ? "w-full" : "w-0"} duration-200`}></div>
						</div>
					))
				}
			</div>

			{filter == "Now Playing" &&
				<MovieList movies={nowplaying} />
			}{filter == "Popular" &&
				<MovieList movies={popular} />
			}{filter == "Top Rated" &&
				<MovieList movies={topRated} />
			}{filter == "Upcoming" &&
				<MovieList movies={upcoming} />
			}
			
			<div onClick={handleLoadMore}>
				<LoadMoreBtn />
			</div>

		</div>
	)
}

export default Movies