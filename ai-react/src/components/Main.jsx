import React, { useState } from 'react';
import AboutMe from './AboutMe';
import Experience from './Experience';
import Skills from './Skills';
import Modal from './Modal';

export default function Main() {
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState('');

  function onCloseHandler() {
    setShowModal(false);
  }

  function openModal(contentType) {
    setModalContent(contentType);
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
          {showModal && (
            <Modal contentType={modalContent} onClose={onCloseHandler} />
          )}
          <AboutMe openModal={() => openModal('projects')} />
          <div className="my-10 flex items-center gap-4 text-sm sm:text-medium">
            <button
              onClick={() => openModal('projects')}
              className="rounded-full bg-gradient-to-r from-blue-600 to-violet-500 text-white px-4 py-2 hover:opacity-50"
            >
              Projects
            </button>
            <button
              onClick={() => openModal('papers')}
              className="rounded-full text-purple-800 border border-solid border-violet-800 px-4 py-2"
            >
              Papers
            </button>
          </div>
          <Experience />
        </div>
      </div>
      <div className="w-full md:w-1/4 p-4">
        <Skills />
      </div>
    </div>
  );
}
