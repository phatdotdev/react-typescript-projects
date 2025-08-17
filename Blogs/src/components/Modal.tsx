import type React from "react";
import type { ReactNode } from "react";

const Modal: React.FC<{ children: ReactNode; onClose: () => void }> = ({
  children,
  onClose,
}: {
  children: ReactNode;
  onClose: () => void;
}) => {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
      <div className="bg-white p-4 rounded-lg shadow relative">
        {children}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500"
        >
          ✕
        </button>
      </div>
    </div>
  );
};

export default Modal;
