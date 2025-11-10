import React from "react";
import useChallenges from "../Hooks/useChallenges";
import ActiveChallengesCard from "../Components/ActiveChallengesCard";
import Loading from "./Loading";

const Challenges = () => {
  const { challenges, loading, error } = useChallenges();

  if (loading) return <Loading/>;
  if (error) return <p>Error loading challenges.</p>;
  if (!challenges.length) return <p>No challenges found.</p>;

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold mb-6 text-[#297B33]">All Challenges</h2>
      <div className="grid gap-6 grid-cols-1 lg:grid-cols-2 px-6 md:px-12">
        {challenges.map((challenge) => (
          <ActiveChallengesCard key={challenge._id} challenge={challenge} />
        ))}
      </div> 
    </div>
  );
};

export default Challenges;
