import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-[var(--color-primary-indigo-70)] text-white hover:bg-[var(--color-primary-indigo-80)]",
        secondary:
          "border-transparent bg-[var(--color-primary-cool-gray-10)] text-[var(--color-primary-cool-gray-90)] hover:bg-[var(--color-primary-cool-gray-20)]",
        destructive:
          "border-transparent bg-[var(--color-supporting-red-60)] text-white hover:bg-red-700", // Or light pink bg?
        outline:
          "text-[var(--color-primary-cool-gray-90)] border-[var(--color-primary-cool-gray-30)]",
        success:
          "border-transparent bg-green-100 text-green-800 hover:bg-green-200",
        warning:
          "border-transparent bg-yellow-100 text-yellow-800 hover:bg-yellow-200",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

export interface BadgeProps
  extends
    React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
