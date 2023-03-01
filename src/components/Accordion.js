/* eslint-disable react/no-danger */
import React, { useState, useRef } from "react";

const Accordion = (props) => {
  const [setActive, setActiveState] = useState("");
  const [setHeight, setHeightState] = useState("0px");
  const [setDisplay, setDisplayState] = useState("displayBorder");
  const [hideBorder, setHideBorder] = useState("accordion");
  const content = useRef(null);
  function toggleAccordion() {
    setActiveState(setActive === "" ? "active" : "");
    setHeightState(
      setActive === "active" ? "0px" : `${content.current.scrollHeight}px`
    );
    setDisplayState(
      setActive === "active" ? "displayBorder" : "accordion__content"
    );
    setHideBorder(setActive === "active" ? "accordion" : "accordion-active");
  }

  return (
    <div className="accordion__section z-0 mb-6">
      <button
        type="button"
        className={`${hideBorder}`}
        onClick={toggleAccordion}
      >
        <div className="flex items-center justify-between w-full">
          <div className={`accordion__title font-Poppins`}>
            {props.title}
          </div>
          <div className="accordion__icon">
            <svg
              className={`${setActive}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
        </div>
      </button>
      <div
        ref={content}
        style={{ maxHeight: `${setHeight}` }}
        className={`${setDisplay}`}
      >
        <div
          className="accordion__text "
          dangerouslySetInnerHTML={{
            __html: `${props.desc}`,
          }}
        />
      </div>
    </div>
  );
};

export default Accordion;
