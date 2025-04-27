import React from "react";

export interface VisualIndicatorProps {
  isLatest?: boolean;
}

const VisualIndicator: React.FC<VisualIndicatorProps> = ({ isLatest }) => {
  return (
    <div className="top-4 relative md:mr-8 mr-3" data-testid="visual-indicator">
      {isLatest ? (
        <div
          className="relative flex size-3 md:size-4"
          data-testid="visual-indicator-latest"
        >
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#7fb35c] opacity-75"></span>
          <span className="relative inline-flex size-3 md:size-4 rounded-full bg-[#7fb35c] border-2 md:border-3 border-[#55922d]"></span>
        </div>
      ) : (
        <div
          className="size-3 md:size-4 border-2 md:border-3 rounded-full border-gray-400 bg-surface"
          data-testid="visual-indicator-not-latest"
        />
      )}
    </div>
  );
};

export default VisualIndicator;
