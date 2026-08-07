import React from 'react'
import { MdEdit } from "react-icons/md";
import { MdAccessibilityNew } from "react-icons/md";
import Card from '../../components/Card'
import Button from '../../components/Button'
import pfp from '../../../public/pfp.svg'

function ProfileCard() {
  return (
    <>
    <Card className='md:col-span-4 border p-8 flex flex-col items-center text-center h-full'>

    {/* Profile Photo */}
      <div class="relative w-32 h-32 mb-4">
          <img
            class="w-full h-full rounded-full object-cover"
            src={pfp}
          />
      
       {/* Photo Edit button */}

      <Button round={true} className="absolute bottom-1 right-1  border">
            <MdEdit className="text-headline-sm" />
          </Button>
      </div>

      {/* Full Name */}

      <h2 class="text-2xl font-semibold">
          Sarah Johnson
      </h2>

      {/* Email */}

      <p class="mb-6">
          sarah.j@wellness.com
        </p>

      {/* Edit Profile Button */}

      <Button className="w-full py-3 border rounded-md flex items-center justify-center gap-2">
          <MdAccessibilityNew />

          Edit Health Profile
      </Button>

    </Card>
    </>
  )
}

export default ProfileCard