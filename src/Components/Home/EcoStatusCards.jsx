import React, { useEffect, useState } from "react";
import { FaLeaf, FaUsers, FaCloud } from "react-icons/fa";
import Container from "../../Layouts/Container";

const EcoStatusCards = () => {
    const [stats, setStats] = useState({
        activeChallenges: 0,
        totalParticipants: 0,
        co2Saved: 0,
    });

    useEffect(() => {
        const userChallenges = [
            { status: "Finished", progress: 100 },
            { status: "Ongoing", progress: 60 },
            { status: "Not Started", progress: 0 },
        ];

        const events = [
            { title: "Community Clean-up Day", currentParticipants: 35 },
            { title: "Tree Planting Event", currentParticipants: 20 },
        ];

        const challenges = [
            {
                title: "Plastic-Free July",
                startDate: "2025-07-01",
                endDate: "2025-07-31",
            },
            {
                title: "Save Water Week",
                startDate: "2025-11-01",
                endDate: "2025-11-15",
            },
        ];

        // 🧮 Calculate Stats
        const today = new Date();
        const activeChallenges = challenges.filter(
            (ch) =>
                new Date(ch.startDate) <= today && new Date(ch.endDate) >= today
        ).length;

        const totalParticipants = events.reduce(
            (sum, ev) => sum + (ev.currentParticipants || 0),
            0
        );

        // Example logic: each finished challenge saves 5 kg CO₂
        const co2Saved = userChallenges.filter((c) => c.status === "Finished").length * 5;

        setStats({ activeChallenges, totalParticipants, co2Saved });
    }, []);

    return (
        <div className="py-20">
            <Container>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Card 1 */}
                    <div className="p-6 bg-white rounded-2xl shadow text-center border border-gray-100">
                        <div className="flex justify-center text-green-500 text-3xl mb-2">
                            <FaLeaf />
                        </div>
                        <h2 className="text-3xl font-bold">{stats.activeChallenges}</h2>
                        <p className="text-gray-500 mt-1">Active Challenges</p>
                    </div>

                    {/* Card 2 */}
                    <div className="p-6 bg-white rounded-2xl shadow text-center border border-gray-100">
                        <div className="flex justify-center text-green-500 text-3xl mb-2">
                            <FaUsers />
                        </div>
                        <h2 className="text-3xl font-bold">{stats.totalParticipants}</h2>
                        <p className="text-gray-500 mt-1">Total Participants</p>
                    </div>

                    {/* Card 3 */}
                    <div className="p-6 bg-white rounded-2xl shadow text-center border border-gray-100">
                        <div className="flex justify-center text-green-500 text-3xl mb-2">
                            <FaCloud />
                        </div>
                        <h2 className="text-3xl font-bold">{stats.co2Saved} kg</h2>
                        <p className="text-gray-500 mt-1">CO₂ Saved</p>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default EcoStatusCards;
