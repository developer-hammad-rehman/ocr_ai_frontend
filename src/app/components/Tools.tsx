import Link from "next/link";
import React from "react";

export default function Tools() {
  return (
    <div className="w-full flex flex-col px-5 py-20 justify-center gap-20 items-center">
      <h5 className="text-white px-10 text-center font-serif font-bold text-5xl">
        Generate Creative AI Copy On-The-Spot, Across Your Favorite Tools
      </h5>
      <div className="flex w-full flex-wrap gap-5 lg:flex-nowrap">
        <div className="flex flex-col justify-center items-center gap-5">
          <div className="bg-gray-800 p-5 rounded-2xl w-fit flex justify-center items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-20 text-yellow-400 h-20"
              fill="none"
              viewBox="0 0 40 40"
            >
              <path
                d="M30.167 10c-1.833 4.855-3.167 8.188-4 10m0 0c-3.132 6.813-6.188 10-10 10-4 0-8-4-8-10s4-10 8-10c3.778 0 6.892 3.31 10 10zm0 0c.853 1.837 2.187 5.17 4 10"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
              ></path>
            </svg>
          </div>
          <h5 className="text-4xl font-bold">Generates quality contents</h5>
          <p className="text-gray-500">
            This tool helps you find the right keywords to target for your
            content. By using the Google Keyword Planner, you can see how often
            people
          </p>
        </div>
        <div className="flex flex-col justify-center items-center gap-5">
          <div className="bg-gray-800 p-5 rounded-2xl w-fit flex justify-center items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-20 text-yellow-400 h-20"
              fill="none"
              viewBox="0 0 40 40"
            >
              <g
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
              >
                <path d="M3.333 20L20 32.37 36.666 20"></path>
                <path d="M11.667 15L20 21.667 28.334 15m-10.001-5L20 11.333 21.666 10 20 8.666 18.333 10z"></path>
              </g>
            </svg>
          </div>
          <h5 className="text-4xl font-bold">Provides Useful Suggestions</h5>
          <p className="text-gray-500">
            GenAI writing tools can analyze data and generate insights to help
            writers create more compelling and informative content
          </p>
        </div>
        <div className="flex flex-col justify-center items-center gap-5">
          <div className="bg-gray-800 p-5 rounded-2xl w-fit flex justify-center items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-20 text-yellow-400 h-20"
              fill="none"
              viewBox="0 0 40 40"
            >
              <path
                d="M10 29.334L6.667 27.5v-4.166m0-6.668V12.5L10 10.666m6.667-3.833L20 5l3.334 1.833M30 10.666l3.333 1.834v4.166m0 6.668V27.5L30 29.367m-6.666 3.799L20 35l-3.333-1.834M20 20l3.333-1.834M30 14.333l3.333-1.833M20 20v4.167m0 6.667V35m0-15l-3.333-1.867M10 14.333L6.667 12.5"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
              ></path>
            </svg>
          </div>
          <h5 className="text-4xl font-bold">Improves Products Productivity</h5>
          <p className="text-gray-500">
            Emotions are a powerful tool in advertising. Use emotions that
            resonate with your audience to create a connection.
          </p>
        </div>
      </div>
      <Link href={'/generate-report'} className="text-white font-bold rounded-2xl bg-yellow-200 p-4">Start Generating</Link>
    </div>
  );
}