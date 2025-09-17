import React from 'react'

const Pagination = ({ currentPagination, setCurrentPagination, totalitems, perPage }) => {

  const totalPages = Math.ceil(totalitems / perPage)
  console.log(currentPagination, totalPages, totalitems, perPage);
  

  const updatePagination = (pageNumber) => {
    setCurrentPagination(pageNumber)
  }

  const pageNumber = [];
  for(let i = 1; i <= totalPages; i++){
    pageNumber.push(i)
  }

  return (
    <div className='container Pagination'>
      <ul>
        {
          pageNumber.map((number) => (
            <li key={number} 
            className={currentPagination === number ? "active" : ""} onClick={() => updatePagination(number)}
            >
              {number}
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default Pagination