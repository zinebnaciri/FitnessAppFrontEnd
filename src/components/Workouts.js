import React from 'react';
import Layout from './assets/appbar';
import StickyFooter from './assets/footer';

const WorkoutSection = ({ title, imageSrc, description }) => {
  return (
    <div className="w-auto h-auto bg-neutral-800 rounded-3xl text-neutral-300 p-6 flex flex-col items-start gap-4 hover:bg-gray-900 hover:shadow-2xl hover:shadow-orange-400 transition-shadow">
      <img className="w-full h-64 object-cover rounded-2xl mb-4" src={imageSrc} alt={`${title} Workout`} />
      <div className="max-w-full">
        <p className="font-extrabold text-xl">{title}</p>
        <p className="text-sm font-bold overflow-hidden overflow-y-auto max-h-32">{description}</p>
      </div>
      <button className="bg-sky-700 font-extrabold p-2 px-6 rounded-xl hover:bg-sky-500 transition-colors">See more</button>
    </div>
  );
};

const Workouts = () => {
  return (
    <div>
      <Layout>
        <h1 className="text-3xl font-bold mb-4">Workouts</h1>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '30px', height: '65vh' }}>
          <WorkoutSection
            title="Easy"
            imageSrc="images/easy.webp"
            description="Involves intense physical activity that challenges your cardiovascular system, strength, endurance, or a combination of these. The specific type of hard workout can vary based on your fitness goals, preferences, and fitness level."
          />

          <WorkoutSection
            title="Medium"
            imageSrc="images/medium.jpg"
            description="Moderate-intensity exercise session that provides a good balance between challenging your fitness level and being sustainable for regular practice. Here's an example of a medium workout that includes a mix of cardiovascular exercise, strength training, and flexibility work."
          />

          <WorkoutSection
            title="Hard"
            imageSrc="images/hard.webp"
            description="Involves intense physical activity that challenges your cardiovascular system, strength, endurance, or a combination of these. The specific type of hard workout can vary based on your fitness goals, preferences, and fitness level."
          />
        </div>
      </Layout>

      <StickyFooter />
    </div>
  );
};

export default Workouts;