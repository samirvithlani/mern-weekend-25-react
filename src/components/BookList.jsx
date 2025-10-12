import React from 'react'

export const BookList = (props) => {
  //{books:[],deletbook:f}
  return (
    <div>
        <h1>BOOK LIST</h1>
        <table className='table table-dark'>
          <thead>
            <tr>
              <th>ID</th>
              <th>NAME</th>
              <th>PRICE</th>
              <th>RATINGS</th>
              <th>ACTION</th>
            </tr>
          </thead>
          <tbody>
            {
              props.books.map((book)=>{
                return <tr>
                  <td>{book.id}</td>
                  <td>{book.name}</td>
                  <td>{book.price}</td>
                  <td>{book.ratings}</td>
                  <td>
                    <button onClick={()=>{props.deleteBook(book.id)}} className='btn btn-danger'>DELETE</button>
                  </td>
                </tr>
              })
            }
          </tbody>
        </table>
    </div>
  )
}
