import React from 'react';
import Layout from './assets/appbar';
import StickyFooter from './assets/footer';

const DietSection = ({ title, imageSrc, description }) => {
  return (
    <div className="w-auto h-auto bg-neutral-800 rounded-3xl text-neutral-300 p-6 flex flex-col items-start gap-4 hover:bg-gray-900 hover:shadow-2xl hover:shadow-orange-400 transition-shadow">
      <img className="w-full h-64 object-cover rounded-2xl mb-4" src={imageSrc} alt={`${title} Diet`} />
      <div className="max-w-full">
        <p className="font-extrabold text-xl">{title}</p>
        <p className="text-sm font-bold overflow-hidden overflow-y-auto max-h-32">{description}</p>
      </div>
      <button className="bg-sky-700 font-extrabold p-2 px-6 rounded-xl hover:bg-sky-500 transition-colors">See more</button>
    </div>
  );
};

const Diets = () => {
  return (
    <div>
      <Layout>
        <h1 className="text-3xl font-bold mb-4">Diets</h1>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '30px', height: '65vh' }}>
          <DietSection
            title="Low Carb"
            imageSrc="images/lowcarb.png"
            description="A diet that restricts the intake of carbohydrates. It emphasizes protein, healthy fats, and non-starchy vegetables."
          />

          <DietSection
            title="Mediterranean"
            imageSrc="images/mediterranean.jpg"
            description="Inspired by the traditional dietary patterns of countries bordering the Mediterranean Sea. It includes fruits, vegetables, whole grains, fish, and olive oil."
          />

          <DietSection
            title="Vegetarian"
            imageSrc="images/vegetarian.jpg"
            description="A diet that excludes meat and sometimes other animal products. It focuses on plant-based foods like fruits, vegetables, grains, and legumes."
          />
        </div>
      </Layout>

      <StickyFooter />
    </div>
  );
};

export default Diets;
