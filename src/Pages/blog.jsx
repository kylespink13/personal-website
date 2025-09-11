import React from "react";
import { Link } from "react-router-dom";
import { FadeInOnScroll } from "../Components/AnimatedText";

export default function Blog() {
  return (
    <div className="min-h-screen">
      <section className="min-h-screen flex items-center justify-center px-8">
        <div className="max-w-5xl mx-auto">
          <div className="space-y-12">
            <FadeInOnScroll>
              <h1 className="heading-large" style={{ color: 'var(--text-primary)' }}>
                Journal
              </h1>
            </FadeInOnScroll>
            
            <FadeInOnScroll delay={200}>
              <div className="text-center">
                <p className="text-xl font-light" style={{ color: 'var(--text-secondary)' }}>
                  Work in progress
                </p>
              </div>
            </FadeInOnScroll>
          </div>
        </div>
      </section>
    </div>
  );
}
