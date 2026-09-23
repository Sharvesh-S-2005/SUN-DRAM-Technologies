import type { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
  size?: "md" | "lg" | "xl";
  className?: string;
};

const SIZE_CLASSES = {
  md: "max-w-5xl",
  lg: "max-w-6xl",
  xl: "max-w-7xl",
};

export function Container({ children, size = "lg", className = "" }: ContainerProps) {
  return <div className={`mx-auto w-full ${SIZE_CLASSES[size]} ${className}`.trim()}>{children}</div>;
}
