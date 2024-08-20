import React from 'react';

export default function AboutMe(props) {
  const { openModal } = props;

  return (
    <div className="flex flex-col md:grid md:grid-cols-2">
      <div className="flex flex-col gap-3 md">
        <div className="flex items-center">
          <h1 className="font-bold text-4xl sm:text-6xl">Ziyan Li(Ph.D)</h1>
          <img
            className="mx-auto md:hidden h-[200px] aspect-square rounded-full shadow-lg"
            src="https://avatars.githubusercontent.com/u/86816068?v=4"
            alt="me"
          />
        </div>

        <h2 className="font-medium text-slate-800 text-lg sm:text-2xl">
          Software Engineer | Machine Learning Engineer
        </h2>
        <p className="text-slate-500">
          A Ph.D. in Geophysics with expertise in machine learning, focused on developing deep learning models for real-time earthquake prediction during postdoctoral research.
        </p>
        <p className="text-slate-500">
          Passionate about making complex models accessible to non-experts, leading to a transition into full-stack development.
        </p>
        <p className="text-slate-500">
          1+ year of self-taught experience has resulted in several projects that integrate machine learning with user-friendly interfaces.
        </p>
        
      </div>
      <img
        className="mx-auto hidden md:flex h-[200px] aspect-square rounded-full shadow-lg"
        src="https://avatars.githubusercontent.com/u/86816068?v=4"
        alt="me"
      />
    </div>
  );
}
