import React from "react";
import { Link } from "react-router-dom";
import { FadeInOnScroll } from "../Components/AnimatedText";
import KiloZot from "../assets/images/KiloZot.jpeg";
import HSSOHeatSink from "../assets/images/HSSO_Heat_Sink.png";

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
                <Link to="/work/uci-racing" className="block">
                  <div className="border border-zinc-700 p-6 rounded-lg hover:border-zinc-500 transition-colors cursor-pointer group">
                    <div className="flex justify-center mb-4">
                      <img 
                        src={KiloZot} 
                        alt="UCI Anteater Electric Racing" 
                        className="max-w-full h-auto rounded-lg group-hover:scale-105 transition-transform duration-300"
                        style={{ maxHeight: '200px' }}
                      />
                    </div>
                    <h3 className="text-xl font-light mb-4 text-zinc-100 group-hover:text-zinc-200 transition-colors">UCI Anteater Electric Racing</h3>
                    <p className="text-zinc-400 mb-4 group-hover:text-zinc-300 transition-colors">
                      Working under the aerodynamics subteam
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-zinc-800 text-zinc-300 text-sm rounded">ANSYS</span>
                      <span className="px-3 py-1 bg-zinc-800 text-zinc-300 text-sm rounded">SolidWorks</span>
                      <span className="px-3 py-1 bg-zinc-800 text-zinc-300 text-sm rounded">SolidWorks CFD/FEA Package</span>
                    </div>
                  </div>
                </Link>
                
                <Link to="/work/heat-transfer" className="block">
                  <div className="border border-zinc-700 p-6 rounded-lg hover:border-zinc-500 transition-colors cursor-pointer group">
                    <div className="flex justify-center mb-4">
                      <img 
                        src={HSSOHeatSink} 
                        alt="Heat Transfer Optimization" 
                        className="max-w-full h-auto rounded-lg group-hover:scale-105 transition-transform duration-300"
                        style={{ maxHeight: '200px' }}
                      />
                    </div>
                    <h3 className="text-xl font-light mb-4 text-zinc-100 group-hover:text-zinc-200 transition-colors">Heat Transfer Optimization</h3>
                    <p className="text-zinc-400 mb-4 group-hover:text-zinc-300 transition-colors">
                      Research project focused on optimizing thermal management systems for aerospace applications.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-zinc-800 text-zinc-300 text-sm rounded">MATLAB</span>
                      <span className="px-3 py-1 bg-zinc-800 text-zinc-300 text-sm rounded">CFD</span>
                      <span className="px-3 py-1 bg-zinc-800 text-zinc-300 text-sm rounded">Thermal Analysis</span>
                    </div>
                  </div>
                </Link>
              </div>
            </FadeInOnScroll>
          </div>
        </div>
      </section>
    </div>
  );
}
