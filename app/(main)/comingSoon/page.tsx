"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

const HomePageError = ({ err }: { err: Error; reset: () => void }) => {
  return (
    <div className="w-screen h-screen flex flex-col gap-y-4 justify-center items-center fixed top-0 left-0 z-[10000] bg-white/55 backdrop-blur-sm">
      <h1 className="text-2xl font-thin text-dark-400 text-center">
        {err?.message || "This Features Still under Constructions !"}
      </h1>
      <div className="flex gap-x-4 items-center">
        <Link href="/advance">
          {" "}
          <Button className="w-28" variant="secondary">
            Back
          </Button>
        </Link>
      </div>
    </div>
  );
};
export default HomePageError;