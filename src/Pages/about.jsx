import React from "react";
import { FadeInOnScroll } from "../Components/AnimatedText";

export default function About() {
  return (
    <div className="min-h-screen">
      <section className="min-h-screen flex items-center justify-center px-8">
        <div className="max-w-5xl mx-auto">
          <div className="space-y-12">
            <FadeInOnScroll>
              <h1 className="heading-large text-zinc-100">
                About Me
              </h1>
            </FadeInOnScroll>
            
            <FadeInOnScroll delay={200}>
              <div className="max-w-2xl">
                <p className="text-xl font-light text-zinc-400 leading-relaxed">
                  I'm a third-year applied math and aerospace engineering student at UC Irvine passionate about the intersection of both subjects. Namely, how numerical methods can be leveraged for system design, analysis, and optimization. Previously, I interned at Northrop Grumman Space Systems as a structural analysis intern. After graduation, I plan to pursue a master's degree in computational engineering.
                </p>
              </div>
            </FadeInOnScroll>
            
            <FadeInOnScroll delay={400}>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h2 className="text-2xl font-light mb-4 text-zinc-100">Education</h2>
                  <p className="text-zinc-400">Bachelor of Science in Aerospace Engineering at The University of California, Irvine</p>
                  <p className="text-zinc-400">Expected Graduation: Spring 2027</p>
                </div>
                <div>
                  <h2 className="text-2xl font-light mb-4 text-zinc-100">Skills</h2>
                  <ul className="text-zinc-400 space-y-2">
                    <li>Computational Fluid Dynamics</li>
                    <li>Finite Element Analysis</li>
                    <li>MATLAB, Python</li>
                    <li>Applied Mathematics</li>
                    <li>Numerical Analysis</li>
                    <li>Numerical ODEs & PDEs</li>
                  </ul>
                </div>
              </div>
            </FadeInOnScroll>
          </div>
        </div>
      </section>
    </div>
  );
}
