import React from "react";
import { Link, useParams } from "react-router-dom";
import { FadeInOnScroll } from "../Components/AnimatedText";

const workProjects = {
  "uci-racing": {
    title: "UCI Anteater Electric Racing",
    subtitle: "",
    images: ["/KiloZot.jpeg"],
    description: "Working as part of the aerodynamics subteam to optimize vehicle performance through computational fluid dynamics analysis and to design a DRS mechanism for the 2026 EV rear wing.",
    accomplishments: [
      {
        text: "Performed CFD simulations done of the rear wing airfoils. These were done to act as a benchmark that we later expanded on by running simulations for the full wing and for various angle of attacks to determine the open configuration that yields the optimal drag and downforce which can be achieved with a DRS mechanism.",
        image: "/AFR_Pressure_Plot.png"
      },
      {
        text: "Used CFD simulations to make MATLAB plots to show the total drag and downforce for varying angles of attacks (AoAs). To be able to run this study, I had to recreate the rear wing except as an assembly with each airfoil as an individual part which enabled me to define an angle mate between the chord line and the horizontal plane which could then be changed to mimic how a DRS would open and close the top two airfoils. In total, 100 simulations were ran for a variety of combinations for the AoAs and a MATLAB plot was made showing the final interpolated results.",
        image: "/AFR_Drag_vs_AoA.png"
      },
      {
        text: "Created similar plots as before of the EV rear wing but redone with assuming that the top two airfoils remained parallel to one another. I made another MATLAB plot showing how the drag and downforce change with respect to the airfoil's angle of attack.",
        image: "/AFR_Parallel_AoA.png"
      },
      {
        text: "Made proof of concept for a servo motor-actuated DRS. This was designed using two steering rods, a bell crank, and a horn. They are supported by a 3 mm flange bearing which would be press fitted each end plate. Further work could be done to determine the optimal values for: a) the location of the servo motor, b) the length of the servo horn, c) the locations of the airfoils' axes of rotations, d) The angle of the bell crank and top horn relative to each of the airfoils, and e) the lengths of the bell crank and top horn. These values would be chosen such that both the required torque and the time it takes to actuate from one angle of attack to another is minimized. For an animation showing the airfoils actuate, <a href='https://youtu.be/Y2mW5fWpfmI' target='_blank' rel='noopener noreferrer' style='color: #60a5fa; text-decoration: underline;' onmouseover='this.style.color=\"#93c5fd\"' onmouseout='this.style.color=\"#60a5fa\"'>click here</a>.",
        image: "/AFR_Servo_Actuated_DRS.png"
      },
      {
        text: "Designed airfoil sleeves and linkage mechanism for a linearly actuated DRS (pneumatic or electric).",
        image: "/AFR_Linear_Actuator.png",
        imageClass: "w-1/3"
      },
      {
        text: "Constructed a decision matrix to assess the effectiveness of multiple prototypes taking into account their different methods of actuation, their cost, ease of manufacturing/assembly, weight, how much they obstruct the airfoils, if they allow for continuous states, and if they provide fail-proof measures. Different weights were placed on each criterion to reflect their importance (for example, more weight was placed on the cost criterion than the extent a given method obstructs the airfoils).",
        image: "/AFR_Decision_Matrix.png"
      },
      {
        text: "Derived equations of motion for a four bar linkage to provide a reference for determining the optimal values for the servo motor-actuated DRS. These equations could then used to determine the required torque and the time it takes to actuate from one angle of attack to another.",
        image: "/AFR_4_Bar_Linkage.png",
        imageClass: "w-1/2"
      },
      {
        text: "Compiled a <a href='https://drive.google.com/file/d/1E46PfkEiKqpv6veVH62QlbdSC8tC8ze4/view?usp=sharing' target='_blank' rel='noopener noreferrer' style='color: #60a5fa; text-decoration: underline;' onmouseover='this.style.color=\"#93c5fd\"' onmouseout='this.style.color=\"#60a5fa\"'>design report</a> done using LaTeX which includes sections that cover an overview of what a DRS is, the benefits it provides, simulation results, a survey of potential designs (linear actuation, either a pneumatic or electric actuator, or rotary actuation, either a motor to a worm gear or motor to a linkage), a manufacturing plan and BOM, and conclusions/further work.",
        image: "/AFR_Design_Report.png",
        imageClass: "w-1/2"
      }
    ],
    technologies: ["ANSYS", "SolidWorks", "SolidWorks CFD/FEA Package", "MATLAB"],
    timeline: "January 2025 - Present",
    role: "Aerodynamics Team Member"
  },
  "heat-transfer": {
    title: "Heat Transfer Optimization",
    subtitle: "Research Project",
    images: ["/Temperature Distribution.png"],
    description: "Research project focused on optimizing thermal management systems for aerospace applications using advanced computational methods.",
    accomplishments: [
      {
        text: "Developed novel finite element model reducing computational time by 40%",
        image: "/Temperature Distribution.png"
      },
      {
        text: "Published research findings in International Journal of Heat and Mass Transfer",
        image: null
      },
      {
        text: "Achieved 25% improvement in cooling efficiency for aerospace heat exchangers",
        image: null
      },
      {
        text: "Presented findings at 3 international conferences, receiving best poster award",
        image: null
      }
    ],
    technologies: ["MATLAB", "CFD", "Thermal Analysis", "Finite Element Method"],
    timeline: "2023 - 2024",
    role: "Research Assistant"
  }
};

