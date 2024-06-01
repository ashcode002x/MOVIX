import React , { useState } from 'react'

import ContentWrapper from "../../../components/contentWrapper/ContentWrappeer";

import SwitchTabs from '../../../switchTabs/SwitchTabs';
import { useFetcher } from 'react-router-dom';

import useFetch from "../../../hooks/useFetch";

import Carousel from '../../../components/carousel/Carousel';



const Popular = () => {

  const [endpoint , setEndPoint] = useState("movie");

  const {data , loading} = useFetch(`/${endpoint}/popular`);

  const onTabChange = (tab) => {
    setEndPoint(tab === "Movies" ? "movie" : "tv");
  }

  return (
    <div className = "carouselSection">

          <ContentWrapper>
            <div className='parent_combined'>

            <div className='combined'>
            <span className = "carouselTitle">What's Popular</span>
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

export default Popular;