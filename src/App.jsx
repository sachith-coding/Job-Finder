import React from 'react'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'

import MainLayout from './layouts/MainLayout'
import HomePage from './pages/HomePage'
import JobsPage from './pages/JobsPage'
import NotFoundPage from './pages/NotFoundPage'
import SingleJobPage from './pages/SingleJobPage'
import AddJobPage from './pages/AddJobPage'

const App = () => {

  const newJobFunc = (newJob) => {
    console.log("This is submitted Job : \n", newJob)
  }
  
  const pageRouter = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path='/jobs' element={<JobsPage />} />
        <Route path='/jobs/:id' element={<SingleJobPage />} />
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