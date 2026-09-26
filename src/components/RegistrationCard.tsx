import React from "react";

interface RegistrationCardProps {
  children: React.ReactNode;
  maxWidth?: string;
}

/** Shared white translucent card shell used by every registration screen. */
const RegistrationCard: React.FC<RegistrationCardProps> = ({ children, maxWidth = "max-w-2xl" }) => {
  return (
    <div className={`w-full ${maxWidth} rounded-3xl border border-[#EAEFF5] bg-white/95 p-8 shadow-[0_20px_60px_-20px_rgba(8,43,99,0.25)] backdrop-blur-sm sm:p-10`}>
      {children}
    </div>
  );
};

export default RegistrationCard;
