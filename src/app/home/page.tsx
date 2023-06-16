"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Form from "@/components/form/form";
import axios from "axios";
import { useState } from "react";
import WorkoutDetails from "@/components/WorkoutDetails";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { InfinitySpin } from "react-loader-spinner";
import { Audio } from "react-loader-spinner";

// "age": "26",
// "gender":"female",
// "weight":"69",
// "height":"169",
// "medical_conditions":"Diarrhea",
// "food_allergies":"peanut allergy",
// "workout_days":"4",
// "fitness_goals":"1 hour of yoga training",
// "meal_preference":"indian",
// "blood_type":"B+",
// "foods_dislike": "none",
// "macronutrient_preference":"carbohydrates",
// "meals_per_day": "5",
// "workout_preference": "yoga"

const FormSchema = z.object({
  age: z.string().min(1, { message: "Age is required" }),
  gender: z.string().min(1, { message: "Gender is required" }),
  medical_conditions: z
    .string()
    .min(1, { message: "Medical conditions is required" }),
  food_allergies: z.string().min(1, { message: "Food allergies is required" }),
  weight: z.string().min(1, { message: "Weight is required" }),
  height: z.string().min(1, { message: "Height is required" }),
  // workout_days: z
  //   .array(z.string())
  //   .refine((value) => value.some((item) => item)),
  workout_days: z.string().min(1, { message: "Meals per day is required" }),
  fitness_goals: z.string().min(1, { message: "Fitness goals is required" }),
  meal_preference: z
    .string()
    .min(1, { message: "Meal preference is required" }),
  blood_type: z.string().min(1, { message: "Blood type is required" }),
  foods_dislike: z
    .string()
    .min(1, { message: "Foods you dislike is required" }),
  macronutrient_preference: z
    .string()
    .min(1, { message: "Macronutrient preference is required" }),
  meals_per_day: z.string().min(1, { message: "Meals per day is required" }),
  workout_preference: z
    .string()
    .min(1, { message: "Workout preference is required" }),
});

const Home = () => {
  const [chatData, setChatData] = useState({});
  const [loading, setLoading] = useState(false);

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      age: "",
      gender: "",
      medical_conditions: "",
      food_allergies: "",
      weight: "",
      height: "",
      workout_days: "",
      fitness_goals: "",
      meal_preference: "",
      blood_type: "",
      foods_dislike: "",
      macronutrient_preference: "",
      meals_per_day: "",
      workout_preference: "",
    },
  });

  const onSubmit = async (formData) => {
    setLoading(true);
    document.body.style.overflow = "hidden";
    console.log("formaData", {
      ...formData,
    });
    try {
      const response: any = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/gpt`,
        {
          ...formData,
        }
      );
      setChatData(response.data);
      setLoading(false);
      document.body.style.overflow = "auto";
      // form.reset()
    } catch (error) {
      setLoading(false);
      document.body.style.overflow = "auto";
    }
  };
  const onError = (error: any) => {
    console.log("error", error);
  };

  return (
    <>
      {loading && (
        <div className="fixed top-0 z-[100] flex justify-center items-center w-full h-full">
          <div className="h-full w-full bg-slate-200 absolute opacity-50"></div>
          <div className="opacity-100 z-[105]">
            <InfinitySpin width="100" color="#4fa94d" />
          </div>
        </div>
      )}
      <div className="flex space-x-5 m-10">
        <div className=" w-1/2 ">
          <Card className="w-full">
            <CardHeader>
              <CardTitle>Submit</CardTitle>
              <CardDescription>
                Please give your personal details
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Form
                onSubmit={onSubmit}
                onError={onError}
                loading={loading}
                form={form}
              />
            </CardContent>
          </Card>
        </div>
        <div className="w-1/2">
          <Card className="w-full bg-gray-100">
            <CardHeader>
              <CardTitle>Response</CardTitle>
              <CardDescription>
                Your personalized workout plan will be displayed below.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <WorkoutDetails chatData={chatData} />
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
};

export default Home;
