import Wave from "@/components/Wave";
import { ReactElement } from "react";

export default function Home(): ReactElement {
  return (
    <div>
      <div className="flex justify-center items-center text-5xl">
        <span className="tagline linear-wipe">THROUGH</span>
      </div>
      <div className="flex justify-center items-center text-5xl">
        <span className="tagline linear-wipe">THE WAVES</span>
      </div>
      <Wave></Wave>
    </div>
  );
}
