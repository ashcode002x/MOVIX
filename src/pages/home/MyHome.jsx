import React from 'react'
import "./style.scss";
import HeroBanner from "./HeroBanner/HeroBanner";
import Trending from './trending/Trending';
import Popular from './popular/Popular';
import TopRated from './toprated/TopRated';

const MyHome = () => {
  return (
    <div className='homepage'> 
      <HeroBanner/>
      <Trending/>
      <Popular/>
      <TopRated/>
      

      

     
    </div>
  )
}

export default MyHome