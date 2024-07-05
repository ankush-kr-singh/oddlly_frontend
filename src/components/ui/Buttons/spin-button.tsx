import React from "react";

const SpinButton = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: String;
}) => {
  return (
    <div
      className={`relative inline-flex h-12 overflow-hidden rounded-2xl p-[2px] focus:outline-none ${className}`}
    >
      <span className="absolute inset-[-1000%] animate-spinLinear bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
      <span
        className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-2xl bg-slate-200/70 px-3 py-1 font-medium text-black backdrop-blur-3xl
      text-lg
      "
      >
        {children}
      </span>
    </div>
  );
};

export default SpinButton;
