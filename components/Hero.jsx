"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white">

      <div className="max-w-7xl mx-auto px-6 pt-32 pb-24 grid md:grid-cols-2 gap-10 items-center">

        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Build Your Digital <br /> Future With Us
          </h1>

          <p className="mt-6 text-lg text-gray-200">
            We are a creative digital agency that designs and builds 
            beautiful websites, apps, and brands that help businesses grow.
          </p>

          <motion.div
            className="mt-8 flex gap-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <button className="bg-white text-indigo-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition">
              View Portfolio
            </button>

            <button className="border border-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition">
              Get Started
            </button>
          </motion.div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            <Image
              src="/images/hero.png"
              alt="Agency Hero Image"
              width={500}
              height={400}
              className="rounded-xl shadow-lg"
            />
          </motion.div>
        </motion.div>

      </div>

    </section>
  );
}