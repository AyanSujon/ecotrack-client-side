"use client";

import { motion } from "framer-motion";
import {
  Leaf,
  Droplets,
  Zap,
  Recycle,
  TrendingUp,
  Globe,
} from "lucide-react";

const stats = [
  {
    title: "CO₂ Reduced",
    value: "124 kg",
    description: "Estimated reduction from eco-friendly habits",
    icon: Globe,
  },
  {
    title: "Plastic Avoided",
    value: "8.6 kg",
    description: "Single-use plastic kept out of landfills",
    icon: Recycle,
  },
  {
    title: "Water Saved",
    value: "1,240 L",
    description: "Water conserved through mindful usage",
    icon: Droplets,
  },
  {
    title: "Energy Saved",
    value: "312 kWh",
    description: "Electricity saved from reduced consumption",
    icon: Zap,
  },
];

const activities = [
  {
    action: "Used reusable water bottle",
    impact: "0.2 kg plastic avoided",
    date: "Jan 14, 2025",
  },
  {
    action: "Biked instead of driving",
    impact: "2.4 kg CO₂ reduced",
    date: "Jan 12, 2025",
  },
  {
    action: "Turned off unused appliances",
    impact: "4.1 kWh energy saved",
    date: "Jan 10, 2025",
  },
];

const ImpactTracker = () => {
  return (
    <section className="bg-base-100 py-16">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-[#297b33]">
            Impact Tracker
          </h1>
          <p className="mt-3 text-base-content max-w-2xl">
            Track your personal environmental impact based on the actions you
            take. Every habit counts toward a healthier planet.
          </p>
        </motion.div>

        {/* Stats Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15 }}
                viewport={{ once: true }}
                className="card bg-base-200 shadow-md hover:shadow-lg transition"
              >
                <div className="card-body">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold">{stat.title}</h3>
                    <Icon className="w-6 h-6 text-[#297b33]" />
                  </div>
                  <p className="text-3xl font-bold mt-4 text-[#297b33]">
                    {stat.value}
                  </p>
                  <p className="text-sm text-base-content mt-1">
                    {stat.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Progress Summary */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 bg-base-200 p-8 rounded-2xl"
        >
          <div className="flex items-center gap-3 mb-4">
            <TrendingUp className="text-[#297b33]" />
            <h2 className="text-2xl font-bold">Your Progress Summary</h2>
          </div>
          <p className="text-base-content max-w-3xl">
            Your impact is calculated using standard environmental conversion
            estimates. As you log more actions and complete challenges, these
            numbers will continue to grow.
          </p>
        </motion.div>

        {/* Activity Log */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <h2 className="text-2xl font-bold mb-6">
            Recent Activity
          </h2>

          <div className="overflow-x-auto bg-base-200 rounded-xl">
            <table className="table">
              <thead>
                <tr>
                  <th>Action</th>
                  <th>Impact</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody>
                {activities.map((item, index) => (
                  <tr key={index}>
                    <td>{item.action}</td>
                    <td className="text-[#297b33] font-medium">
                      {item.impact}
                    </td>
                    <td>{item.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ImpactTracker;
