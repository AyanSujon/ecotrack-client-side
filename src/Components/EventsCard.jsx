import React from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaCalendarAlt, FaMapMarkerAlt, FaUser, FaUsers } from "react-icons/fa";

const EventsCard = ({ event }) => {
  const {
    title,
    description,
    date,
    location,
    organizer,
    maxParticipants,
    currentParticipants,
  } = event;

  const formattedDate = new Date(date).toLocaleString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });

  const handleJoin = () => {
    if (currentParticipants >= maxParticipants) {
      toast.error("Event is full!");
    } else {
      toast.success("You have successfully joined the event!");
    }
  };

  return (
    <div className="card w-full max-w-md bg-white border border-gray-200 shadow-md hover:shadow-xl hover:scale-[1.02] transition-all duration-300 rounded-2xl">
      <div className="card-body p-6">
        <h2
          className="card-title text-xl font-semibold"
          style={{ color: "#297B33" }}
        >
          {title}
        </h2>
        <p className="text-gray-600">{description}</p>

        <div className="mt-3 space-y-2 text-sm text-gray-700">
          <p className="flex items-center gap-2">
            <FaCalendarAlt className="text-[#297B33]" /> {formattedDate}
          </p>
          <p className="flex items-center gap-2">
            <FaMapMarkerAlt className="text-[#297B33]" /> {location}
          </p>
          <p className="flex items-center gap-2">
            <FaUser className="text-[#297B33]" /> {organizer}
          </p>
          <p className="flex items-center gap-2">
            <FaUsers className="text-[#297B33]" /> {currentParticipants} /{" "}
            {maxParticipants} participants
          </p>
        </div>

        <div className="card-actions justify-end mt-5">
          <button
            onClick={handleJoin}
            disabled={currentParticipants >= maxParticipants}
            className={`btn btn-sm text-white transition-all border-none rounded-full ${
              currentParticipants >= maxParticipants
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-[#297B33] hover:bg-[#82B532]"
            }`}
          >
            {currentParticipants >= maxParticipants ? "Full" : "Join Event"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventsCard;
