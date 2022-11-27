import axios from 'axios';
import React from 'react'
import Card from './components/Card';
import './home.css';

const Home = () => {

    const fetchData = async () => {
        const data = await axios.get('https://matchday.ai/referee/champ/fixture/dummy-matches?page=0');
        console.log(data)
    }
    fetchData();
    
  return (
    <div className='home'>
        <div className="headingContainer">
            <h1 className="heading">
                International Matches
            </h1>
        </div>
        <div className="searchbarContainer">
            <input placeholder='Search for Matches' className='searchbar' type="text" />
        </div>
        <div className="cards">
            <Card/>
            <Card/>
            <Card/>

            <Card/>
            <Card/>
            <Card/>
        </div>
    </div>
  )
}

export default Home
