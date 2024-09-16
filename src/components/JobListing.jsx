import { useState, useEffect } from 'react'
import React from 'react'
import JobItem from './JobItem'
import Spinner from './Spinner'

const JobListing = ({ isHome = false }) => {

    const [jobs, setJobs] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchJobs = async () => {
            try {
                const apiUrl = isHome ? 'http://localhost:8000/jobs?_limit=3' : 'http://localhost:8000/jobs'
                const res = await fetch(apiUrl)
                const data = await res.json()
                setJobs(data)
            }
            catch (error) {
                console.log('Error fetching data', error)
            }
            finally {
                setLoading(false)
            }
        }

        fetchJobs()
    }, [])


    return (
        <section className="bg-blue-50 px-4 py-10">
            <div className="container-xl lg:container m-auto">
                <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
                    {isHome ? 'Recent View Jobs' : 'Browse All Jobs'}
                </h2>
                {
                    loading ? <Spinner /> : (
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {jobs.map((jobItem) => (
                                <JobItem key={jobItem.id} jobItem={jobItem} />
                            ))}
                        </div>
                    )
                }
            </div>
        </section>
    )
}

export default JobListing