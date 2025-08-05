import React from "react";
import { useParams, Link } from "react-router-dom";
import { FadeInOnScroll } from "../Components/AnimatedText";

export default function BlogPost() {
  const { id } = useParams();

  // Mock blog post data - in a real app, this would come from an API or CMS
  const blogPosts = {
    1: {
      title: "Understanding Orbital Mechanics",
      content: `
        <p>Orbital mechanics is the study of the motion of objects in space under the influence of gravitational forces. 
        This field combines classical mechanics with celestial mechanics to understand how spacecraft and satellites move 
        through space.</p>
        
        <h2>Kepler's Laws</h2>
        <p>The foundation of orbital mechanics lies in Kepler's three laws of planetary motion:</p>
        <ul>
          <li>First Law: Planets move in elliptical orbits with the Sun at one focus</li>
          <li>Second Law: A line joining a planet and the Sun sweeps out equal areas in equal times</li>
          <li>Third Law: The square of the orbital period is proportional to the cube of the semi-major axis</li>
        </ul>
        
        <h2>Modern Applications</h2>
        <p>Today, orbital mechanics is crucial for:</p>
        <ul>
          <li>Satellite deployment and positioning</li>
          <li>Spacecraft trajectory planning</li>
          <li>Interplanetary mission design</li>
          <li>Space debris tracking</li>
        </ul>
      `,
      date: "2024-01-15",
      author: "Your Name"
    },
    2: {
      title: "Computational Fluid Dynamics in Aerospace",
      content: `
        <p>Computational Fluid Dynamics (CFD) has revolutionized aerospace engineering by providing detailed 
        insights into fluid flow behavior around aircraft and spacecraft.</p>
        
        <h2>Key Applications</h2>
        <p>CFD is used extensively in aerospace for:</p>
        <ul>
          <li>Aerodynamic analysis and optimization</li>
          <li>Engine performance simulation</li>
          <li>Thermal management system design</li>
          <li>Noise prediction and reduction</li>
        </ul>
        
        <h2>Challenges and Solutions</h2>
        <p>Modern CFD tools must handle complex phenomena including turbulence, compressible flow, 
        and multi-phase interactions. Advanced numerical methods and high-performance computing 
        have made these simulations increasingly accurate and practical.</p>
      `,
      date: "2024-01-10",
      author: "Your Name"
    }
  };

  const post = blogPosts[id];

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center px-8">
        <div className="text-center">
          <h1 className="text-2xl font-light mb-4 text-zinc-100">Post Not Found</h1>
          <Link to="/blog" className="text-zinc-400 hover:text-zinc-100 transition-colors">
            ← Back to Journal
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <section className="min-h-screen flex items-center justify-center px-8 py-20">
        <div className="max-w-4xl mx-auto">
          <FadeInOnScroll>
            <Link to="/blog" className="text-zinc-400 hover:text-zinc-100 transition-colors mb-8 inline-block">
              ← Back to Journal
            </Link>
          </FadeInOnScroll>
          
          <FadeInOnScroll delay={200}>
            <article>
              <header className="mb-12">
                <h1 className="heading-large text-zinc-100 mb-4">{post.title}</h1>
                <div className="flex items-center gap-4 text-zinc-400 text-sm">
                  <span>{post.date}</span>
                  <span>•</span>
                  <span>{post.author}</span>
                </div>
              </header>
              
              <div 
                className="prose prose-invert max-w-none"
                dangerouslySetInnerHTML={{ __html: post.content }}
                style={{
                  color: 'rgb(161, 161, 170)',
                  lineHeight: '1.7'
                }}
              />
            </article>
          </FadeInOnScroll>
        </div>
      </section>
    </div>
  );
}
