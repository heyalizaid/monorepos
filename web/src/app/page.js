"use client";
import Title from "@shared/components/Title";
import Buttons from "@shared/components/Buttons";

export default function Home() {
  return (
    <div>
        <Title title={"NextJS"}>Shared Button</Title>
        <Buttons onClick={() => alert("This is NextJs")}>Hello</Buttons>
    </div>
  );
}
