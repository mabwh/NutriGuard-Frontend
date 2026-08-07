import React from 'react'
import Card from '../../components/Card'
import { MdStraighten } from "react-icons/md";
import { LuWeight } from "react-icons/lu";
import { FaRunning } from "react-icons/fa";
import { LuTarget } from "react-icons/lu";



function SummaryHeader() {
  return (
    <div className='flex justify-between mb-2'>
        <h3 className='text-xl'>
          Health Summary
        </h3>
        <div className='px-1 border rounded-3xl'>
          <span className='text-sm'>Updated Today</span>
        </div>
    </div>
  )
}

function HealthSummaryCard() {
  return (
    <Card className='p-10 border'>
      {/* SummaryHeader & HealthStatCard ×4 */}
      <SummaryHeader/>
      
      <div className='grid grid-cols-2 md:grid-cols-2 gap-3'>
        <Card
        variant='HealthStat'
        icon={<MdStraighten />} 
        label='Height'
        content='175cm'/>

        <Card
        variant='HealthStat'
        icon={<LuWeight />} 
        label='Weight'
        content='70kg'/>

        <Card
        variant='HealthStat'
        icon={<FaRunning />} 
        label='Activity'
        content='Moderately Active'/>

        <Card
        variant='HealthStat'
        icon={<LuTarget />} 
        label='Goal'
        content='Maintain'/>
      </div>
    </Card>
  )
}

export default HealthSummaryCard