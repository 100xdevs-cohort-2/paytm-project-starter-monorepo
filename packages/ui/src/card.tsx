import React from "react";

export function Card({
  title,
  children,
  color,
}: {
  title: string;
  children?: React.ReactNode;
  color?: string;
}): JSX.Element {
  return (
    <div className={`border p-4 rounded ${color}`}>
      <h1 className="text-xl border-b pb-2">{title}</h1>
      <p>{children}</p>
    </div>
  );
}
