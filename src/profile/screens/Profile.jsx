import React from 'react'
import { useState } from 'react'
import ProfileCard from '../components/ProfileCard'
import HealthSummaryCard from '../components/HealthSummaryCard'
import StatisticsGrid from '../components/StatisticsGrid'
import AIInsightsCard from '../components/AIInsightsCard'
import ProfileEdit from '../components/ProfileEditCard'


function ProfileHeader() {
  return (
        <div class="mb-8">
        <h1 class="text-headline-lg font-headline-lg text-text-primary">My Profile</h1>
        <p class="text-body-lg font-body-lg text-text-secondary">
            Manage your health data and nutrition goals.
        </p>
        </div>
  )
}

function ProfilePage() {
  
  const [profileEdit, setProfileEdit] = useState(false);
  const toggleProfileEdit = () => setProfileEdit(!profileEdit);

  return (
    //Container
    <div class="m-auto px-6 py-6 bg-background">

        <ProfileHeader/>

        {/* Main Grid */}
        <div class="grid grid-cols-1 md:grid-cols-12 gap-6">
            <ProfileCard toggleProfileEdit = {toggleProfileEdit}/>
            
            {/* Right Column */}
            <div class="md:col-span-8 flex flex-col gap-6">
                {!profileEdit
                ?
                <>
                <HealthSummaryCard/>
                <StatisticsGrid/>
                </>
                :
                <ProfileEdit/>
                }
            </div>
        </div>

    </div>
  )
}

export default ProfilePage