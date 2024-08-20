import React from 'react';
import AboutMe from './AboutMe';
import Experience from './Experience';
import Skills from './Skills';
import { useState } from 'react';
import Modal from './Modal';

export default function Main() {
  const [showModal, setShowModal] = useState(false);

  function onCloseHandler() {
    setShowModal(false);
  }

  function openModal() {
    setShowModal(true);
  }

  return (
    <div className="flex flex-col md:flex-row h-full">
      <div className="relative w-full md:w-3/4">
        <img
          className="absolute inset-0 z-0 w-full h-full object-cover opacity-10"
          src="./background.png"
          alt="flower"
        />
        <div className="relative z-10 p-4 flex flex-col gap-4">
          {showModal && <Modal onClose={onCloseHandler} />}
          <AboutMe openModal={openModal} />
          <Experience />
          {/* Adjusting the bottom margin */}
          <div className="mt-auto mb-[2rem]"></div>
        </div>
      </div>
      <div className="w-full md:w-1/4 p-4">
        <Skills />
      </div>
    </div>
  );
}
