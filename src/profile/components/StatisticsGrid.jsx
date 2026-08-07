import React from 'react'
import Card from '../../components/Card'
import { FaRegBookmark } from "react-icons/fa";
import { MdOutlineRestaurant } from "react-icons/md";
import { FaFireAlt } from "react-icons/fa";



function StatisticsGrid() {
  return (
    <Card className='border'>
      {/* StatisticCard ×3 */}
      <div className='grid grid-cols-1 md:grid-cols-3 gap-3'>
        <Card
        variant='Statistic' 
        icon={<FaRegBookmark/>}
        label='Recipes Saved'
        content='48'
        insight={<span>+12% this month</span>}
        />

        <Card
        variant='Statistic' 
        icon={<MdOutlineRestaurant/>}
        label='Meals Completed'
        content='156'
        insight={<span>92% adherence</span>}
        />

        <Card
        variant='Statistic' 
        icon={<FaFireAlt/>}
        label='Current Streak'
        content='12 Days'
        insight={<span>Personal Record!</span>}
        />
      </div>
    </Card>
  )
}

export default StatisticsGrid