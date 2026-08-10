import React, { useEffect } from 'react'
import Card from '../../components/Card'
import { GiBodyHeight } from "react-icons/gi";
import { MdStraighten } from "react-icons/md";
import { LuWeight } from "react-icons/lu";
import { FaRunning } from "react-icons/fa";
import { LuTarget } from "react-icons/lu";
import CardHeader from './CardHeader';
import { FiActivity } from "react-icons/fi";
import { getHealthProfile } from '../../api/createHealthProfile';
import { profileStore } from '../../store/profile'


function HealthSummaryCard() {

const setProfile = profileStore((state) => state.setProfile);

  let fetchProfileData = async () => {
    try{
      let response = await getHealthProfile();
      if(response.isSuccess)
      {
        setProfile(response.data)
      }
    }
    catch(error)
    {
      console.log(error);
    }
  }

  useEffect(()=>{
      fetchProfileData();
    }, []);

  const profile = profileStore((state) => state.profile);
  const mapGoal = ['Lose Weight', 'Maintain Weight', 'Gain Weight'];
  const mapActivity = ['Sedentary', 'Lightly Active', 'Moderately Active', 'Very Active', 'Extremely Active'];

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
        icon={<LuWeight />} 
        label='Weight'
        content={profile?.weight}/>
        
        <Card
        variant='HealthStat'
        icon={<MdStraighten />} 
        label='Waist'
        content={profile?.waist}/>

        <Card
        variant='HealthStat'
        icon={<FaRunning />} 
        label='Activity'
        content={mapActivity[profile?.activityLevel-1]}/>

        <Card
        variant='HealthStat'
        icon={<LuTarget />} 
        label='Goal'
        content={mapGoal[profile?.goal-1]}/>
      </div>
    </Card>
  )
}

export default HealthSummaryCard