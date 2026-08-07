import React from 'react'
import Card from '../../components/Card'
import { MdStraighten } from "react-icons/md";
import { LuWeight } from "react-icons/lu";
import { FaRunning } from "react-icons/fa";
import { LuTarget } from "react-icons/lu";
import CardHeader from './CardHeader';
import { FiActivity } from "react-icons/fi";

function HealthSummaryCard() {
  return (
    <Card>
      {/* SummaryHeader & HealthStatCard ×4 */}
      <CardHeader 
      icon={<FiActivity/>} 
      headline='Health Summary'
      badgeMsg="Updated today"
      badgeType="info"
      />
      
      <div className='grid grid-cols-2 md:grid-cols-4 gap-3'>
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