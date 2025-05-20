import React, { useEffect, useState } from "react";
import Loading from "./Loading";
import Tours from "./Tours";

const App = () => {
  const [tours, setTours] = useState([])
  const [loading, setLoading] = useState(true)

  function fetchTours(){
    setLoading(true)
    fetch("https://ajay70aa.github.io/tours-json/tours.json")
    .then(res => res.json())
    .then(data => {
      setTours(data)
      setLoading(false)
    })
    .catch(err => console.log(err))
    setLoading(false)
  }
  useEffect(() => {
    fetchTours()
  }, [])
  
  function removeTour(id){
    setTours(prevTours => prevTours.filter(tour => tour.id !== id))
  }
  function refresh(){
    fetchTours()
  }
  return(
    <main id="main">
      {loading ? <Loading />: <Tours tourList={tours} onRemove={removeTour}/> }
      {tours.length == 0 && <div>
          <p>No tours left</p>
          <button onClick={refresh}>Refresh</button>
        </div>}
    </main>
  )
}
export default App;
