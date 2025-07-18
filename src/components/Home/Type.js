import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Full-Stack Developer",
          "React & Next.js Developer",
          "UI/UX Enthusiast",
          "TypeScript Developer",
          "Software Engineering Student",
          "Frontend Specialist",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
