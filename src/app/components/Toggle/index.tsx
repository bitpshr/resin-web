"use client";

import React, { useEffect } from "react";
import { motion } from "framer-motion";

export interface ToggleProps {
  initialSelection?: "left" | "right";
  isInverted?: boolean;
  leftIcon: React.ReactNode;
  onToggle?: (isLeftSelected: boolean) => void;
  rightIcon: React.ReactNode;
}

const Toggle: React.FC<ToggleProps> = ({
  leftIcon,
  rightIcon,
  onToggle,
  initialSelection = "left",
  isInverted = false,
}) => {
  const [isLeftSelected, setIsLeftSelected] = React.useState(
    initialSelection === "left"
  );

  // Update internal state when initialSelection prop changes
  useEffect(() => {
    setIsLeftSelected(initialSelection === "left");
  }, [initialSelection]);

  const handleToggle = () => {
    const newValue = !isLeftSelected;
    setIsLeftSelected(newValue);
    onToggle?.(newValue);
  };

  return (
    <div
      className="relative grid grid-cols-2 gap-1 cursor-pointer transition-colors"
      onClick={handleToggle}
      data-testid="feed-toggle"
    >
      <motion.div
        className="absolute inset-0 w-[calc(50%-2px)] bg-primary/20 rounded-md border"
        initial={false}
        animate={{
          x: isLeftSelected ? 0 : "calc(100% + 4px)",
        }}
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
      />
      <motion.div
        className="relative z-10 flex items-center justify-center p-2"
        animate={{
          color: isLeftSelected
            ? isInverted
              ? "var(--color-copy-on-primary)"
              : "var(--color-copy)"
            : "var(--color-gray-500)",
        }}
        transition={{ duration: 0.2 }}
      >
        <div className="w-6 h-6 [&>*]:w-6 [&>*]:h-6">{leftIcon}</div>
      </motion.div>
      <motion.div
        className="relative z-10 flex items-center justify-center p-2"
        animate={{
          color: !isLeftSelected
            ? isInverted
              ? "var(--color-copy-on-primary)"
              : "var(--color-copy)"
            : "var(--color-gray-500)",
        }}
        transition={{ duration: 0.2 }}
      >
        <div className="w-6 h-6 [&>*]:w-6 [&>*]:h-6">{rightIcon}</div>
      </motion.div>
    </div>
  );
};

export default Toggle;
