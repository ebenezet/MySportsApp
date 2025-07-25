"use client";

import { BeatLoader } from "react-spinners";

export default function Loading() {
  return (
    <div className="flex h-screen w-full justify-center pt-20">
      <BeatLoader
        size={13}
        loading={true}
        color="#64118c"
        speedMultiplier={0.8}
      />
    </div>
  );
}
