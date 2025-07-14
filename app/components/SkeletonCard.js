'use client';

import React from "react";

const SkeletonCard = ({ descLines = 4 }) => (
  <div className="flex flex-col rounded-xl border border-[#393E46] bg-[#232931] shadow-md p-4 w-full h-[420px] overflow-hidden relative animate-pulse" aria-hidden="true">
    {/* Siluet Gambar */}
    <div className="w-full h-40 bg-gradient-to-r from-[#393E46] via-[#232931] to-[#393E46] rounded-lg mb-4 shimmer flex items-center justify-center">
      <svg className="w-16 h-16 text-[#393E46] opacity-60" fill="currentColor" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" />
      </svg>
    </div>
    {/* Siluet Judul */}
    <div className="h-6 w-3/4 bg-gradient-to-r from-[#393E46] via-[#232931] to-[#393E46] rounded mb-2 shimmer" />
    {/* Siluet Subjudul */}
    <div className="h-4 w-1/2 bg-gradient-to-r from-[#393E46] via-[#232931] to-[#393E46] rounded mb-4 shimmer" />
    {/* Siluet Deskripsi */}
    <div className="flex-1 space-y-2">
      {[...Array(descLines)].map((_, i) => (
        <div key={i} className="h-4 w-full bg-gradient-to-r from-[#393E46] via-[#232931] to-[#393E46] rounded shimmer" />
      ))}
    </div>
    {/* Siluet Tombol */}
    <div className="flex gap-2 mt-auto">
      <div className="h-10 w-24 bg-gradient-to-r from-[#393E46] via-[#232931] to-[#393E46] rounded shimmer" />
      <div className="h-10 w-24 bg-gradient-to-r from-[#393E46] via-[#232931] to-[#393E46] rounded shimmer" />
    </div>
    <style jsx>{`
      .shimmer {
        position: relative;
        overflow: hidden;
      }
      .shimmer::after {
        content: '';
        position: absolute;
        top: 0;
        left: -150px;
        height: 100%;
        width: 150px;
        background: linear-gradient(90deg, transparent, rgba(238,238,238,0.08), transparent);
        animation: shimmer 1.5s infinite;
      }
      @keyframes shimmer {
        100% {
          left: 100%;
        }
      }
    `}</style>
  </div>
);

export default SkeletonCard; 