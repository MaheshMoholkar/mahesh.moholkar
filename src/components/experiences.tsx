import React from "react";
import { Timeline } from "./ui/timeline";
import experiences from "@/lib/experience";

function Experiences() {
  return (
    <section className="container mx-auto max-w-4xl">
      <Timeline data={experiences} />
    </section>
  );
}

export default Experiences;
