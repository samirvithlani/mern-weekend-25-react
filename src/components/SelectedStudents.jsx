import React, { useContext } from 'react'
import { StudentContext } from '../context/StudentContext'

export const SelectedStudents = () => {
  const {studentData} = useContext(StudentContext)
  console.log("inside selected   student  ...",studentData)
  return (
    <div>
        <h1>SelectedStudents</h1>
    </div>
  )
}
