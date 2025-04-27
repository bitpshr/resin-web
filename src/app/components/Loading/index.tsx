import classNames from "classnames";

const sizeClassMap = {
  small: "w-6 h-6 border-3",
  medium: "w-8 h-8 border-3",
  large: "w-12 h-12 border-4",
};

export interface LoadingIndicatorProps {
  size?: "small" | "medium" | "large";
  className?: string;
}

const LoadingIndicator: React.FC<LoadingIndicatorProps> = ({
  size = "medium",
  className,
}) => {
  return (
    <div className="flex items-center justify-center">
      <div
        className={classNames(
          "border-gray-200 border-t-black darl:border-t-primary rounded-full animate-spin",
          sizeClassMap[size],
          className
        )}
        data-testid="loading-indicator"
        role="status"
        aria-label="Loading"
      ></div>
    </div>
  );
};

export default LoadingIndicator;
