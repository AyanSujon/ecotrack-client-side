import React from "react";
import ActiveChallengesCard from "../Components/ActiveChallengesCard";
import Loading from "./Loading";
import useChallenges from "../Hooks/useChallenges";


const Challenges = () => {
  const { challenges, loading, error } = useChallenges();
    // Sort challenges by _id (recent first)
  const sortedChallenges = [...challenges].sort(
    (a, b) => b._id.localeCompare(a._id) // newest first
  );

  if (loading) return <Loading/>;
  if (error) return <p>Error loading challenges.</p>;
  if (!sortedChallenges.length) return <p>No challenges found.</p>;

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h2 className="text-3xl text-center py-5 font-bold mb-6 text-[#297B33]">All Challenges</h2>
      <div className="grid gap-6 grid-cols-1 lg:grid-cols-2 px-6 md:px-12">
        {sortedChallenges.map((challenge) => (
          <ActiveChallengesCard key={challenge._id} challenge={challenge} />
        ))}
      </div> 
    </div>
  );
};

export default Challenges;



















































































import React from "react";
// import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaCalendarAlt, FaMapMarkerAlt, FaUser, FaUsers } from "react-icons/fa";
import { Link } from "react-router";

const EventsCard = ({ event }) => {

  const {
    _id,
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

//   const handleJoin = () => {
//     if (currentParticipants >= maxParticipants) {
//       toast.error("Event is full!");
//     } else {
//       toast.success("You have successfully joined the event!");
//     }
//   };

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
            <Link
            to={`/events/${_id}`}
            className="btn btn-sm text-white bg-[#297B33] hover:bg-[#82B532] border-none rounded-full transition-all"
          >
            View Event Details
          </Link>
          {/* <button
            onClick={handleJoin}
            disabled={currentParticipants >= maxParticipants}
            className={`btn btn-sm text-white transition-all border-none rounded-full ${
              currentParticipants >= maxParticipants
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-[#297B33] hover:bg-[#82B532]"
            }`}
          >
            {currentParticipants >= maxParticipants ? "Full" : "Join Event"}
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default EventsCard;
















































import React from 'react';
import useChallenges from '../Hooks/useChallenges';
import { Container } from 'lucide-react';
import ActiveChallengesCard from '../Components/ActiveChallengesCard';

const Challenges = () => {
    const { challenges, loading, error } = useChallenges();

    if (loading) return <p>Loading challenges...</p>;
    if (error) return <p>Error loading challenges.</p>;
    if (!challenges.length) return <p>No challenges found.</p>;
    // // Get today's date
    // const today = new Date();

    // // Filter active challenges
    // const activeChallenges = challenges.filter(challenge => {
    //     const start = new Date(challenge.startDate);
    //     const end = new Date(challenge.endDate);
    //     return today >= start && today <= end;
    // });




    return (
        <div>
            <Container>

                <div className="max-w-7xl mx-auto px-4 py-10">
                    <h2 className="text-3xl font-bold mb-6 text-[#297B33]">All Challenges</h2>
                    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {challenges.map((challenge) => (
                            <ActiveChallengesCard key={challenge._id} challenge={challenge} />
                        ))}
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Challenges;































































import React from "react";
import { useParams, Link } from "react-router";
import useChallenges from "../Hooks/useChallenges";
import Loading from "./Loading";
import Container from "../Layouts/Container";



const ViewChallenge = () => {
  const { id } = useParams();
  const { challenges, loading, error } = useChallenges();

  if (loading) return <Loading/>;
  if (error) return <p className="text-center mt-10 text-red-500">Error: {error.message}</p>;

  const challenge = challenges.find((c) => c._id === id); // find by ID
  if (!challenge) return <p className="text-center mt-10">Challenge not found.</p>;

  return (

    <Container>
            <div className=" flex flex-col md:flex-row bg-white rounded-2xl shadow-md overflow-hidden transform w-full mx-auto border border-gray-100 my-10">
      
      {/* Left Side: Image */}
      <div className="md:w-1/2 w-full">
        <img
          src={challenge.imageUrl}
          alt={challenge.title}
          className="w-full h-64 md:h-full object-cover"
        />
      </div>

      {/* Right Side: Text Content */}
      <div className="md:w-1/2 w-full p-6 flex flex-col justify-between bg-gray-50">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">{challenge.title}</h2>

        <div className="text-start space-y-2 text-gray-700 text-sm">
          <p><span className="font-medium text-gray-900">Category:</span> {challenge.category}</p>
          <p><span className="font-medium text-gray-900">Duration:</span> {challenge.duration} days</p>
          <p><span className="font-medium text-gray-900">Participants:</span> {challenge.participants}</p>
          <p><span className="font-medium text-gray-900">Created By:</span> {challenge.createdBy}</p>
          <p><span className="font-medium text-gray-900">Start Date:</span> {challenge.startDate}</p>
          <p><span className="font-medium text-gray-900">End Date:</span> {challenge.endDate}</p>
          <p><span className="font-medium text-gray-900">Target:</span> {challenge.target}</p>
          <p><span className="font-medium text-gray-900">Impact Metric:</span> {challenge.impactMetric}</p>
          <p><span className="font-medium text-gray-900">Description:</span> {challenge.description}</p>
        </div>

        <button
          
          className="mt-6 text-center bg-[#297B33] hover:bg-[#82B532] text-white py-2 rounded-xl transition-colors duration-300 w-full font-medium"
        >
          Join Challenges
        </button>
      </div>
    </div>
    </Container>
  );
};

export default ViewChallenge;
