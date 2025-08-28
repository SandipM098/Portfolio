import React, { useRef, useEffect, useState } from "react";
import './styles.css';
import { Router } from "react-router-dom";

const Dice = () => {
  const cubeRef = useRef(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
//   const dragState = useRef({ isDragging: false, startX: 0, startY: 0 });

  useEffect(() => {
    const handleKeyDown = (e) => {
      setRotation((prev) => {
        let { x, y } = prev;
        if (e.key === "ArrowUp") x -= 90;
        if (e.key === "ArrowDown") x += 90;
        if (e.key === "ArrowLeft") y -= 90;
        if (e.key === "ArrowRight") y += 90;
        return { x, y };
      }
    );
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    const { x, y } = rotation;
    cubeRef.current.style.transform = `rotateX(${x}deg) rotateY(${y}deg)`;
    console.log(rotation);
  }, [rotation]);

//   // Handle mouse drag rotation
//   const handleMouseDown = (e) => {
//     dragState.current.isDragging = true;
//     dragState.current.startX = e.clientX;
//     dragState.current.startY = e.clientY;
//   };

//   const handleMouseMove = (e) => {
//     if (!dragState.current.isDragging) return;

//     const deltaX = e.clientX - dragState.current.startX;
//     const deltaY = e.clientY - dragState.current.startY;

//     dragState.current.startX = e.clientX;
//     dragState.current.startY = e.clientY;

//     setRotation((prev) => ({
//       x: prev.x + deltaY * 0.5,
//       y: prev.y + deltaX * 0.5,
//     }));
//   };

//   const handleMouseUp = () => {
//     dragState.current.isDragging = false;
//   };

  return (
    <div
      className="scene"
    //   onMouseDown={handleMouseDown}
    //   onMouseMove={handleMouseMove}
    //   onMouseUp={handleMouseUp}
    //   onMouseLeave={handleMouseUp}
    >
      <div className="cube" ref={cubeRef}>
        <div className="face one">1</div>
        <div className="face two">2</div>
        <div className="face three">3</div>
        <div className="face four">4</div>
        <div className="face five">5</div>
        <div className="face six">6</div>
      </div>
    </div>
  );
};

export default Dice;
