import { cn } from "@/lib/utils";
import { X } from "lucide-react";
import * as React from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description?: string;
  children: React.ReactNode;
  footer?: React.ReactNode;
  maxWidth?: string;
}

export function Modal({
  isOpen,
  onClose,
  title,
  description,
  children,
  footer,
  maxWidth = "max-w-xl",
}: ModalProps) {
  React.useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleEscape);
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 duration-300 animate-in fade-in zoom-in-95">
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-[var(--color-custom-modal-overlay)] transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Content */}
      <div
        className={cn(
          "relative z-50 flex w-full flex-col gap-4 rounded-lg bg-white p-6 shadow-xl sm:rounded-xl ring-1 ring-black/5",
          maxWidth,
        )}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        <div className="flex flex-col gap-1.5 text-center sm:text-left">
          <div className="flex items-center justify-between">
            <h2
              id="modal-title"
              className="text-lg font-semibold leading-none tracking-tight text-[var(--color-primary-cool-gray-100)]"
            >
              {title}
            </h2>
            <button
              onClick={onClose}
              className="rounded-sm opacity-70 ring-offset-white transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary-indigo-70)] focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-[var(--color-primary-cool-gray-20)] data-[state=open]:text-[var(--color-primary-cool-gray-80)]"
            >
              <X className="h-5 w-5 text-[var(--color-primary-cool-gray-60)]" />
              <span className="sr-only">Close</span>
            </button>
          </div>
          {description && (
            <p className="text-sm text-[var(--color-primary-cool-gray-60)]">
              {description}
            </p>
          )}
        </div>

        <div className="py-2">{children}</div>

        {footer && (
          <div className="flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2 gap-2">
            {footer}
          </div>
        )}
      </div>
    </div>
  );
}
