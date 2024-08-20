import React from 'react';

export default function Modal({ onClose }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70">
      <div className="relative w-full h-full md:w-3/4 md:h-3/4 bg-white rounded-lg overflow-auto">
        <img
          className="absolute inset-0 w-full h-full object-cover opacity-10"
          src="./background.png"
          alt="flower"
        />
        <div className="relative z-10 p-4 flex flex-col gap-4">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold text-white">Projects</h2>
            <button onClick={onClose} className="text-white text-2xl">✖</button>
          </div>
          
          <div className="flex flex-col gap-4">
            <div className="bg-gray-200 p-4 rounded-lg text-slate">
              <h3 className="font-bold">Project Title 1</h3>
              <p className="text-sm">Description for project 1...</p>
              <div className="mt-2 flex gap-4">
                <a href="#live" className="text-blue-400">Demo</a>
                <a href="#github" className="text-blue-400">GitHub</a>
              </div>
            </div>


            <div className="bg-gray-200 p-4 rounded-lg text-slate">
              <h3 className="font-bold">Project Title 2</h3>
              <p className="text-sm">Description for project 2...</p>
              <div className="mt-2 flex gap-4">
                <a href="#live" className="text-blue-400">Demo</a>
                <a href="#github" className="text-blue-400">GitHub</a>
              </div>
            </div>

            <div className="bg-gray-200 p-4 rounded-lg text-slate">
              <h3 className="font-bold">Project Title 3</h3>
              <p className="text-sm">Description for project 3...</p>
              <div className="mt-2 flex gap-4">
                <a href="#live" className="text-blue-400">Demo</a>
                <a href="#github" className="text-blue-400">GitHub</a>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}
