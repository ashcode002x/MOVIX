import React , { useState } from 'react'

import ContentWrapper from "../../../components/contentWrapper/ContentWrappeer";

import SwitchTabs from '../../../switchTabs/SwitchTabs';
import { useFetcher } from 'react-router-dom';

import useFetch from "../../../hooks/useFetch";

import Carousel from '../../../components/carousel/Carousel';



const TopRated = () => {

  const [endpoint , setEndPoint] = useState("movie");

  const {data , loading} = useFetch(`/${endpoint}/top_rated`);

  const onTabChange = (tab) => {
    setEndPoint(tab === "Movies" ? "movie" : "tv");
  }

  return (
    // <div className = "carouselSection">
    //   <ContentWrapper>
    //     <span className = "carouselTitle">Top Rated</span>
    //     <SwitchTabs data = {["Movies" , "TV Shows"]} onTabChange = {onTabChange} />
    //   </ContentWrapper>

    //   <Carousel data = {data?.results} loading = {loading} endpoint = {endpoint}/>
    // </div>
    <div className = "carouselSection">

          <ContentWrapper>
            <div className='parent_combined'>

            <div className='combined'>
            <span className = "carouselTitle">Top Rated</span>
            <span className='dayWeek'>
            <SwitchTabs data = {["Movies" , "TV Shows"]} onTabChange = {onTabChange} />
            </span>
            </div>
            </div>
          </ContentWrapper>
          <div className='movie_section'>
          
          <Carousel data = {data?.results} loading = {loading}/>
          </div>
        </div>
  )
}

export default TopRated;