import React, { useEffect } from "react";

type Props = {
  children: React.ReactNode;
};

const ModalWrapper = ({ children }: Props) => {
  useEffect(() => {
    window.document.body.style.overflow = "hidden";

    return () => {
      window.document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div className="fixed top-0 right-0 bottom-0 left-0 backdrop-blur-[2px] z-10">
      <div className="flex items-center justify-center w-screen h-screen">
        {children}
      </div>
    </div>
  );
};

export default ModalWrapper;
