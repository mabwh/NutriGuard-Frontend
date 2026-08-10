import { useEffect, useState } from "react";
import Card from '../../components/Card'
import Input from '../../components/Input'
import Select from '../../components/Select'
import Textarea from '../../components/Textarea'
import CardHeader from './CardHeader'
import { MdAccountCircle } from "react-icons/md";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { chpSechema } from '../../utils/validation';
import { createHealthProfile } from "../../api/createHealthProfile";
import BackendErrorMessage from "../../components/BackendErrorMessage";

function ProfileEdit({registerSubmit}) {

    const [backendError, setBackendError] = useState("");
      const {
        register,
        handleSubmit,
        setValue,
        watch,
        formState: { errors, isSubmitting },
      } = useForm({
        resolver: zodResolver(chpSechema),
        mode: "onBlur",
        defaultValues: {
          activityLevel: "",
        },
      });
    
      const height = watch("height");
      const weight = watch("weight");
    
      const calculateGoal = (bmi) => {
        if (bmi < 18.5) {
          return 3;
        }
    
        if (bmi < 25) {
          return 2;
        }
    
        return 1;
      };
    
      useEffect(() => {
        registerSubmit(()=>onSubmit())

        if (height > 0 && weight > 0) {
          const heightInMeters = height / 100;
          const bmi = weight / (heightInMeters * heightInMeters);
    
          setValue("goal", calculateGoal(bmi));
        }
      }, [registerSubmit, height, weight, setValue]);
    
      const onSubmit = async (data) => {
        try {
            alert("form submitted");

        } catch (error) {
          setBackendError(error.response?.data?.message);
          if (error.response?.data?.message === "Test") {
            
          }
        }
      };

  return (
    <Card>
        <CardHeader icon={<MdAccountCircle/>} 
            headline="Personal Information"
            badgeMsg='Incomplete Profile'
            badgeType='warning'/>

        <form onSubmit={handleSubmit(onSubmit)}
        className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex flex-col gap-2">
            <Input
                {...register("weight")}
                error={errors.weight?.message}
                type="number"
                label="Weight (kg)"
                placeholder="Enter weight"/>
        </div>

        <div className="flex flex-col gap-2">
            <Input
                {...register("height")}
                error={errors.height?.message}
                type="number"
                label="Height (cm)"
                placeholder="Enter height"/>
        </div>

        <div className="flex flex-col gap-2">
            <Input
                {...register("waist")}
                error={errors.waist?.message}
                type="number"
                label="Waist (cm)"
                placeholder="Enter your waist width"/>
        </div>

        <div className="flex flex-col gap-2">
            <Input
                {...register("dateOfBirth")}
                error={errors.dateOfBirth?.message}
                type="date"
                label="Date of birth"
                placeholder="Enter date of birth"/>
        </div>

        <div className="flex flex-col gap-2">
            <Select label="Gender"
            {...register("gender")}
            error={errors.dateOfBirth?.gender}
            options={[
                {value:1, name:'Male', selected:true, disabled: false},
                {value:2, name:'Female', selected:false, disabled: false}
            ]}/>
        </div>

        <div className="flex flex-col gap-2">
            <Select label='Activity Level' 
            {...register("activityLevel")}
            error={errors.activityLevel?.message}
            options={[
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