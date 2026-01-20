"use client";

import { motion } from "framer-motion";
import {
  Leaf,
  Users,
  BarChart3,
  Globe,
  Target,
} from "lucide-react";

const values = [
  {
    title: "Sustainable Action",
    description:
      "We focus on practical habits that reduce environmental impact in daily life.",
    icon: Leaf,
  },
  {
    title: "Community First",
    description:
      "EcoTrack grows stronger when people learn, act, and inspire together.",
    icon: Users,
  },
  {
    title: "Measurable Impact",
    description:
      "We turn actions into real data using transparent environmental estimates.",
    icon: BarChart3,
  },
];

const About = () => {
  return (
    <section className="bg-base-100 py-20">
      <div className="max-w-6xl mx-auto px-4">
        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold text-[#297b33]">
            About EcoTrack
          </h1>
          <p className="mt-4 max-w-3xl mx-auto text-base-content">
            EcoTrack is a community-driven platform designed to help people adopt
            sustainable habits and understand their real environmental impact.
            We believe small actions, when multiplied by a community, can create
            meaningful change.
          </p>
        </motion.div>

        {/* Mission */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-12 items-center mb-20"
        >
          <div>
            <h2 className="text-3xl font-bold text-[#297b33] mb-4">
              Our Mission
            </h2>
            <p className="text-base-content mb-4">
              Our mission is to make sustainable living simple, engaging, and
              measurable. EcoTrack empowers individuals to take action through
              challenges, progress tracking, and community sharing.
            </p>
            <p className="text-base-content">
              By combining technology with community effort, we aim to create a
              positive environmental impact that anyone can be part of.
            </p>
          </div>

          <div className="bg-base-200 p-8 rounded-2xl shadow">
            <Target className="w-10 h-10 text-[#297b33]" />
            <p className="mt-4 text-lg font-medium">
              Small actions. Real impact. Stronger communities.
            </p>
          </div>
        </motion.div>

        {/* Values */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-center text-[#297b33] mb-10">
            What We Stand For
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.15 }}
                  viewport={{ once: true }}
                  className="card bg-base-200 shadow-md hover:shadow-lg transition"
                >
                  <div className="card-body text-center items-center">
                    <div className="w-16 h-16 rounded-full bg-[#297b33]/10 flex items-center justify-center mb-4">
                      <Icon className="w-8 h-8 text-[#297b33]" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">
                      {value.title}
                    </h3>
                    <p className="text-base-content">
                      {value.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Vision */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="bg-base-200 p-10 rounded-2xl text-center"
        >
          <Globe className="w-10 h-10 text-[#297b33] mx-auto mb-4" />
          <h2 className="text-2xl font-bold mb-3">
            Our Vision
          </h2>
          <p className="text-base-content max-w-3xl mx-auto">
            We envision a future where sustainable choices are part of everyday
            life, supported by technology, transparency, and a global community
            committed to protecting our planet.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
