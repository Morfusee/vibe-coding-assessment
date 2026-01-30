import { cn } from "@/lib/utils";
import { type VariantProps, cva } from "class-variance-authority";
import { Loader2 } from "lucide-react";
import * as React from "react";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded font-bold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 font-heading",
  {
    variants: {
      variant: {
        default:
          "bg-[var(--color-primary-indigo-70)] text-white hover:bg-[var(--color-primary-indigo-80)] focus-visible:ring-[var(--color-primary-indigo-70)]",
        secondary:
          "bg-[var(--color-primary-cool-gray-10)] text-[var(--color-primary-cool-gray-90)] border border-[var(--color-primary-cool-gray-30)] hover:bg-[var(--color-primary-cool-gray-20)] focus-visible:ring-[var(--color-primary-cool-gray-50)]",
        outline:
          "border border-[var(--color-primary-cool-gray-30)] bg-transparent hover:bg-[var(--color-primary-cool-gray-10)] text-[var(--color-primary-cool-gray-90)]",
        ghost:
          "hover:bg-[var(--color-primary-cool-gray-10)] text-[var(--color-primary-cool-gray-80)] hover:text-[var(--color-primary-cool-gray-100)]",
        destructive:
          "bg-[var(--color-supporting-red-60)] text-white hover:bg-red-700 focus-visible:ring-red-500",
        link: "text-[var(--color-primary-indigo-70)] underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2 text-base",
        sm: "h-8 px-3 text-sm",
        lg: "h-12 px-8 text-lg",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  isLoading?: boolean;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      asChild = false,
      isLoading = false,
      icon,
      iconPosition = "left",
      children,
      ...props
    },
    ref,
  ) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        disabled={isLoading || props.disabled}
        {...props}
      >
        {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
        {!isLoading && icon && iconPosition === "left" && (
          <span className="mr-2">{icon}</span>
        )}
        {children}
        {!isLoading && icon && iconPosition === "right" && (
          <span className="ml-2">{icon}</span>
        )}
      </button>
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
