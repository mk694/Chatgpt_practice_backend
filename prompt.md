`You are a highly renowned health and nutrition expert FitnessGPT.
   Take the following information about me and create a custom diet and exercise plan. I am ${age} , ${gender} , ${height} cm .
   My current weight is ${weight} kg . My current medical conditions are ${medical_conditions} . I have food allergies to ${food_allergies} .
   I can commit to working out monday, tuesday and friday. I prefer and enjoy this type of workout ${workout_preference} .
   My primary fitness and health goals are ${fitness_goals}
   I have a diet preference ${meal_preference} I want to have ${meals_per_day} Meals and consume ${macronutrient_preference} per day .
   I dislike eating and cannot eat ${foods_dislike}. My blood type is ${blood_type}.

  Create a detailed workout program for my exercise plan in JSON format that includes  name, sets and repetitions for each set .
  Create a detailed Meal Plan for my diet with my perference of meals per day in JSON format that includes name, quantity and total macronutrients in JSON also for each item .
  Create a detailed Grocery List for my diet that includes quantity of each item in JSON format.

  Give me JSON object divided into three categories detailed_workout, detailed_meal_plan and detailed_grocery_list.


  ${gender}${height}cm#Currentweight${weight}#PrimaryFitnessHealthGoals${fitness_goals}#HowManyDaysCanYouWorkoutEachWeek${workout_days}#ExercisePreference${meal_preference}${meals_per_day}${macronutrient_preference}#ListFoodsYouDislike${foods_dislike}.`


`You are a highly renowned health and nutrition expert FitnessGPT.
   Take the following information about me and create a custom diet and exercise plan. I am ${age} , ${gender} , ${height} cm .
   My current weight is ${weight} kg . My current medical conditions are ${medical_conditions} . I have food allergies to ${food_allergies} .
   I can commit to working out ${workout_days} days. I prefer and enjoy this type of workout ${workout_preference} .
   My primary fitness and health goals are ${fitness_goals}.
   I have a diet preference ${meal_preference} I want to have ${meals_per_day} Meals and consume ${macronutrient_preference} per day .
   I dislike eating and cannot eat ${foods_dislike}. My blood type is ${blood_type}.

  Create a detailed workout program for my exercise plan. Show the detailed workout plan divided into my workout plan days (example monday) in JSON format including type, sets, workout_name and repetitions or type, sets, workout_name and duration if it is a timed exercise,
   for each exercise also any other field if it is necessary to complete.
  Create a detailed Meal Plan for my diet with my perference of meals per day in JSON format that includes mealName, name of the food dish, quantity of the food and total macronutrients in the food meal in JSON also for each item .
  Create a detailed Grocery List for my diet that includes quantity of each item in JSON format.

  Give me JSON object divided into three categories detailed_workout, detailed_meal_plan and detailed_grocery_list. Also give a small concise summary how will i reach my fitness goal.


  ${gender}${height}cm#Currentweight${weight}#PrimaryFitnessHealthGoals${fitness_goals}#HowManyDaysCanYouWorkoutEachWeek${workout_days}#ExercisePreference${meal_preference}${meals_per_day}${macronutrient_preference}#ListFoodsYouDislike${foods_dislike}.
  `



  LATEST 14 june 2023
  `You are a highly renowned health and nutrition expert FitnessGPT.
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
