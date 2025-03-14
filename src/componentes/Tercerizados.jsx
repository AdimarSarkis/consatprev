'use client'
import { useState, useEffect } from "react";
import { FaLinkedin, FaGithub, FaTwitter, FaShare } from "react-icons/fa";
import { MdError } from "react-icons/md";

const UserProfileCard = () => {
  const [imageError, setImageError] = useState(false);
  const [showQR, setShowQR] = useState(false);

  const userData = {
    name: "Sarah Anderson",
    designation: "Senior Frontend Developer",
    bio: "Passionate about creating beautiful user interfaces and solving complex problems through clean, efficient code. Advocate for web accessibility and performance optimization.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    skills: ["React", "TypeScript", "Tailwind CSS", "Node.js"],
    social: {
      linkedin: "https://linkedin.com/in/sarahanderson",
      github: "https://github.com/sarahanderson",
      twitter: "https://twitter.com/sarahanderson"
    }
  };

  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
        <div className="p-8">
          <div className="relative w-32 h-32 mx-auto mb-6">
            {imageError ? (
              <div className="w-full h-full rounded-full bg-gray-200 flex items-center justify-center">
                <MdError className="text-gray-400 text-4xl" />
              </div>
            ) : (
              <img
                src={userData.avatar}
                alt={userData.name}
                className="w-full h-full object-cover rounded-full ring-4 ring-gray-100"
                onError={handleImageError}
                loading="lazy"
              />
            )}
          </div>

          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              {userData.name}
            </h2>
            <p className="text-gray-600 mb-4">{userData.designation}</p>
            <p className="text-gray-500 text-sm mb-6 line-clamp-3">
              {userData.bio}
            </p>

            <div className="flex flex-wrap gap-2 justify-center mb-6">
              {userData.skills.map((skill, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>

            <div className="flex justify-center space-x-4 mb-6">
              <a
                href={userData.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-blue-50 rounded-full text-blue-500 hover:bg-blue-100 transition-colors duration-200"
                aria-label="LinkedIn Profile"
              >
                <FaLinkedin className="text-xl" />
              </a>
              <a
                href={userData.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-50 rounded-full text-gray-700 hover:bg-gray-100 transition-colors duration-200"
                aria-label="GitHub Profile"
              >
                <FaGithub className="text-xl" />
              </a>
              <a
                href={userData.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-blue-50 rounded-full text-blue-400 hover:bg-blue-100 transition-colors duration-200"
                aria-label="Twitter Profile"
              >
                <FaTwitter className="text-xl" />
              </a>
            </div>

            <button
              onClick={() => setShowQR(!showQR)}
              className="w-full py-2 px-4 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors duration-200 flex items-center justify-center gap-2"
            >
              <FaShare className="text-sm" />
              Share Profile
            </button>
          </div>
        </div>

        {showQR && (
          <div className="p-4 bg-gray-50 border-t border-gray-100">
            <div className="aspect-square w-32 mx-auto bg-white p-2 rounded-lg">
              <img
                src="https://images.unsplash.com/photo-1572555349878-5aa239fecb3c"
                alt="Profile QR Code"
                className="w-full h-full object-contain"
                loading="lazy"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserProfileCard;