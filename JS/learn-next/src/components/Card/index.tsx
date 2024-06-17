import React, { ReactHTMLElement } from "react";

export default function Card({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        padding: "20px",
        margin: "10px",
        display: "flex",
        alignItems: "center",
      }}
    >
      {children}
    </div>
  );
}
