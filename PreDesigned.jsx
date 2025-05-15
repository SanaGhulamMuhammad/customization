import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import kameez from '../../assets/pre-image/kameez.png';
import shalwar from '../../assets/pre-image/shalwar.png';
import anarkali from '../../assets/pre-image/anarkali.png';
import lehnga from '../../assets/pre-image/lehnga.png';
import blouse from '../../assets/pre-image/blouse.png';
import saree from '../../assets/pre-image/saree.png';
import shararaa from '../../assets/pre-image/Shararaa.png';
import pajama from '../../assets/pre-image/pajama.png';

const categories = [
  { name: 'Kameez', image: kameez },
  { name: 'Shalwar', image: shalwar },
  { name: 'Anarkali', image: anarkali },
  { name: 'Lehnga', image: lehnga },
  { name: 'Blouse', image: blouse },
  { name: 'Saree', image: saree },
  { name: 'Shararaa', image: shararaa },
  { name: 'Pajama', image: pajama },
];

const PreDesigned = () => {
  const navigate = useNavigate();

  const handleCategoryClick = (category) => {
    navigate(`/bride/enhance/${category.toLowerCase()}`);
  };

  return (
    <div className="bg-[#FDF8F6] min-h-screen py-16 px-6">
      <h1 className="text-4xl font-bold text-center text-primary mb-12">Select Your Bridal Dress</h1>

      {/* Category Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-12">
        {categories.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-xl hover:scale-105 transition transform duration-300 cursor-pointer"
            onClick={() => handleCategoryClick(item.name)}
          >
            <img src={item.image} alt={item.name} className="w-24 h-24 mx-auto mb-4 transition duration-300 hover:scale-110" />
            <h3 className="text-xl font-semibold text-primary">{item.name}</h3>
          </div>
        ))}
      </div>

      {/* Customize Button */}
      <div className="text-center">
        <Link to="/bride/customize">
          <button className="bg-primary text-white px-6 py-3 text-lg rounded hover:bg-primary-dark transition">
            Customize Your Own
          </button>
        </Link>
      </div>
    </div>
  );
};

export default PreDesigned;
