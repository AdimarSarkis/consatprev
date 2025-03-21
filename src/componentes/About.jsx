"use client";
import React, { useState } from "react";
import {
  FaGraduationCap,
  FaBriefcase,
  FaAward,
  FaLightbulb,
  FaRocket,
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const timelineData = [
  {
    id: 1,
    date: "1997",
    title: "Criação da empresa",
    icon: FaGraduationCap,
    color: "bg-blue-500",
    details:
      "I graduated from the University of Toronto with a degree in Computer Science.",
  },
  {
    id: 2,
    date: "2019",
    title: "First Job",
    icon: FaBriefcase,
    color: "bg-green-500",
    details:
      "I started my first job as a software developer at a local startup.",
  },
  {
    id: 3,
    date: "2020",
    title: "Industry Award",
    icon: FaAward,
    color: "bg-yellow-500",
    details: "I won an industry award for my work on a new product.",
  },
  {
    id: 4,
    date: "2020",
    title: "Volta da atividade",
    icon: FaLightbulb,
    color: "bg-purple-500",
    details: "I co-founded",
  },
];

const Timeline = () => {
  const [selectedMilestone, setSelectedMilestone] = useState(null);

  const handleMilestoneClick = (milestone) => {
    setSelectedMilestone(milestone);
  };

  const closeModal = () => {
    setSelectedMilestone(null);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Nossa Historia</h1>
      <div className="relative wrap overflow-hidden p-10 max-sm:px-5 h-full">
        <div className="border-2-2 absolute border-opacity-20 border-gray-700 h-full border left-1/2 transform -translate-x-1/2 lg:left-1/2 lg:translate-x-0"></div>
        {timelineData.map((milestone, index) => (
          <div
            key={milestone.id}
            className={`mb-8 flex justify-between items-center max-sm:w-full ${
              index % 2 === 0 ? "lg:flex-row-reverse" : "lg:flex-row"
            } flex-col sm:items-center`}
          >
            <div className="order-1 lg:w-full"></div>
            <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full min-w-fit p-2">
              <h1 className="mx-auto font-semibold text-lg text-white">
                {milestone.date}
              </h1>
            </div>

            <button
              onClick={() => handleMilestoneClick(milestone)}
              className={`order-1 w-full sm:w-full lg:w-full px-6 py-4 rounded-lg shadow-xl ${
                milestone.color
              } text-white cursor-pointer transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-${
                milestone.color.split("-")[1]
              }-400`}
            >
              <h3 className="mb-3 font-bold text-xl">{milestone.title}</h3>
              <milestone.icon className="text-4xl mb-3 inline-block" />
              <p className="text-sm leading-snug tracking-wide text-opacity-100">
                Clique aqui para mais detalhes
              </p>
            </button>
          </div>
        ))}
      </div>

      <AnimatePresence>
        {selectedMilestone && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <motion.div
              className="bg-white rounded-lg shadow-lg p-8 max-w-lg w-full"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="text-center">
                <selectedMilestone.icon
                  className={`mx-auto text-6xl ${selectedMilestone.color.replace(
                    "bg-",
                    "text-"
                  )}`}
                />
                <h3 className="text-lg leading-6 font-medium text-gray-900 mt-4">
                  {selectedMilestone.title}
                </h3>
                <div className="mt-2 px-7 py-3">
                  <p className="text-sm text-gray-500">
                    {selectedMilestone.details}
                  </p>
                </div>
                <div className="items-center px-4 py-3">
                  <button
                    id="closeModal"
                    onClick={closeModal}
                    className="px-4 py-2 bg-gray-800 hover:cursor-pointer hover:scale-105 text-white text-base font-medium rounded-md w-full shadow-sm hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500"
                  >
                    Fechar
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Timeline;
