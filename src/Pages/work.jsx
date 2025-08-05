import React from "react";
import { FadeInOnScroll } from "../Components/AnimatedText";

export default function Work() {
  return (
    <div className="min-h-screen">
      <section className="min-h-screen flex items-center justify-center px-8">
        <div className="max-w-5xl mx-auto">
          <div className="space-y-12">
            <FadeInOnScroll>
              <h1 className="heading-large text-zinc-100">
                Selected Work
              </h1>
            </FadeInOnScroll>
            
            <FadeInOnScroll delay={200}>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="border border-zinc-700 p-6 rounded-lg">
                  <h3 className="text-xl font-light mb-4 text-zinc-100">Orbital Mechanics Simulation</h3>
                  <p className="text-zinc-400 mb-4">
                    Developed a Python-based simulation tool for analyzing spacecraft trajectories and orbital transfers.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-zinc-800 text-zinc-300 text-sm rounded">Python</span>
                    <span className="px-3 py-1 bg-zinc-800 text-zinc-300 text-sm rounded">NumPy</span>
                    <span className="px-3 py-1 bg-zinc-800 text-zinc-300 text-sm rounded">Matplotlib</span>
                  </div>
                </div>
                
                <div className="border border-zinc-700 p-6 rounded-lg">
                  <h3 className="text-xl font-light mb-4 text-zinc-100">Heat Transfer Optimization</h3>
                  <p className="text-zinc-400 mb-4">
                    Research project focused on optimizing thermal management systems for aerospace applications.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-zinc-800 text-zinc-300 text-sm rounded">MATLAB</span>
                    <span className="px-3 py-1 bg-zinc-800 text-zinc-300 text-sm rounded">CFD</span>
                    <span className="px-3 py-1 bg-zinc-800 text-zinc-300 text-sm rounded">Thermal Analysis</span>
                  </div>
                </div>
              </div>
            </FadeInOnScroll>
          </div>
        </div>
      </section>
    </div>
  );
}
