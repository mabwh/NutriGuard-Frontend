import React from 'react'
import Card from '../../components/Card'
import Input from '../../components/Input'
import Select from '../../components/Select'
import Textarea from '../../components/Textarea'
import CardHeader from './CardHeader'
import { MdAccountCircle } from "react-icons/md";

function ProfileEdit() {
  return (
    <Card>
        <CardHeader icon={<MdAccountCircle/>} 
            headline="Personal Information"
            badgeMsg='Incomplete Profile'
            badgeType='warning'/>

        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex flex-col gap-2">
            <Input
                type="number"
                label="Weight (kg)"
                value="78"
                placeholder="Enter weight"/>
        </div>

        <div className="flex flex-col gap-2">
            <Input
                type="number"
                label="Height (cm)"
                value="182"
                placeholder="Enter height"/>
        </div>

        <div className="flex flex-col gap-2">
            <Input
                type="number"
                label="Waist (cm)"
                value="77"
                placeholder="Enter your waist width"/>
        </div>

        <div className="flex flex-col gap-2">
            <Input
                type="date"
                label="Date of birth"
                value="1-1-2005"
                placeholder="Enter age"/>
        </div>

        <div className="flex flex-col gap-2">
            <Select label="Gender" 
            options={[
                {value:1, name:'Male', selected:true, disabled: false},
                {value:2, name:'Female', selected:false, disabled: false}
            ]}/>
        </div>

        <div className="md:col-span-2 flex flex-col gap-2">
            <Select label='Activity Level' options={[
                {value:1, name:'Sedentary (Office job)', selected:false, disabled: false},
                {value:2, name:'Lightly Active (Exercise 1-2 days/week)', selected:true, disabled: false},
                {value:3, name:'Moderately Active (Exercise 3-5 days/week)', selected:false, disabled: false},
                {value:4, name:'Very Active (Daily exercise)', selected:false, disabled: false},
                {value:5, name:'Extra Active (Physical job + heavy exercise)', selected:false, disabled: false},
            ]}/>
        </div>

        <div className="md:col-span-2 flex flex-col gap-2">
            <Textarea
                rows="3"
                label="Allergies & Dietary Restrictions"
                placeholder="e.g., Peanuts, Lactose intolerant, Gluten-free">
                Peanuts, Shellfish
            </Textarea>
        </div>

    </form>
    </Card>
  )
}

export default ProfileEdit