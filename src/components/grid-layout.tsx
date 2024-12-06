"use client";

import React, { useState, useEffect, useRef } from "react";

interface GridDimensions {
  rows: number;
  cols: number;
}

export default function GridLayout() {
  const [gridDimensions, setGridDimensions] = useState<GridDimensions>({
    rows: 0,
    cols: 0,
  });
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateGridDimensions = () => {
      if (!gridRef.current) return;

      const cellSize = 70;
      const containerWidth = gridRef.current.clientWidth;
      const containerHeight = gridRef.current.clientHeight;

      const cols = Math.ceil(containerWidth / cellSize);
      const rows = Math.ceil(containerHeight / cellSize);

      setGridDimensions({ rows, cols });
    };

    updateGridDimensions();
    window.addEventListener("resize", updateGridDimensions);

    return () => {
      window.removeEventListener("resize", updateGridDimensions);
    };
  }, []);

  const { rows, cols } = gridDimensions;

  return (
    <div
      ref={gridRef}
      className="absolute z-10 inset-0 grid"
      style={{
        gridTemplateColumns: `repeat(${cols}, 1fr)`,
        gridTemplateRows: `repeat(${rows}, 1fr)`,
      }}
    >
      {Array.from({ length: rows * cols }).map((_, i) => (
        <div key={i} className="border border-[#01672B]" />
      ))}
    </div>
  );
}
