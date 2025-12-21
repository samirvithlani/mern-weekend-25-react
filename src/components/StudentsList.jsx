import React, { useContext } from 'react'
import { SelectedStudents } from './SelectedStudents'
import { StudentContext } from '../context/StudentContext'

export const StudentsList = () => {
  // const {studentData} = useContext(StudentContext)
  // console.log("inside student list ...",studentData)
  return (
    <div>
        <h1>StudentsList</h1>
        
        <SelectedStudents></SelectedStudents>
    </div>
  )
}
