import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "../utils.jsx";
import { FadeInOnScroll, TypewriterText } from "../Components/AnimatedText";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-8">
        <div className="max-w-5xl mx-auto">
          <div className="space-y-12">
            <h1 className="heading-large text-zinc-100">
              <TypewriterText 
                text="Aerospace Engineering Student & Researcher" 
                className="block"
                delay={500}
              />
            </h1>
            
            <FadeInOnScroll delay={2850}>
              <div className="max-w-2xl">
                <p className="text-xl font-light text-zinc-400 leading-relaxed">
                  Third-year undergraduate exploring the mathematical foundations of flight, 
                  orbital mechanics, and computational aerospace systems.
                </p>
              </div>
            </FadeInOnScroll>
            
            <FadeInOnScroll delay={3050}>
              <div className="flex items-center gap-8 pt-8">
                <Link
                  to={createPageUrl("Work")}
                  className="text-zinc-400 hover:text-zinc-100 transition-colors font-light"
                >
                  View selected work →
                </Link>
                <Link
                  to={createPageUrl("About")}
                  className="text-zinc-400 hover:text-zinc-100 transition-colors font-light"
                >
                  Read about me →
                </Link>
              </div>
            </FadeInOnScroll>
          </div>
        </div>
      </section>

      {/* Minimal About Preview */}
      <section className="py-32 border-t border-zinc-800">
        <div className="max-w-5xl mx-auto px-8">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <FadeInOnScroll>
                <h2 className="text-3xl font-light mb-8 text-zinc-100">Focus Areas</h2>
              </FadeInOnScroll>
              <div className="space-y-6 text-zinc-400">
                <FadeInOnScroll delay={200}>
                  <div className="border-l border-zinc-700 pl-6">
                    <h3 className="text-zinc-300 mb-2">Computational Fluid Dynamics</h3>
                    <p className="text-sm">Mathematical modeling of airflow and aerodynamic systems</p>
                  </div>
                </FadeInOnScroll>
                <FadeInOnScroll delay={400}>
                  <div className="border-l border-zinc-700 pl-6">
                    <h3 className="text-zinc-300 mb-2">Orbital Mechanics</h3>
                    <p className="text-sm">Spacecraft trajectory analysis and mission design</p>
                  </div>
                </FadeInOnScroll>
                <FadeInOnScroll delay={600}>
                  <div className="border-l border-zinc-700 pl-6">
                    <h3 className="text-zinc-300 mb-2">Applied Mathematics</h3>
                    <p className="text-sm">Differential equations and numerical analysis</p>
                  </div>
                </FadeInOnScroll>
              </div>
            </div>
            
            <div>
              <FadeInOnScroll>
                <h2 className="text-3xl font-light mb-8 text-zinc-100">Currently</h2>
              </FadeInOnScroll>
              <div className="space-y-4 text-zinc-400">
                <FadeInOnScroll delay={200}>
                  <p>Working on orbital mechanics simulation tools</p>
                </FadeInOnScroll>
                <FadeInOnScroll delay={400}>
                  <p>Researching heat transfer optimization methods</p>
                </FadeInOnScroll>
                <FadeInOnScroll delay={600}>
                  <p>Developing computational analysis workflows</p>
                </FadeInOnScroll>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}