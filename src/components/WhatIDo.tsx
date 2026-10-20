import { useEffect, useRef } from "react";
import "./styles/WhatIDo.css";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const WhatIDo = () => {
  const containerRef = useRef<(HTMLDivElement | null)[]>([]);

  const setRef = (el: HTMLDivElement | null, index: number) => {
    containerRef.current[index] = el;
  };

  useEffect(() => {
    const containers = containerRef.current.filter(
      (container): container is HTMLDivElement => container !== null
    );

    if (ScrollTrigger.isTouch) {
      containers.forEach((container) => {
        container.classList.remove("what-noTouch");
        container.addEventListener("click", () => handleClick(container));
      });
    }

    return () => {
      containers.forEach((container) => {
        container.classList.remove("what-content-active");
      });
    };
  }, []);

  return (
    <div className="whatIDO">
      {/* TITLE */}
      <div className="what-box">
        <h2 className="title">
          W<span className="hat-h2">HAT</span>
          <div>
            I<span className="do-h2"> DO</span>
          </div>
        </h2>
      </div>

      {/* CONTENT */}
      <div className="what-box">
        <div className="what-box-in">

          {/* SIDE BORDERS */}
          <div className="what-border2">
            <svg width="100%">
              <line
                x1="0"
                y1="0"
                x2="0"
                y2="100%"
                stroke="white"
                strokeWidth="2"
                strokeDasharray="7,7"
              />

              <line
                x1="100%"
                y1="0"
                x2="100%"
                y2="100%"
                stroke="white"
                strokeWidth="2"
                strokeDasharray="7,7"
              />
            </svg>
          </div>

          {/* CARD 1 — AI VIDEO & CONTENT */}
          <div
            className="what-content what-noTouch"
            ref={(el) => setRef(el, 0)}
          >
            <div className="what-border1">
              <svg height="100%">
                <line
                  x1="0"
                  y1="0"
                  x2="100%"
                  y2="0"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="6,6"
                />

                <line
                  x1="0"
                  y1="100%"
                  x2="100%"
                  y2="100%"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="6,6"
                />
              </svg>
            </div>

            <div className="what-corner"></div>

            <div className="what-content-in">
              <h3>AI VIDEO &amp; CONTENT</h3>

              <h4>AI-Powered Visual Content</h4>

              <p>
                I create engaging videos and visual content using AI tools,
                creative workflows, and professional editing for digital
                platforms and brands.
              </p>

              <h5>Skillset &amp; tools</h5>

              <div className="what-content-flex">
                <div className="what-tags">AI Video Creation</div>
                <div className="what-tags">Video Editing</div>
                <div className="what-tags">Prompt Engineering</div>
                <div className="what-tags">AI Visuals</div>
                <div className="what-tags">Thumbnail Design</div>
                <div className="what-tags">Content Creation</div>
              </div>

              <div className="what-arrow"></div>
            </div>
          </div>

          {/* CARD 2 — DESIGN & VISUALS */}
          <div
            className="what-content what-noTouch"
            ref={(el) => setRef(el, 1)}
          >
            <div className="what-border1">
              <svg height="100%">
                <line
                  x1="0"
                  y1="100%"
                  x2="100%"
                  y2="100%"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="6,6"
                />
              </svg>
            </div>

            <div className="what-corner"></div>

            <div className="what-content-in">
              <h3>DESIGN &amp; VISUALS</h3>

              <h4>Creative Visual Design</h4>

              <p>
                I create clean and engaging visual designs for digital
                content, including thumbnails, social media creatives,
                AI visuals, and presentation-ready graphics.
              </p>

              <h5>Skillset &amp; tools</h5>

              <div className="what-content-flex">
                <div className="what-tags">Thumbnail Design</div>
                <div className="what-tags">Canva</div>
                <div className="what-tags">AI Visuals</div>
                <div className="what-tags">Graphic Design</div>
                <div className="what-tags">Social Media Creatives</div>
                <div className="what-tags">Visual Composition</div>
              </div>

              <div className="what-arrow"></div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default WhatIDo;

function handleClick(container: HTMLDivElement) {
  container.classList.toggle("what-content-active");

  container.classList.remove("what-sibling");

  if (container.parentElement) {
    const siblings = Array.from(container.parentElement.children);

    siblings.forEach((sibling) => {
      if (sibling !== container) {
        sibling.classList.remove("what-content-active");
        sibling.classList.toggle("what-sibling");
      }
    });
  }
}