import React from "react";

const Spinner = () => (
  <div className="flex items-center justify-center w-full h-full" role="status" aria-label="Memuat...">
    <svg className="animate-spin h-10 w-10 text-[#00ADB5]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true">
      <circle className="opacity-20" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
      <path className="opacity-80" fill="currentColor" d="M4 12a8 8 0 018-8v3a5 5 0 00-5 5H4z" />
    </svg>
    <span className="sr-only">Memuat...</span>
  </div>
);

export default Spinner; 