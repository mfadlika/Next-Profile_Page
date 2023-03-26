import React from "react";

interface CardProps {
  label: string;
  className: string;
  count: number;
}

export default function Card({ label, className, count }: CardProps) {
  return (
    <div className="mx-auto my-2 w-9/12">
      <div className="border-2 shadow-lg rounded-3xl overflow-hidden">
        <div className="flex justify-center px-6 pt-4 pb-2">
          <span className="inline-block text-center bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
            {label}
          </span>
        </div>
        <div
          className={`${
            className + " "
          }text-center text-7xl font-bold px-6 py-4`}
        >
          {count}
        </div>
      </div>
    </div>
  );
}
