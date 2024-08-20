import React from 'react';

export default function Modal({ contentType, onClose }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
      <div className="relative w-full h-full md:w-3/4 md:h-3/4 bg-white rounded-lg overflow-auto">
        <img
          className="absolute inset-0 w-full h-full object-cover opacity-10"
          src="./background.png"
          alt="flower"
        />
        <div className="relative z-10 p-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-white">
              {contentType === 'projects' ? 'Projects' : 'Published Papers'}
            </h2>
            <button onClick={onClose} className="text-white text-2xl">✖</button>
          </div>

          {contentType === 'projects' && (
            <div className="flex flex-col gap-4">
              <div className="bg-purple-600 bg-opacity-50 p-4 rounded-lg text-white">
                <h3 className="font-bold">Project Title 1</h3>
                <p className="text-sm">Description for project 1...</p>
                <div className="mt-2 flex gap-4">
                  <a href="#live" className="text-blue-400">Live</a>
                  <a href="#github" className="text-blue-400">GitHub</a>
                </div>
              </div>
              {/* Add more projects here */}
            </div>
          )}

          {contentType === 'papers' && (
            <div className="flex flex-col gap-8">
              {/* Machine Learning Section */}
              <div>
                <h3 className="text-xl font-bold text-white mb-4">Machine Learning Related</h3>
                <ul className="list-disc pl-5 space-y-2 text-white">
                  <li>Author(s), "Title of the Paper," Journal Name, Year.</li>
                  <li>Author(s), "Title of the Paper," Journal Name, Year.</li>
                  {/* Add more references as needed */}
                </ul>
              </div>

              {/* Geophysics Section */}
              <div>
                <h3 className="text-xl font-bold text-white mb-4">Geophysics Related</h3>
                <ul className="list-disc pl-5 space-y-2 text-white">
                  <li>Author(s), "Title of the Paper," Journal Name, Year.</li>
                  <li>Author(s), "Title of the Paper," Journal Name, Year.</li>
                  {/* Add more references as needed */}
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
