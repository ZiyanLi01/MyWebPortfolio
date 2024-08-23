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
            <h2 className="text-2xl font-bold text-slate">
              {contentType === 'projects' ? 'Projects' : 'Published Papers'}
            </h2>
            <button onClick={onClose} className="text-white text-2xl">✖</button>
          </div>

          {contentType === 'projects' && (
            <div className="flex flex-col gap-4">
            {/* Project1 */}
              <div className="bg-slate-200 bg-opacity-50 p-4 rounded-lg text-slate">
                <h3 className="font-bold">Project Title 1</h3>
                <p className="text-sm">Description for project 1...</p>
                <div className="mt-2 flex gap-4">
                  <a href="#live" className="text-blue-400">Demo</a>
                  <a href="#github" className="text-blue-400">GitHub</a>
                </div>
              </div>

              {/* Project2 */}
              <div className="bg-slate-200 bg-opacity-50 p-4 rounded-lg text-slate">
                <h3 className="font-bold">Project Title 1</h3>
                <p className="text-sm">Description for project 1...</p>
                <div className="mt-2 flex gap-4">
                  <a href="#live" className="text-blue-400">Demo</a>
                  <a href="#github" className="text-blue-400">GitHub</a>
                </div>
              </div>

              {/* Project3 */}
              <div className="bg-slate-200 bg-opacity-50 p-4 rounded-lg text-slate">
                <h3 className="font-bold">Project Title 1</h3>
                <p className="text-sm">Description for project 1...</p>
                <div className="mt-2 flex gap-4">
                  <a href="#live" className="text-blue-400">Demo</a>
                  <a href="#github" className="text-blue-400">GitHub</a>
                </div>
              </div>
              {/* Add more projects if you need here */}

            </div>
          )}

          {contentType === 'papers' && (
            <div className="flex flex-col gap-8">
              {/* Machine Learning & Statistics Models */}
              <div>
                <h3 className="text-xl font-bold text-black mb-4">Machine Learning & Statistics Models </h3>
                <ul className="list-disc pl-5 space-y-2 text-black">
                  <li>Li, Z*., Eaton, D. W., & Davidsen, J. (2023). Physics-informed deep learning to forecast Mmax during hydraulic fracturing. Scientific Reports, 13(1), 13133.</li>
                  <li>Li, Z*., Eaton, D., & Davidsen, J. (2022). Short-term forecasting of Mmax during hydraulic fracturing. Scientific Reports, 12(1), 1-12.</li>
                  <li>Li, Z*., Elsworth, D., & Wang, C. (2022). Induced microearthquakes predict permeability creation in the brittle crust. Frontier in Earth science, DOI: 10.3389/feart.2022.1020294.</li>
                  {/* Add more references as needed */}
                </ul>
              </div>

              {/* Geophysics & Petrolem Engineering*/}
              <div>
                <h3 className="text-xl font-bold text-black mb-4">Geophysics & Petrolem Engineering</h3>
                <ul className="list-disc pl-5 space-y-2 text-black">
                  <li>Li, Z*., Elsworth, D. & Wang, C (2022), Effect of pore pressure magnitude on the frictional properties and permeability evolution of fractures in schist. Journal of Geomechanics and Geophysics for Geo-energy and Geo-resources. 8, 214. https://doi.org/10.1007/s40948-022-00504-0</li>
                  <li>Li, Z*., Elsworth, D., & Wang, C. (2021). Constraining maximum event magnitude during injection-triggered seismicity. Nature communications, 12(1), 1-9.</li>
                  <li>Li, Z*., D. Elsworth et al. (2019) A new apparatus for the concurrent measurement of friction and permeability evolution in fault gouge, International Journal of Rock Mechanics and Mining Sciences, https://doi.org/10.1016/j.ijrmms.2019.06.005</li>
                  <li>Li, Z*., D. Elsworth. (2019), Controls of CO2-N2 gas flood ratios on enhanced shale gas recovery and ultimate CO2 sequestration, Journal Petroleum Science and Engineering, https://doi.org/10.1016/j.petrol.2019.04.098</li>
                  
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
