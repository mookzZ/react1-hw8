import React, { useState, useEffect, useRef } from 'react'

function BoredActivityApp() {
  const [activity, setActivity] = useState('')
  const isMounted = useRef(true)

  useEffect(() => {
    async function fetchActivity() {
      try {
        const response = await fetch('https://www.boredapi.com/api/activity')
        const data = await response.json()
        
        if (isMounted.current) {
          setActivity(data.activity)
        }
      } catch (error) {
        console.error('Error fetching activity:', error)
      }
    }

    fetchActivity()
    
    return () => {
      isMounted.current = false
    }
  }, [])

  return (
      <div className="App">
        <h1>Bored Activity App</h1>
        <p>Feeling bored? Here's something to do:</p>
        <p>{activity}</p>
      </div>
  )
}

export default BoredActivityApp