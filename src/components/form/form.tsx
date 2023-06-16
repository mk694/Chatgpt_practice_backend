"use client";
import SelectInput from "./formComponents/Select";
import InputField from "./formComponents/Input";
import { Form } from "@/components/ui/form";

import { Button } from "@/components/ui/button";
import CheckBoxField from "./formComponents/Checkbox";

const days = [
  {
    id: "monday",
    label: "Monday",
  },
  {
    id: "tuesday",
    label: "Tuesday",
  },
  {
    id: "wednesday",
    label: "Wednesday",
  },
  {
    id: "thursday",
    label: "Thursday",
  },
  {
    id: "friday",
    label: "Friday",
  },
  {
    id: "saturday",
    label: "Saturday",
  },
  {
    id: "sunday",
    label: "Sunday",
  },
];

const customForm = (props: any) => {
  const { onSubmit, onError, loading, form } = props;

  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} onError={onError}>
          <InputField
            control={form.control}
            placeholder="Enter your Age"
            name="age"
            label="Age"
            description=""
          />
          <SelectInput
            control={form.control}
            placeholder="Enter your Age"
            inputArr={["Male", "Female"]}
            name="gender"
            label="Gender"
            description=""
          />
          <InputField
            control={form.control}
            placeholder="Enter your Weight in kg"
            name="weight"
            label="Weight"
            description=""
          />
          <InputField
            control={form.control}
            placeholder="Enter your Height in cm"
            name="height"
            label="Height"
            description=""
          />
          <InputField
            control={form.control}
            placeholder="Enter any medical conditions"
            name="medical_conditions"
            label="Medical Conditions"
            description=""
          />
          <InputField
            control={form.control}
            placeholder="Enter any Food Allergies"
            name="food_allergies"
            label="Food Allergies"
            description=""
          />

          <InputField
            control={form.control}
            placeholder="Enter your Goal"
            name="fitness_goals"
            label="Fitness Goals"
            description=""
          />
          <InputField
            control={form.control}
            placeholder="Enter any meal preferences"
            name="meal_preference"
            label="Meals Preferences"
            description=""
          />
          <InputField
            control={form.control}
            placeholder="Enter blood type"
            name="blood_type"
            label="bloodType"
            description=""
          />
          <InputField
            control={form.control}
            placeholder="Enter your disliked foods"
            name="foods_dislike"
            label="Foods you dislike"
            description=""
          />
          <InputField
            control={form.control}
            placeholder="Enter your preferred macronutrient"
            name="macronutrient_preference"
            label="Macronutrient you prefer"
            description=""
          />
          <SelectInput
            control={form.control}
            placeholder="Enter meals per day"
            inputArr={["1", "2", "3", "4", "5", "6", "7"]}
            name="meals_per_day"
            label="Meals per Day"
            description=""
          />
          <InputField
            control={form.control}
            placeholder="Enter your workout preference"
            name="workout_preference"
            label="Workout you prefer"
            description=""
          />
          {/* <CheckBoxField
            control={form.control}
            placeholder="Select workout days"
            inputArr={days}
            name="workout_days"
            label="Workout Days"
            description=""
          /> */}
            <SelectInput
            control={form.control}
            placeholder="Enter meals per day"
            inputArr={["1", "2", "3", "4", "5", "6", "7"]}
            name="workout_days"
            label="Workout Days"
            description=""
          />
          <div className="flex justify-center ">
            <Button disabled={loading} type="submit">
              Submit
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default customForm;
