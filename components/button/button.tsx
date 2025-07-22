import { ReactNode } from "react";
import { Button as HeadlessButton } from "@headlessui/react";
import { cn } from "@/utils";

export type ButtonVariant = "default";

export type ButtonProps = {
  variant?: ButtonVariant;
  children?: string | ReactNode;
  className?: string;
};

const buttonVariants: Record<ButtonVariant, string> = {
  default:
    "px-10 py-2 bg-gray-500 opacity-75 rounded-lg border border-white text-white shadow-inner shadow-white/10 hover:bg-gray-600 ",
};

export const Button = ({
  children,
  variant = "default",
  className,
}: ButtonProps) => {
  return (
    <HeadlessButton
      className={cn(
        "flex items-center justify-center gap-2 cursor-pointer",
        buttonVariants[variant],
        className
      )}
    >
      {children && children}
    </HeadlessButton>
  );
};
