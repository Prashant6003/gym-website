
import React from "react";

const WorkoutSessions = () => {
  return (
    <section className="workout_session">
      <div className="wrapper">
        <h1>TOP WORKOUT SESSION</h1>
        <ul><li>Cardio, Deadlift, Squats, Bench Press, etc.</li></ul>
      
        <img src="/img5.jpg" alt="workout" />
      </div>
      <div className="wrapper">
        <h1>SERVICES AND FACILITIES</h1>
        <p>
        Here’s a list of common services and facilities offered in our gym.
        </p>
        <div className="bootcamps">
          <div>
            <h4>Personal Training</h4>
            <p>
            One-on-one sessions with certified trainers.
            Customized workout and nutrition plans.
            </p>
          </div>
          <div>
            <h4>Fitness Assessments</h4>
            <p>
            Body composition analysis.
            Strength, flexibility, and cardiovascular tests.
            </p>
          </div>
          <div>
            <h4>Diet and Nutrition Counseling</h4>
            <p>
            Meal planning and diet monitoring.
            Weight management programs.
            </p>
          </div>
          <div>
            <h4>Equipments</h4>
            <p>
              Cardio equipments like Treadmills, elliptical machines, and rowing machines.
            </p>
          </div>
          <div>
            <h4>Different zones</h4>
            <p>
              Zones like weight training and recovery zones.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkoutSessions;
