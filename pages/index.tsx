import React from "react";
import { Home } from "../components/Home";
import { CommonHead } from "../components/CommonHead";
import { FadeIn } from "../components/FadeIn";

export default function Index() {
  return (
    <FadeIn>
      <CommonHead title="Home" />
      <Home />
    </FadeIn>
  );
}
