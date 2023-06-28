// import React from "react";

// const Modal = ({ isOpen, onClose, children }) => {
//   if (!isOpen) {
//     return null;
//   }

//   return (
//     <div className="modal">
//       <div className="modal-overlay" onClick={onClose} />
//       <div className="modal-content">
//         {children}
//         <button onClick={onClose}>Cerrar</button>
//       </div>
//     </div>
//   );
// };

// export default Modal;


// VERSION OFICIAL 
// import React from "react";

// const Modal = ({ isOpen, onClose, children }) => {
//   if (!isOpen) {
//     return null;
//   }

//   return (
//     <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50">
//       <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 backdrop-blur-sm z-40" onClick={onClose} />
//       <div className="relative w-[90vh] max-w-90 bg-white p-8 rounded-lg z-50">
//         {children}
//         <button onClick={onClose} className="absolute top-4 right-4 bg-red-500 w-8 h-8 text-white hover:text-gray-700">
//           X
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Modal;



import React, { useEffect } from "react";

const Modal = ({ isOpen, onClose, children }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isOpen]);

  if (!isOpen) {
    return null;
  }

  const handleModalScroll = (e) => {
    e.stopPropagation();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 overflow-y-auto">
      <div className="fixed inset-0 bg-black opacity-50" onClick={onClose}></div>
      <div
        className="relative w-full max-w-lg mx-auto p-4 md:p-8 bg-white rounded shadow-lg"
        onScroll={handleModalScroll}
      >
        {/* <h1 className="font-bold text-[#019EDD] py-2 md:py-4">{title}</h1> */}
        <div className="overflow-y-auto max-h-[calc(100vh-8rem)]">
          {children}
        </div>
        <button
          className="absolute top-2 right-2 md:top-4 md:right-4 px-3 md:px-4 py-2 text-sm font-medium text-gray-700 bg-gray-200 rounded"
          onClick={onClose}
        >
          Cerrar
        </button>
      </div>
    </div>
  );
};

export default Modal;