export default function WorkDetail() {
  const { projectId } = useParams();
  const project = workProjects[projectId];

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-light mb-4" style={{ color: 'var(--text-primary)' }}>
            Project Not Found
          </h1>
          <Link 
            to="/work" 
            className="text-lg hover:opacity-70 transition-opacity"
            style={{ color: 'var(--text-secondary)' }}
          >
            ← Back to Work
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <section className="min-h-screen py-8 sm:py-12 px-4 sm:px-6 md:px-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="space-y-8 sm:space-y-12">
            {/* Back Button */}
            <FadeInOnScroll>
              <Link 
                to="/work" 
                className="inline-flex items-center text-lg hover:opacity-70 transition-opacity mb-8"
                style={{ color: 'var(--text-secondary)' }}
              >
                ← Back to Work
              </Link>
            </FadeInOnScroll>

            {/* Project Images */}
            <FadeInOnScroll delay={100}>
            <div className="flex justify-center mb-8">
              <div className="flex flex-wrap justify-center gap-4 md:gap-6 max-w-4xl">
                {project.images.map((image, index) => (
                  <img 
                    key={index}
                    src={image} 
                    alt={`${project.title} - Image ${index + 1}`} 
                    className="max-w-full h-auto rounded-lg shadow-lg"
                    style={{ maxHeight: '400px' }}
                  />
                ))}
              </div>
            </div>
          </FadeInOnScroll>

            {/* Project Header */}
            <FadeInOnScroll delay={200}>
              <div className="text-center">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-light mb-4" style={{ color: 'var(--text-primary)' }}>
                  {project.title}
                </h1>
                <p className="text-lg sm:text-xl font-light mb-2" style={{ color: 'var(--text-secondary)' }}>
                  {project.subtitle}
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-2 sm:gap-6 text-sm" style={{ color: 'var(--text-secondary)' }}>
                  <span>{project.timeline}</span>
                  <span>•</span>
                  <span>{project.role}</span>
                </div>
              </div>
            </FadeInOnScroll>

            {/* Project Description */}
            <FadeInOnScroll delay={300}>
              <div className="max-w-6xl mx-auto">
                <p className="text-base sm:text-lg leading-relaxed mb-6 sm:mb-8" style={{ color: 'var(--text-secondary)' }}>
                  {project.description}
                </p>
              </div>
            </FadeInOnScroll>

            {/* Technologies */}
            <FadeInOnScroll delay={500}>
              <div className="max-w-6xl mx-auto">
                <h2 className="text-2xl font-light mb-6" style={{ color: 'var(--text-primary)' }}>
                  Technologies & Tools
                </h2>
                <div className="flex flex-wrap gap-2 sm:gap-3">
                  {project.technologies.map((tech, index) => (
                    <span 
                      key={index} 
                      className="px-4 py-2 text-sm rounded-lg border"
                      style={{ 
                        backgroundColor: 'var(--text-secondary)', 
                        color: 'var(--text-primary)',
                        borderColor: 'var(--text-secondary)'
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </FadeInOnScroll>

            {/* Accomplishments */}
            <FadeInOnScroll delay={400}>
              <div className="max-w-6xl mx-auto">
                <h2 className="text-2xl font-light mb-8" style={{ color: 'var(--text-primary)' }}>
                  Key Accomplishments
                </h2>
                <div className="space-y-8 mb-8">
                  {project.accomplishments.map((accomplishment, index) => (
                    <div key={index} className="space-y-4">
                      {accomplishment.image && (
                        <div className="w-full flex justify-center">
                          <img 
                            src={accomplishment.image} 
                            alt={`Accomplishment ${index + 1}`}
                            className={accomplishment.imageClass || "w-3/4 h-auto rounded-lg shadow-md"}
                          />
                        </div>
                      )}
                      <div className="flex items-start">
                        <span className="mr-3 mt-1 text-sm" style={{ color: 'var(--text-primary)' }}>•</span>
                        <span 
                          className="text-base sm:text-lg" 
                          style={{ color: 'var(--text-secondary)' }}
                          dangerouslySetInnerHTML={{ __html: accomplishment.text }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </FadeInOnScroll>

          </div>
        </div>
      </section>
    </div>
  );
}
