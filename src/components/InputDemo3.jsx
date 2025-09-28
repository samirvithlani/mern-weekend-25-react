import React, { useState } from 'react'

export const InputDemo3 = () => {
    const [selectedDate, setselectedDate] = useState()
    const [isSubbmited, setisSubbmited] = useState(false)

    const getDateLabel = (date)=>{
        //today's date..
        const today = new Date() // today's date...
        const choosenDate = new Date(date) //convert string to date..

        today.setHours(0,0,0,0)
        choosenDate.setHours(0,0,0,0)

        //diff
        //(1000*60*60*24)
        //1000 ms
        // 60 sec
        //60 min
        //24 hours
        const diffDays = Math.round((choosenDate.getTime()-today.getTime())/(1000*60*60*24))
        console.log(diffDays)

        switch(diffDays){
            case -2:
                return 'Day before yesterday'
            case -1:
                return 'yesterday'    
            case 0:
                return "today"    
            case 1:
                return "tomorrow"   
            case 2:
                return "day after tomorrow"     
            default:
                return `gape of ${diffDays}`    
        }

    }
    
  return (
    <div style={{textAlign:"center"}}>
        <h1>INPUT DEMO 3</h1>
        <div>
            <label>DATE</label>
            <input type='date' onChange={(event)=>{setselectedDate(event.target.value)}}></input>
            {selectedDate}
        </div>
        <div>
            <button onClick={()=>{setisSubbmited(true)}}>submit</button>
        </div>
        {
            isSubbmited && <div>
                <h1>Date = {selectedDate}</h1>
                <h2>{getDateLabel(selectedDate)}</h2>
            </div>
        }
    </div>
  )
}
