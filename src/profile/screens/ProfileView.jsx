import React from 'react'
import ProfileCard from '../components/ProfileCard'
import HealthSummaryCard from '../components/HealthSummaryCard'
import StatisticsGrid from '../components/StatisticsGrid'
import AIInsightsCard from '../components/AIInsightsCard'


function ProfileHeader() {
  return (
        <div class="mb-8">
        <h1 class="text-4xl font-bold">My Profile</h1>
        <p class="text-lg">
            Manage your health data and nutrition goals.
        </p>
        </div>
  )
}


function ProfilePage() {
  return (
    //Container
    <div class="m-auto px-6 py-6">

        <ProfileHeader/>

        {/* Main Grid */}
        <div class="grid grid-cols-1 md:grid-cols-12 gap-6">
            <ProfileCard/>
            
            {/* Right Column */}
            <div class="md:col-span-8 flex flex-col gap-6">
                <HealthSummaryCard/>
                <StatisticsGrid/>
            </div>
            
            <AIInsightsCard
            insight='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum amet accusamus sunt quidem illo totam molestias, iusto ratione ullam perspiciatis cumque vero laudantium, aliquam libero quaerat architecto? Quam, et similique!'
            />
        </div>

    </div>
  )
}

export default ProfilePage