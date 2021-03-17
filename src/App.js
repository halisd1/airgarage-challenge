import './App.css';
import SearchBar from './components/SearchBar';
import ParkingSpotsList from './components/ParkingSpotsList';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [spotsList, setSpotsList] = useState([]);

  const fetchList = async (location) => {
    try {
      const spots = await axios.get(`http://localhost:8050/parking/${location}`);
      setSpotsList(spots.data.data);
    } catch(err) {
      console.log("Error fetching from Server");
    }
  }

  useEffect(() => {
    fetchList("Miami");
  }, [])

  return (
    <div className="App">
      <SearchBar fetchList={fetchList} />
      {spotsList.length>0 && <ParkingSpotsList spotsList={spotsList}/>}
    </div>
  );
}

export default App;
