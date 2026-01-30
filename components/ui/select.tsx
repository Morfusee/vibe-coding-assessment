import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";
import * as React from "react";

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  error?: string;
  helperText?: string;
  options: { label: string; value: string }[];
}

const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, label, error, helperText, options, id, ...props }, ref) => {
    const selectId = id || React.useId();

    return (
      <div className="flex flex-col gap-1.5 w-full relative">
        {label && (
          <label
            htmlFor={selectId}
            className="text-sm font-medium text-[var(--color-primary-cool-gray-90)]"
          >
            {label}{" "}
            {props.required && (
              <span className="text-[var(--color-supporting-red-60)]">*</span>
            )}
          </label>
        )}
        <div className="relative">
          <select
            id={selectId}
            className={cn(
              "flex h-10 w-full appearance-none rounded border border-[var(--color-primary-cool-gray-30)] bg-white px-3 py-2 text-sm ring-offset-white placeholder:text-[var(--color-primary-cool-gray-40)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary-indigo-70)] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 pr-8",
              error &&
                "border-[var(--color-supporting-red-60)] focus-visible:ring-[var(--color-supporting-red-60)]",
              className,
            )}
            ref={ref}
            {...props}
          >
            <option value="" disabled className="text-gray-400">
              Select an option
            </option>
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          <ChevronDown className="absolute right-3 top-3 h-4 w-4 text-[var(--color-primary-cool-gray-50)] pointer-events-none" />
        </div>
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
Select.displayName = "Select";

export { Select };
