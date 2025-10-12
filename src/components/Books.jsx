import React, { useState } from "react";
import { BookList } from "./BookList";

export const Books = () => {

  const [books, setbooks] = useState(
    [
    { id: 101, name: "java", price: 200, ratings: 7.9 },
    { id: 102, name: "python", price: 250, ratings: 8.9 },
    { id: 103, name: "js", price: 200, ratings: 9.0 },
   ]
);


  const deleteBook = (id)=>{
   
    //101!=101 false
    //102!=101 true
    //103!=101 true
    const afterdeletearray = books.filter((book)=>book.id!=id)
    console.log(afterdeletearray)
    setbooks(afterdeletearray)
    
  }

  return (
    <div style={{ textAlign: "center" }}>
      <h1>BOOKS</h1>
      <BookList books = {books} deleteBook = {deleteBook}></BookList>
    </div>
  );
};
