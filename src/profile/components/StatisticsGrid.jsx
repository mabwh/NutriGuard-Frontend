import React from 'react'
import Card from '../../components/Card'
import { FaRegBookmark } from "react-icons/fa";
import { MdOutlineRestaurant } from "react-icons/md";
import { FaFireAlt } from "react-icons/fa";
import { IoIosTrendingUp } from "react-icons/io";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { MdOutlineWorkspacePremium } from "react-icons/md";



function StatisticsGrid() {
  return (
    <div>
      {/* StatisticCard ×3 */}
      <div className='grid grid-cols-1 md:grid-cols-3 gap-3'>
        <Card
        variant='Statistic' 
        icon={<FaRegBookmark/>}
        label='Recipes Saved'
        content='48'
        insight={<span><IoIosTrendingUp className='inline'/> +12% this month</span>}
        insightType="success"
        />

        <Card
        variant='Statistic' 
        icon={<MdOutlineRestaurant/>}
        label='Meals Completed'
        content='156'
        insight={<span><IoIosCheckmarkCircleOutline className='inline'/> 92% adherence</span>}
        insightType="info"
        />

        <Card
        variant='Statistic' 
        icon={<FaFireAlt/>}
        label='Current Streak'
        content='12 Days'
        insight={<span><MdOutlineWorkspacePremium className='inline'/> Personal Record!</span>}
        insightType="warning"
        />
      </div>
    </div>
  )
}

export default StatisticsGrid