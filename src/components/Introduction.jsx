import React from 'react';

const Introduction = () => {
  return (
    <div className="bg-gray-500 py-10 px-8 text-white">
      <h1 className="text-4xl font-bold mb-4">
        Welcome to SplitterSong!
      </h1>
      <p className="text-lg mb-6">
        Split your audio effortlessly with our advanced spectrogram-based audio splitting algorithm.
      </p>
      <p className="text-lg">
        Our app analyzes the spectrogram of your audio and infers a mask to separate it into distinct parts.
      </p>
      <p className="text-lg mt-6">
        Try AudioSplitter today and unlock new possibilities for your audio editing projects!
      </p>
    </div>
  );
};

export default Introduction;