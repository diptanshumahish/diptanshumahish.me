import React from "react";
interface Props {
  content: string;
  icon: JSX.Element;
  randomNumber: number;
}
const colors: string[] = ["#98ea89", "#EA899A", "#6aa460", "#eab289"];

export default function SmallBanners({ content, icon, randomNumber }: Props) {
  return (
    <div
      className="flex  lg:text-xl lg:gap-4 gap-2 border-2 border-backgroundDark dark:border-borders-dark lg:rounded-full rounded-lg  lg:p-6 p-4 items-center justify-center aspect-auto "
      style={{ backgroundColor: `${colors[randomNumber]}` }}
    >
      <span>{icon}</span>
      <span>{content}</span>
    </div>
  );
}
