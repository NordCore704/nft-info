import React from "react";
import { About, Headers } from "@/exports";
import Head from "next/head";

const about = () => {
  // The About section 
  return (
    <section className="w-full overflow-hidden">
      <Headers />
      <About />
    </section>
  );
};

export default about;
