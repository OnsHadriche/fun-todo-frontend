import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Travelplan() {
    const [travelplan, setTravelplan]= useState([])
    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_URL}/travelplan`)
        .then(res=>{
            console.log({res});
            setTravelplan(res.data)
        })
        .catch(err=>{
            alert(err.message)
        })

    },[])
  return (
    <div>
        <h1>TP</h1>
        {travelplan.map(t=>(
            <div key={t._id}>
                <h1>{t.name}</h1>
            </div>
        )

        )}
    </div>
  )
}

export default Travelplan