import React, { useEffect, useState } from 'react'
import { category } from '../../utils/constant'
import { baseAPI } from '../../api/axiosInstance'

function Movies() {

	const [filter, setFilter] = useState(category[0].name)

	const toggleSelection = (item: string) => {
		setFilter(item)
	}

	const fetchMovies = async () => {
		try {
			const response = await baseAPI.get(`/3/movie/now_playing?language=en-US&page=1`)
			console.log(response.data.results)
		} catch (err) {
			console.log("Fetch error in Movies Page", err)
		}
	}

	useEffect(() => {
		fetchMovies()
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
		</div>
	)
}

export default Movies