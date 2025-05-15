import React, { useState } from "react";

const CustomizeYourOwn = () => {
  const [selectedSilhouette, setSelectedSilhouette] = useState("flared");
  const [selectedColor, setSelectedColor] = useState(null);
  const [embellishments, setEmbellishments] = useState({
    border: null,
    neck: null,
    sleeves: null,
  });
  const [embellishmentColor, setEmbellishmentColor] = useState("gold");

  const silhouetteOptions = ["flared", "straight", "short", "layered"];
  const embellishmentOptions = {
    border: ["border1.png", "border2.png"],
    neck: ["neck1.png"],
    sleeves: ["sleeve1.png"],
  };
  const colorOptions = [
    "#ffffff", "#f8d7da", "#c3e6cb", "#d1ecf1", "#fff3cd", "#e2e3e5",
    "#f5c6cb", "#bee5eb", "#ffeeba", "#d6d8db", "#FFD700", "#C0C0C0",
    "#B87333", "#000000"
  ];
  const embellishmentColors = ["gold", "silver", "copper", "black", "white"];

  const handleColorClick = (color) => {
    setSelectedColor(prev => prev === color ? null : color);
  };

  const handleEmbellishmentClick = (type, image) => {
    setEmbellishments(prev => ({
      ...prev,
      [type]: prev[type] === image ? null : image
    }));
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4 flex flex-col md:flex-row gap-4">
      {/* Left Panel */}
      <div className="w-full md:w-1/3 bg-white rounded-xl shadow-lg p-4 space-y-6 overflow-y-auto">
        {/* Silhouette */}
        <div>
          <h2 className="text-xl font-semibold mb-2">Select Silhouette</h2>
          <div className="flex flex-wrap gap-2">
            {silhouetteOptions.map((option) => (
              <button
                key={option}
                className={`border px-3 py-1 rounded-lg text-sm ${
                  selectedSilhouette === option ? "bg-blue-500 text-white" : ""
                }`}
                onClick={() => setSelectedSilhouette(option)}
              >
                {option}
              </button>
            ))}
          </div>
        </div>

        {/* Dress Color */}
        <div>
          <h2 className="text-xl font-semibold mb-2">Select Dress Color</h2>
          <div className="grid grid-cols-5 gap-2">
            {colorOptions.map((color) => (
              <div
                key={color}
                className={`w-8 h-8 rounded-full cursor-pointer border-2 ${
                  selectedColor === color ? "border-black" : "border-gray-300"
                }`}
                style={{ backgroundColor: color }}
                onClick={() => handleColorClick(color)}
              ></div>
            ))}
          </div>
        </div>

        {/* Embellishments */}
        {Object.keys(embellishmentOptions).map((type) => (
          <div key={type}>
            <h2 className="text-xl font-semibold capitalize mb-2">{type}</h2>
            <div className="flex gap-2 overflow-x-auto">
              {embellishmentOptions[type].map((img) => (
                <img
                  key={img}
                  src={`/images/embellishments/${img}`}
                  alt={type}
                  onClick={() => handleEmbellishmentClick(type, img)}
                  className={`w-16 h-16 object-contain cursor-pointer border-2 rounded-md ${
                    embellishments[type] === img
                      ? "border-blue-500"
                      : "border-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>
        ))}

        {/* Embellishment Color */}
        <div>
          <h2 className="text-xl font-semibold mb-2">Embellishment Color</h2>
          <div className="flex gap-2">
            {embellishmentColors.map((color) => (
              <div
                key={color}
                className={`w-8 h-8 rounded-full cursor-pointer border-2 ${
                  embellishmentColor === color
                    ? "border-black"
                    : "border-gray-300"
                }`}
                style={{ backgroundColor: color }}
                onClick={() => setEmbellishmentColor(color)}
              ></div>
            ))}
          </div>
        </div>
      </div>

      {/* Right Preview Panel */}
      <div className="w-full md:w-2/3 bg-white rounded-xl shadow-lg flex items-center justify-center relative">
        <div className="relative w-[300px] h-[600px]">

          {/* Colored silhouette background */}
          {selectedSilhouette && selectedColor && (
            <div
              className="absolute w-full h-full z-10"
              style={{
                backgroundColor: selectedColor,
                WebkitMaskImage: `url(/images/silhouettes/${selectedSilhouette}.png)`,
                WebkitMaskRepeat: "no-repeat",
                WebkitMaskSize: "contain",
                WebkitMaskPosition: "center",
                maskImage: `url(/images/silhouettes/${selectedSilhouette}.png)`,
                maskRepeat: "no-repeat",
                maskSize: "contain",
                maskPosition: "center",
              }}
            />
          )}

          {/* Original silhouette image */}
          {selectedSilhouette && !selectedColor && (
  <img
    src={`/images/silhouettes/${selectedSilhouette}.png`}
    alt="Dress"
    className="absolute w-full h-full object-contain z-20"
  />
)}
          {/* Colored embellishments */}
          {Object.entries(embellishments).map(([type, img]) =>
            img ? (
              <div
                key={type}
                className="absolute w-full h-full z-30"
                style={{
                  backgroundColor: embellishmentColor,
                  WebkitMaskImage: `url(/images/embellishments/${img})`,
                  WebkitMaskRepeat: "no-repeat",
                  WebkitMaskSize: "contain",
                  WebkitMaskPosition: "center",
                  maskImage: `url(/images/embellishments/${img})`,
                  maskRepeat: "no-repeat",
                  maskSize: "contain",
                  maskPosition: "center",
                }}
              />
            ) : null
          )}
        </div>
      </div>
    </div>
  );
};

export default CustomizeYourOwn;
