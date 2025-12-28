import React, { useState } from 'react'

export const TabComponentDemo = () => {
    const [tabs, settabs] = useState(1)
  return (
    <div style={{textAlign:"center"}}>
        <h1>TAB COMPONENT DEMO</h1>
        <nav className='navbar'>
            <ul>
                <li><button onClick={()=>{settabs(1)}}>TAB 1</button></li>
                <li><button onClick={()=>{settabs(2)}}>TAB 2</button></li>
                <li><button onClick={()=>{settabs(3)}}>TAB 3</button></li>
            </ul>
        </nav>
        <div>
            {
                tabs ==1 && <div> TAB 1 active div</div>
            }
            {
                tabs ==2 && <div> TAB 2 active div</div>
            }
            {
                tabs ==3 && <div> TAB 3 active div</div>
            }
        </div>
    </div>
  )
}
