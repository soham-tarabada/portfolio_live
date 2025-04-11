import React from "react";

const LoadingSpinner = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-transparent">
      <div className="relative w-[120px] h-[90px] mx-auto">
        <div className="absolute bottom-[30px] left-[50px] h-[30px] w-[30px] bg-[#FFEB00] rounded-full animate-loadingBounce"></div>
        <div className="absolute right-0 top-0 h-[7px] w-[45px] rounded-[4px] shadow-[0_5px_0_#f2f2f2,-35px_50px_0_#f2f2f2,-70px_95px_0_#f2f2f2] animate-loadingStep"></div>
      </div>
      <style>{`
        @keyframes loadingBounce {
          0% { transform: scale(1, 0.7); }
          40% { transform: scale(0.8, 1.2); }
          60% { transform: scale(1, 1); }
          100% { bottom: 140px; }
        }
        @keyframes loadingStep {
          0% {
            box-shadow: 0 10px 0 rgba(0, 0, 0, 0),
                        0 10px 0 #f2f2f2,
                        -35px 50px 0 #f2f2f2,
                        -70px 90px 0 #f2f2f2;
          }
          100% {
            box-shadow: 0 10px 0 #f2f2f2,
                        -35px 50px 0 #f2f2f2,
                        -70px 90px 0 #f2f2f2,
                        -70px 90px 0 rgba(0, 0, 0, 0);
          }
        }
        .animate-loadingBounce {
          animation: loadingBounce 0.5s ease-in-out infinite alternate;
        }
        .animate-loadingStep {
          animation: loadingStep 1s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default LoadingSpinner;