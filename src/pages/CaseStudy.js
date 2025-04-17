import React from "react";
import { useParams } from "react-router-dom";

const data = {
  idot: {
    title: "IDOT Website Redesign",
    tools: "Figma, AEM, HTML, CSS, JS",
    summary: "Redesigned Illinois DOT website to enhance usability and accessibility.",
  },
  teknomite: {
    title: "Teknomite Bidding Dashboard",
    tools: "ReactJS, Figma, CSS Flexbox",
    summary: "Created an interactive platform for vehicle bidding and management.",
  },
  vodafone: {
    title: "Vodafone UI Overhaul",
    tools: "Angular, Figma, TypeScript",
    summary: "Developed modular UI components for Vodafone’s transaction platform.",
  },
};

export default function CaseStudy() {
  const { id } = useParams();
  const project = data[id] || {};

  return (
    <div className="bg-gray-900 text-white min-h-screen p-10">
      <h1 className="text-3xl font-bold mb-6">{project.title}</h1>
      <p className="mb-4 text-gray-300"><strong>Tools:</strong> {project.tools}</p>
      <p>{project.summary}</p>
    </div>
  );
}
