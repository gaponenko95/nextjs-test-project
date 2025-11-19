import { cn } from "@/shared/lib/utils";
import { createElement, HTMLAttributes } from "react";

const sizes = {
  1: "text-4xl font-bold",
  2: "text-3xl font-semibold",
  3: "text-2xl font-semibold",
  4: "text-xl font-semibold",
  5: "text-lg font-semibold",
};

const getComponent = (level: number) =>
  level === 1
    ? "h1"
    : level === 2
    ? "h2"
    : level === 3
    ? "h3"
    : level === 4
    ? "h4"
    : "h5";

interface TitleProps extends HTMLAttributes<HTMLHeadingElement> {
  level?: 1 | 2 | 3 | 4 | 5;
}

export const Title = ({
  level = 1,
  className,
  children,
  ...props
}: TitleProps) => {
  return createElement(
    getComponent(level),
    {
      className: cn(sizes[level], className),
      ...props,
    },
    children
  );
};
