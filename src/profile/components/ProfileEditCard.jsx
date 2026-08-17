import { useEffect, useRef, useState } from "react";
import Card from '../../components/Card';
import Input from '../../components/Input';
import Select from '../../components/Select';
import Textarea from '../../components/Textarea';
import CardHeader from './CardHeader';
import { MdAccountCircle } from "react-icons/md";
import { profileStore } from "../../store/profile";
import { chpSechema } from "../../utils/validation";
import { updateHealthProfile } from "../../api/createHealthProfile";

function ProfileEdit({ registerSubmit, setisFormValid }) {
  const [backendError, setBackendError] = useState("");
  const [formValues, setFormValues] = useState({
    weight: "",
    height: "",
    waist: "",
    dateOfBirth: "",
    gender: "",
    activityLevel: "",
  });
  const [errors, setErrors] = useState({});

  const profile = profileStore((state) => state.profile);
  // const setProfile = profileStore((state) => state.setProfile);

  useEffect(() => {
    setFormValues({
      weight: profile.weight ?? "",
      height: profile.height ?? "",
      waist: profile.waist ?? "",
      dateOfBirth: profile.dateOfBirth ?? "",
      gender: profile.gender ?? "",
      activityLevel: profile.activityLevel ?? "",
    });
  }, [profile]);

  const calculateGoal = (heightValue, weightValue) => {
    const height = Number(heightValue);
    const weight = Number(weightValue);

    if (!height || !weight) {
      return 2;
    }

    const heightInMeters = height / 100;
    const bmi = weight / (heightInMeters * heightInMeters);

    if (bmi < 18.5) return 3;
    if (bmi < 25) return 2;
    return 1;
  };

  const getSubmissionValues = (values) => {
    const height = Number(values.height);
    const weight = Number(values.weight);
    const waist = Number(values.waist);
    const gender = Number(values.gender);
    const activityLevel = Number(values.activityLevel);

    return {
      height,
      weight,
      waist,
      dateOfBirth: values.dateOfBirth,
      gender,
      activityLevel,
      allergies: values.allergies,
      goal: calculateGoal(values.height, values.weight),
    };
  };

  const validateForm = (values) => {
    const parsedValues = getSubmissionValues(values);
    const result = chpSechema.safeParse(parsedValues);

    if (result.success) {
      setErrors({});
      return { valid: true, values: result.data };
    }

    const fieldErrors = result.error.flatten().fieldErrors;
    setErrors(fieldErrors);

    return { valid: false };
  };

  const onSubmitHandler = () => {
    const validation = validateForm(formValues);
    if (!validation.valid) {
      return false;
    }

    const formObj = validation.values;

    const updateProfile = async () => {
      try {
        const response = await updateHealthProfile(profileData);
        // console.log(response);
        if(response.isSuccess)
        {
          profileStore
        }
      } catch (error) {
        console.log(error);
      }
    };

    updateProfile();
    return true;
  };

  useEffect(() => {
    registerSubmit(onSubmitHandler);
  }, [registerSubmit, onSubmitHandler]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <Card>
      <CardHeader
        icon={<MdAccountCircle />}
        headline="Personal Information"
        badgeMsg="Incomplete Profile"
        badgeType="warning"
      />

      <form onSubmit={onSubmitHandler} className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex flex-col gap-2">
          <Input
            name="weight"
            value={formValues.weight}
            onChange={handleChange}
            type="number"
            label="Weight (kg)"
            placeholder="Enter weight"
            error={errors.weight}
          />
        </div>

        <div className="flex flex-col gap-2">
          <Input
            name="height"
            value={formValues.height}
            onChange={handleChange}
            type="number"
            label="Height (cm)"
            placeholder="Enter height"
            error={errors.height}
          />
        </div>

        <div className="flex flex-col gap-2">
          <Input
            name="waist"
            value={formValues.waist}
            onChange={handleChange}
            type="number"
            label="Waist (cm)"
            placeholder="Enter your waist width"
            error={errors.waist}
          />
        </div>

        <div className="flex flex-col gap-2">
          <Input
            name="dateOfBirth"
            value={formValues.dateOfBirth}
            onChange={handleChange}
            type="date"
            label="Date of birth"
            placeholder="Enter date of birth"
            error={errors.dateOfBirth}
          />
        </div>

        <div className="flex flex-col gap-2">
          <Select
            name="gender"
            value={formValues.gender}
            onChange={handleChange}
            label="Gender"
            placeholder="Select gender"
            error={errors.gender}
            options={[
              { value: 1, name: 'Male', disabled: false },
              { value: 2, name: 'Female', disabled: false },
            ]}
          />
        </div>

        <div className="flex flex-col gap-2">
          <Select
            name="activityLevel"
            value={formValues.activityLevel}
            onChange={handleChange}
            label="Activity Level"
            placeholder="Select activity level"
            error={errors.activityLevel}
            options={[
              { value: 1, name: 'Sedentary (Office job)', disabled: false },
              { value: 2, name: 'Lightly Active (Exercise 1-2 days/week)', disabled: false },
              { value: 3, name: 'Moderately Active (Exercise 3-5 days/week)', disabled: false },
              { value: 4, name: 'Very Active (Daily exercise)', disabled: false },
              { value: 5, name: 'Extra Active (Physical job + heavy exercise)', disabled: false },
            ]}
          />
        </div>

        <div className="md:col-span-2 flex flex-col gap-2">
          <Textarea
            name="allergies"
            value={formValues.allergies}
            onChange={handleChange}
            rows="3"
            label="Allergies & Dietary Restrictions"
            placeholder="e.g., Peanuts, Lactose intolerant, Gluten-free"
            error={errors.allergies}
          />
        </div>
      </form>
    </Card>
  );
}

export default ProfileEdit;