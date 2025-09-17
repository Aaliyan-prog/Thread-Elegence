import React from 'react'

const PageHeader = ({ pageTitle, curPage }) => {
  return (
    <div className='PageHeader-section'>
      <h1>{pageTitle}</h1>
      <p>{curPage}</p>
    </div>
  )
}

export default PageHeader