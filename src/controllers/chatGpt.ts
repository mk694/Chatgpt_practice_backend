import { Request, Response, NextFunction } from "express";
import { Configuration, OpenAIApi } from "openai";

const getAPIDATA = async (req: Request, res: Response) => {
  const configuration = new Configuration({
    // organization: "org-BhJbh3x6d4BXGYf5uskywp3V",
    apiKey: process.env.OPENAI_API_KEY,
  });

  const {
    age,
    gender,
    weight,
    height,
    medical_conditions,
    food_allergies,
    workout_days,
    fitness_goals,
    meal_preference,
    blood_type,
    foods_dislike,
    macronutrient_preference,
    meals_per_day,
    workout_preference,
  } = req.body;


  console.log(req.body);

  // My primary fitness and health goals are ${fitness_goals} .
  const promptWithMessage = `You are a highly renowned health and nutrition expert FitnessGPT.
   Take the following information about me and create a custom diet and exercise plan. I am ${age} years old , ${gender} , ${height} cm .
   My current weight is ${weight} kg . My current medical conditions are ${medical_conditions} . I have food allergies to ${food_allergies} .
   I can commit to working out for total ${workout_days} days. I prefer and enjoy this type of workout ${workout_preference} .
   My primary fitness and health goals are ${fitness_goals}.
   I have a diet preference ${meal_preference}. I want to have ${meals_per_day} Meals and consume ${macronutrient_preference} per day .
   I dislike eating and cannot eat ${foods_dislike}. My blood type is ${blood_type}.

   Create detailed workout program for my exercise plan. Show the detailed workout plan divided into my workout plan days in JSON format including type, sets, workoutName and repetitions or type, sets, workoutName and duration in minutes and seconds if the exercise has duration,  The workout days should not exceed my total ${workout_days} workout days.
   Create detailed Meal Plan for my diet and my meals in JSON format that includes dishName, quantity of the food with relevant measure example 1g, 1ml etc.
   Create detailed Grocery List for my diet that includes quantity of each item in JSON format.

   Give me a JSON object compulsory divided into {workout, diet and grocery}. Also for the same object follow a format where the workout in JSON object has keys with weekday names and further divide into objects without any keys just arrays of objects. diet in JSON object has keys the time of the meal. Grocery must be an object.
   Do not return any non-json text or numbering.
  `.trim();

  console.log("promptWithMessage", promptWithMessage);

  const openaiInstance = new OpenAIApi(configuration);
  const completion = await openaiInstance.createCompletion({
    model: "text-davinci-003",
    prompt: promptWithMessage,
    max_tokens: 2000,
    suffix:null,
    temperature:0,
    n:1,

  });
  console.log("completion", completion.data);

  res.send(completion.data.choices[0].text);
};

export { getAPIDATA };
