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
                <h3 className="font-bold">Project 1: Social Network with Generative AI </h3>
                <p className="text-sm">I developed a social network application where users can create and share posts, with AI-generated images enhancing content creation. 
                  The platform includes powerful search features for quick post discovery and interaction. 
                  It ensures a secure, seamless experience through strong authentication and is built to scale with growing user activity without sacrificing performance.</p>
                  <p className="text-sm"> </p>
                  <div className="mt-2 flex gap-4">
                <p className="text-sm font-bold">Tech & Tools:</p>
                <p className="text-sm "> Go, React.JS, OpenAI API, ElasticSearch, JWT, Google cloud storage, Google App Engine.</p>
                </div>
                <div className="mt-2 flex gap-4">
                  <a href="https://www.youtube.com/watch?v=rgodCACGD14" className="text-blue-400">Demo</a>
                  <a href="https://github.com/ZiyanLi01/Around" className="text-blue-400">GitHub</a>
                </div>
              </div>

            {/* Project2 */}
            <div className="bg-slate-200 bg-opacity-50 p-4 rounded-lg text-slate">
                <h3 className="font-bold">Project 2: Mini Airbnb </h3>
                <p className="text-sm">I developed a web application that allows hosts to list and manage accommodations while enabling customers to search and reserve stays. 
                  The platform offers efficient data management for stay details and reservation history, along with enhanced user experience through location-based search. 
                  It ensures secure transactions and provides a responsive, engaging user interface, all while maintaining scalability and reliability to handle increasing demand.</p>
                  <p className="text-sm"> </p>
                  <div className="mt-2 flex gap-4">
                <p className="text-sm font-bold">Tech & Tools:</p>
                <p className="text-sm "> Java, Spring boot, Spring security, ElasticSearch, AWS, JavaScript, HTML, CSS</p>
                </div>
                <div className="mt-2 flex gap-4">
                  <a href="https://www.youtube.com/watch?v=J62yJdGXPXU" className="text-blue-400">Demo</a>
                  <a href="https://github.com/ZiyanLi01/StayBooking_Project" className="text-blue-400">GitHub</a>
                </div>
              </div>

            {/* Project1 */}
            <div className="bg-slate-200 bg-opacity-50 p-4 rounded-lg text-slate">
                <h3 className="font-bold">Project 3: Mini DoorDash</h3>
                <p className="text-sm">I developed a web application that offers users a smooth experience for registering, searching menus, placing orders, and completing checkouts. 
                  The system is scalable and efficiently manages menu data, ensuring seamless user interactions. 
                  The application supports easy cart additions and quick order placement, providing an intuitive and responsive user interface while maintaining reliable service delivery.</p>
                  <p className="text-sm"> </p>
                  <div className="mt-2 flex gap-4">
                <p className="text-sm font-bold">Tech & Tools:</p>
                <p className="text-sm "> Spring, Hibernate, PostgreSQL, ReactJS, Ant Design, AWS (RDS,ECR,App Runner).</p>
                </div>
                <div className="mt-2 flex gap-4">
                  <a href="https://youtu.be/VSWFGuATXcY" className="text-blue-400">Demo</a>
                  <a href="https://github.com/ZiyanLi01/Online-Order-Web" className="text-blue-400">GitHub</a>
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
