import React from 'react'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'

import MainLayout from './layouts/MainLayout'
import HomePage from './pages/HomePage'
import JobsPage from './pages/JobsPage'
import NotFoundPage from './pages/NotFoundPage'
import SingleJobPage from './pages/SingleJobPage'
import AddJobPage from './pages/AddJobPage'

const App = () => {

  // Add New Job
  const newJobFunc = async (newJob) => {
    const res = await fetch('/api/jobs', {
      method : 'POST',
      headers : {
        'Content-Type' : 'application/json'
      },
      body : JSON.stringify(newJob)
    })
    return;
  }
  
  // Delete Job
  const deleteJob = async (jobId) => {
    const res = await fetch(`/api/jobs/${jobId}`, {
      method : 'DELETE'
    })
    return;
  }
  
  const pageRouter = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path='/jobs' element={<JobsPage />} />
        <Route path='/jobs/:id' element={<SingleJobPage deleteJob={deleteJob} />} />
        <Route path='/add-job' element={<AddJobPage submitNewJob={newJobFunc} />} />
        <Route path='*' element={<NotFoundPage />} />
      </Route>
    )
  )

  return (
    <RouterProvider router={pageRouter} />
  )
}

export default App