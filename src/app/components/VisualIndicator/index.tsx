import React from "react";

export interface VisualIndicatorProps {
  isLatest?: boolean;
}

const VisualIndicator: React.FC<VisualIndicatorProps> = ({ isLatest }) => {
  return (
    <div className="top-4 relative md:mr-8 mr-4">
      {isLatest ? (
        <div className="relative flex size-4">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#7fb35c] opacity-75"></span>
          <span className="relative inline-flex size-4 rounded-full bg-[#7fb35c] border-3 border-[#55922d]"></span>
        </div>
      ) : (
        <div className="size-4 border-3 rounded-full border-gray-400 bg-surface" />
      )}
    </div>
  );
};

export default VisualIndicator;
