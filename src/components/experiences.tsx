import React from "react";
import { Timeline } from "./ui/timeline";
import experiences from "@/lib/experience";

function Experiences() {
  return (
    <section className="w-full">
      <Timeline data={experiences} />
    </section>
  );
}

export default Experiences;
