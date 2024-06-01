import React from 'react'
import {useState} from 'react'
import ContentWrapper from '../../../components/contentWrapper/ContentWrappeer'
import SwitchTabs from '../../../switchTabs/SwitchTabs'
import useFetch from "../../../hooks/useFetch";
import Carousel from '../../../components/carousel/Carousel';

const Trending = () => {

    const [endpoint , setEndPoint] = useState("day");
  
    const {data , loading} = useFetch(`/trending/all/${endpoint}`);
  
    const onTabChange = (tab) => {
      setEndPoint(tab === "Day" ? "day" : "week");
    }
    return (
        <div className = "carouselSection">

          <ContentWrapper>
            <div className='parent_combined'>

            <div className='combined'>
            <span className = "carouselTitle">Trending</span>
            <span className='dayWeek'>
            <SwitchTabs data = {["Day" , "Week"]} onTabChange = {onTabChange} />
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
    
    export default Trending;