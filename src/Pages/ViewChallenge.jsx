import React, { useState } from "react";
import { useParams } from "react-router";
import useChallenges from "../Hooks/useChallenges";
import Loading from "./Loading";
import Container from "../Layouts/Container";
import { toast } from "react-toastify";

const ViewChallenge = () => {
  const { id } = useParams();
  const { challenges, loading, error } = useChallenges();
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Create dynamic full date-time string
  const getCurrentDateTime = () => {
    const now = new Date();
    return now.toLocaleString("en-GB", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });
  };

  const [formData, setFormData] = useState({
    participantName: "",
    participantEmail: "",
    imageUrl: "",
    location: "",
    joinDate: getCurrentDateTime(),
    notes: "",
  });

  if (loading) return <Loading />;
  if (error) return <p className="text-center mt-10 text-red-500">Error: {error.message}</p>;

  const challenge = challenges.find((c) => c._id === id);
  if (!challenge) return <p className="text-center mt-10">Challenge not found.</p>;

  // handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

 // handleSubmit function 
const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const participantRes = await fetch("http://localhost:3000/api/participants", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...formData, challengeId: challenge._id }),
    });

    if (participantRes.status === 400) {
      const data = await participantRes.json();
      toast.error(data.message || "You already joined this challenge!");
      return;
    }

    if (participantRes.ok) {
      toast.success("Successfully joined the challenge!");
      setIsModalOpen(false);
      setFormData({
        participantName: "",
        participantEmail: "",
        imageUrl: "",
        location: "",
        joinDate: getCurrentDateTime(),
        notes: "",
      });
    } else {
      toast.error("Failed to join. Please try again.");
    }
  } catch (error) {
    console.error("Error submitting form:", error);
    toast.error("Something went wrong.");
  }
};

  return (
    <Container>
      {/* Challenge Card */}
      <div className="flex flex-col md:flex-row bg-white rounded-2xl shadow-md overflow-hidden transform w-full mx-auto border border-gray-100 my-10">
        {/* Left: Image */}
        <div className="md:w-1/2 w-full">
          <img
            src={challenge.imageUrl}
            alt={challenge.title}
            className="w-full h-64 md:h-full object-cover"
          />
        </div>

        {/* Right: Info */}
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
            onClick={() => setIsModalOpen(true)}
            className="mt-6 text-center bg-[#297B33] hover:bg-[#82B532] text-white py-2 rounded-xl transition-colors duration-300 w-full font-medium"
          >
            Join Challenge
          </button>
        </div>
      </div>

      {/* Join Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center z-50">
          <div className="bg-white rounded-2xl w-11/12 md:w-2/5 p-6 shadow-xl relative overflow-y-auto">
            {/* Close Button */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 text-xl"
            >
              ✕
            </button>

            <h3 className="text-xl font-semibold text-gray-800 mb-5 text-center">
              Join {challenge.title}
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Row 1 */}
              <div className="flex gap-3">
                <div className="w-1/2">
                  <label className="block text-gray-700 text-sm mb-1">Participant Name</label>
                  <input
                    type="text"
                    name="participantName"
                    value={formData.participantName}
                    onChange={handleChange}
                    required
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring focus:ring-green-200"
                  />
                </div>

                <div className="w-1/2">
                  <label className="block text-gray-700 text-sm mb-1">Email</label>
                  <input
                    type="email"
                    name="participantEmail"
                    value={formData.participantEmail}
                    onChange={handleChange}
                    required
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring focus:ring-green-200"
                  />
                </div>
              </div>

              {/* Row 2 */}
              <div className="flex gap-3">
                <div className="w-1/2">
                  <label className="block text-gray-700 text-sm mb-1">Location</label>
                  <input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    required
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring focus:ring-green-200"
                  />
                </div>

                <div className="w-1/2">
                  <label className="block text-gray-700 text-sm mb-1">Join Date</label>
                  <input
                    type="text"
                    name="joinDate"
                    value={formData.joinDate}
                    readOnly
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 bg-gray-100"
                  />
                </div>
              </div>

              {/* Row 3 */}
              <div>
                <label className="block text-gray-700 text-sm mb-1">Image URL</label>
                <input
                  type="url"
                  name="imageUrl"
                  value={formData.imageUrl}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring focus:ring-green-200"
                />
              </div>

              {/* Row 4 */}
              <div>
                <label className="block text-gray-700 text-sm mb-1">Description / Notes</label>
                <textarea
                  name="notes"
                  value={formData.notes}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring focus:ring-green-200"
                  rows="3"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-[#297B33] hover:bg-[#82B532] text-white py-2 rounded-xl font-medium transition-all"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </Container>
  );
};

export default ViewChallenge;
