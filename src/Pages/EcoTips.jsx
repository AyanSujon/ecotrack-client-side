import React from 'react';
import { Link } from 'react-router';
import useEcoTips from '../Hooks/useEcoTips';
import EcoTipCard from '../Components/EcoTipCard';


const EcoTips = () => {
    const {EcoTips} = useEcoTips();

      // Sort tips by createdAt (newest first)
//   const recentTips = [...EcoTips].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)).slice(0, 6);


    return (
        <div>
            <div>
            <section className="py-12 bg-gray-50 text-center">
                {/* Heading + Subheading */}
                <div className="mb-10">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#297B33]">
                        All EcoTips
                    </h2>
                    <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
                        Stay Inspired with the Latest Eco-Friendly Tips
                    </p>
                </div>

                {/* Challenge Cards */}
                <div className="grid  justify-center gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-6 md:px-12">
                    {EcoTips.map((tip) => (
                        <EcoTipCard key={tip._id} tip={tip} />
                    ))}
                </div>
            </section>
        </div>
        </div>
    );
};

export default EcoTips;