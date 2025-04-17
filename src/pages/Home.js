import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="bg-gray-900 text-white min-h-screen p-10">
      <header className="flex justify-between items-center mb-10">
        <h1 className="text-3xl font-bold">Nagendra Kumar</h1>
        <a href="/assets/Nagendra_Kumar_Resume.pdf" className="text-sm bg-blue-500 px-4 py-2 rounded hover:bg-blue-600 transition">Download Resume</a>
      </header>

      <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-8">
        <h2 className="text-2xl font-semibold">Projects</h2>

        <div className="grid md:grid-cols-2 gap-6">
          {["idot", "teknomite", "vodafone"].map((project) => (
            <Link key={project} to={`/projects/${project}`} className="bg-gray-800 p-6 rounded-xl hover:scale-105 transition transform duration-300">
              <img src={`/assets/${project}.png`} alt={`${project}`} className="mb-4 rounded" />
              <h3 className="text-xl font-bold capitalize">{project} Project</h3>
              <p className="text-gray-400 text-sm">Click to view case study</p>
            </Link>
          ))}
        </div>

        <div className="mt-12">
          <h3 className="text-xl font-semibold mb-2">Contact</h3>
          <form action="https://formspree.io/f/mwkglkvy" method="POST" className="space-y-4 max-w-md">
            <input type="text" name="name" placeholder="Your Name" required className="w-full p-2 rounded bg-gray-800 border border-gray-700 text-white"/>
            <input type="email" name="email" placeholder="Your Email" required className="w-full p-2 rounded bg-gray-800 border border-gray-700 text-white"/>
            <textarea name="message" placeholder="Your Message" required className="w-full p-2 rounded bg-gray-800 border border-gray-700 text-white" rows="4"></textarea>
            <button type="submit" className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded">Send Message</button>
          </form>
        </div>
      </motion.section>
    </div>
  );
}
