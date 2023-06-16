import "./WorkoutDetails.css";
const WorkoutDetails = (props) => {
  const { chatData } = props;

  const workout = chatData?.workout ? Object.entries(chatData.workout) : [];
  const diet = chatData?.diet ? Object.entries(chatData.diet) : [];
  if (Object.keys(chatData).length > 0) {
    console.log({ chatData });
  }
  return (
    <>
      {Object.keys(chatData).length > 0 && (
        <div>
          <div>
            <h1 className="text-2xl my-2 text-center uppercase">Workout</h1>
            {workout.map((item: [string, []], index) => {
              return (
                <div key={index}>
                  <h1 className="dayname mt-3 text-2xl ">{item[0]}</h1>
                  {item[1]?.map((elem: any, i) => {
                    return (
                      <div key={i}>
                        <div className="workoutTitle font-[600] mt-3 text-green-700 ">
                          {elem?.workoutName}
                          <span className="workoutDetails text-xs">
                            {" "}
                            ({elem?.type})
                          </span>
                          :
                        </div>
                        <div>
                          <div className="flex justify-between ">
                            <div className="workoutHeads">Sets</div>
                            <div className="workoutDetails">{elem?.sets}</div>
                          </div>
                          {elem?.duration && (
                            <div className="flex justify-between ">
                              <div className="workoutHeads">Duration</div>
                              <div className="workoutDetails">
                                {elem?.duration}
                              </div>
                            </div>
                          )}
                          <div className="flex justify-between "></div>
                          {elem?.repetitions && (
                            <div className="flex justify-between ">
                              <div className="workoutHeads">Repetitions</div>
                              <div className="workoutDetails">
                                {elem?.repetitions}
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </div>
          <div>
            <h1 className="text-2xl my-2 text-center uppercase">Diet</h1>
            {diet.map((item: [string, []], index) => {
              return (
                <div key={index}>
                  <h1 className="dayname mt-3 text-2xl ">{item[0]}</h1>
                  {item[1]?.map((elem: any, i) => {
                    return (
                      <div key={i}>
                        <div className="workoutTitle font-[600] mt-3 text-blue-700 ">
                          {elem?.dishName}
                          {/* <span className="workoutDetails text-xs">
                        </span> */}
                          :
                        </div>
                        <div>
                          <div className="flex justify-between ">
                            <div className="workoutHeads">Quantity</div>
                            <div className="workoutDetails">
                              {elem?.quantity}
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
};

export default WorkoutDetails;
