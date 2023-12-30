import React from 'react';
import Layout from './assets/appbar';
import StickyFooter from './assets/footer';


const Workouts = () => {
  return (
    <div>
      <Layout>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '30px', height: '65vh' }}>

  <div className="w-auto h-auto bg-neutral-800 rounded-3xl text-neutral-300 p-6 flex flex-col items-start gap-4 hover:bg-gray-900 hover:shadow-2xl hover:shadow-orange-400 transition-shadow">
    <img className="w-full h-64 object-cover rounded-2xl mb-4" src="images/easy.webp" alt="Easy Workout" />
    <div className="max-w-full">
      <p className="font-extrabold text-xl">Easy</p>
      <p className="text-sm font-bold overflow-hidden overflow-y-auto max-h-32">
        Involves intense physical activity that challenges your cardiovascular system, strength, endurance, or a combination of these. The specific type of hard workout can vary based on your fitness goals, preferences, and fitness level.
      </p>
    </div>
    <button className="bg-sky-700 font-extrabold p-2 px-6 rounded-xl hover:bg-sky-500 transition-colors">See more</button>
  </div>

  <div className="w-auto h-auto bg-neutral-800 rounded-3xl text-neutral-300 p-6 flex flex-col items-start gap-4 hover:bg-gray-900 hover:shadow-2xl hover:shadow-orange-400 transition-shadow">
  <img className="w-full h-64 object-cover rounded-2xl mb-4" src="images/medium.jpg" alt="Medium Workout" />
    <div className="max-w-full">
      <p className="font-extrabold text-xl">Medium</p>
      <p className="text-sm font-bold overflow-hidden overflow-y-auto max-h-32">Moderate-intensity exercise session that provides a good balance between challenging your fitness level and being sustainable for regular practice. Here's an example of a medium workout that includes a mix of cardiovascular exercise, strength training, and flexibility work</p>
    </div>
    <button className="bg-sky-700 font-extrabold p-2 px-6 rounded-xl hover:bg-sky-500 transition-colors">See more</button>
  </div>

  <div className="w-auto h-auto bg-neutral-800 rounded-3xl text-neutral-300 p-6 flex flex-col items-start gap-4 hover:bg-gray-900 hover:shadow-2xl hover:shadow-orange-400 transition-shadow">
  <img className="w-full h-64 object-cover rounded-2xl mb-4" src="images/hard.webp" alt="Hard Workout" />
    <div className="max-w-full">
      <p className="font-extrabold text-xl">Hard</p>
      <p className="text-sm font-bold overflow-hidden overflow-y-auto max-h-32">Involves intense physical activity that challenges your cardiovascular system, strength, endurance, or a combination of these. The specific type of hard workout can vary based on your fitness goals, preferences, and fitness level
      </p>
    </div>
    <button className="bg-sky-700 font-extrabold p-2 px-6 rounded-xl hover:bg-sky-500 transition-colors">See more</button>
  </div>
</div>

      </Layout>

      <StickyFooter />
    </div>
  );
};

export default Workouts;
