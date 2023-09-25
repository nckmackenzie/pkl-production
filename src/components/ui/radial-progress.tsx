import { useState, useEffect } from 'react';

type RadialProgressProps = {
  progress: number;
};

export default function RadialProgress({ progress }: RadialProgressProps) {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const progressOffset = ((100 - progress) / 100) * 282.6; // Circumference of a circle with radius 45
    setOffset(progressOffset);
  }, [progress]);

  return (
    <div
      x-data="scrollProgress"
      className="fixed inline-flex items-center justify-center overflow-hidden rounded-full bottom-5 left-5"
    >
      <svg className="w-20 h-20">
        <circle
          className="text-gray-300"
          stroke-width="5"
          stroke="currentColor"
          fill="transparent"
          r="30"
          cx="40"
          cy="40"
        />
        <circle
          className="text-blue-600"
          stroke-width="5"
          strokeDasharray="282.6"
          strokeDashoffset={offset}
          stroke-linecap="round"
          stroke="currentColor"
          fill="transparent"
          r="30"
          cx="40"
          cy="40"
        />
      </svg>
      <span
        className="absolute text-xl text-blue-700"
        x-text="`${percent}%`"
      ></span>
    </div>
  );
}
