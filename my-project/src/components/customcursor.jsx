import React, { useEffect, useState } from "react";

const Customcursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const moveHandler = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", moveHandler);

    return () => window.removeEventListener("mousemove", moveHandler);
  }, []);

  return (
    <div
      className="fixed top-0 left-0 pointer-events-none z-[9999]"
      style={{
        transform: `translate(${position.x - 20}px, ${position.y - 20}px)`,
        transition: "transform 0.08s linear",
      }}
    >
      {/* Outer Ring */}
      <div className="relative w-10 h-10 rounded-full border-2 border-[#4bbd97] flex items-center justify-center">
        
        {/* Center Dot */}
        <div className="w-2 h-2 bg-[#4bbd97] rounded-full" />
      </div>
    </div>
  );
};

export default Customcursor;