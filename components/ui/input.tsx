import { cn } from "@/lib/utils";
import * as React from "react";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, label, error, helperText, id, ...props }, ref) => {
    const inputId = id || React.useId();

    return (
      <div className="flex flex-col gap-1.5 w-full">
        {label && (
          <label
            htmlFor={inputId}
            className="text-sm font-medium text-[var(--color-primary-cool-gray-90)]"
          >
            {label}{" "}
            {props.required && (
              <span className="text-[var(--color-supporting-red-60)]">*</span>
            )}
          </label>
        )}
        <input
          type={type}
          id={inputId}
          className={cn(
            "flex h-10 w-full rounded border border-[var(--color-primary-cool-gray-30)] bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-[var(--color-primary-cool-gray-40)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary-indigo-70)] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
            error &&
              "border-[var(--color-supporting-red-60)] focus-visible:ring-[var(--color-supporting-red-60)]",
            className,
          )}
          ref={ref}
          {...props}
        />
        {helperText && !error && (
          <p className="text-xs text-[var(--color-primary-cool-gray-60)]">
            {helperText}
          </p>
        )}
        {error && (
          <p className="text-xs text-[var(--color-supporting-red-60)] font-medium">
            {error}
          </p>
        )}
      </div>
    );
  },
);
Input.displayName = "Input";

export { Input };
