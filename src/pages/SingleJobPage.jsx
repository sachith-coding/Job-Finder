import React from 'react'
import { useState, useEffect } from 'react'
import Spinner from '../components/Spinner'
import { useParams } from 'react-router-dom'

const SingleJobPage = () => {

  const {id} = useParams()
  const [job, setJob] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try
      {
        const res = await fetch(`/api/jobs/${id}`);
        const data = await res.json()
        setJob(data)
      }
      catch(error)
      {
        console.log("Error fetching data!", error)
      }
      finally
      {
        setLoading(false)
      }
    }

    fetchData()

  }, [])

  return (
    loading ? <Spinner /> : <div>{job.location}</div>
  )
}

export default SingleJobPage