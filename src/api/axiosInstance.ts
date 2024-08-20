import axios from "axios"

export const baseAPI = axios.create({
    baseURL: 'https://api.themoviedb.org',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NjM4NzEzNDIwMGY4NTg3MzcxMDM0NDZjNDA0MGI4NSIsIm5iZiI6MTcyNDE2NTk5OS44MzYxNzQsInN1YiI6IjY2YzMyZTIyNzFlYzg5YmQ4M2QwZTUxOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.MJZ9M4hVGFLUG5mMrw9wN6SUe50wuBeu5WnJ6BanKzE'
    }
})