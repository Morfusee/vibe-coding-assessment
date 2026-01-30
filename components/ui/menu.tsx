import { cn } from "@/lib/utils";
import React, {
  createContext,
  useContext,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { createPortal } from "react-dom";

interface MenuContextType {
  isOpen: boolean;
  toggle: () => void;
  close: () => void;
  menuRef: React.RefObject<HTMLDivElement | null>;
}

const MenuContext = createContext<MenuContextType | undefined>(undefined);

interface MenuProps {
  children: React.ReactNode;
  onOpen?: () => void;
  onClose?: () => void;
  className?: string; // Add className prop
}

export function Menu({ children, onOpen, onClose, className }: MenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const toggle = () => setIsOpen((prev) => !prev);
  const close = () => setIsOpen(false);

  useEffect(() => {
    if (isOpen) {
      onOpen?.();
    } else {
      onClose?.();
    }
  }, [isOpen, onOpen, onClose]);

  return (
    <MenuContext.Provider value={{ isOpen, toggle, close, menuRef }}>
      <div
        ref={menuRef}
        className={cn("relative inline-block text-left", className)}
      >
        {children}
      </div>
    </MenuContext.Provider>
  );
}

function MenuTarget({ children }: { children: React.ReactNode }) {
  const context = useContext(MenuContext);
  if (!context) throw new Error("MenuTarget must be used within a Menu");

  return (
    <div
      onClick={(e) => {
        e.stopPropagation();
        context.toggle();
      }}
      className="cursor-pointer inline-flex"
    >
      {children}
    </div>
  );
}

function MenuDropdown({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const context = useContext(MenuContext);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState<{
    top: number;
    right?: number;
    left?: number;
    width?: number;
  }>({ top: 0 });

  if (!context) throw new Error("MenuDropdown must be used within a Menu");

  useLayoutEffect(() => {
    if (context.isOpen && context.menuRef.current) {
      const rect = context.menuRef.current.getBoundingClientRect();
      const scrollY = window.scrollY;
      const scrollX = window.scrollX;

      // Calculate position (Aligned to Right of trigger)
      setPosition({
        top: rect.bottom + scrollY,
        right: window.innerWidth - rect.right - scrollX,
        // We use 'right' to align the right edge of dropdown with right edge of trigger
      });
    }
  }, [context.isOpen, context.menuRef]);

  // Handle Outside Click specifically for Portal
  useEffect(() => {
    if (!context.isOpen) return;

    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;
      // If click is inside Dropdown (portal) OR inside Trigger (main ref), ignore.
      if (
        dropdownRef.current?.contains(target) ||
        context.menuRef.current?.contains(target)
      ) {
        return;
      }
      context.close();
    };

    document.addEventListener("mousedown", handleClickOutside);
    // Also close on scroll to avoid detached menu
    const handleScroll = () => {
      // Optional: context.close();
    };
    window.addEventListener("scroll", handleScroll, true);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("scroll", handleScroll, true);
    };
  }, [context.isOpen, context.menuRef, context]);

  // Handle Escape
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") context.close();
    };
    if (context.isOpen) document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [context.isOpen, context]);

  if (!context.isOpen) return null;

  // Use Portal to render outside the hidden overflow container
  return createPortal(
    <div
      ref={dropdownRef}
      style={{
        position: "absolute",
        top: position.top,
        right: position.right,
        zIndex: 9999, // High z-index to ensure it floats above everything
      }}
      className={cn(
        "mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-gray-400",
        className,
      )}
      onClick={(e) => e.stopPropagation()} // Prevent clicks inside menu from bubbling weirdly if needed
    >
      <div className="py-1">{children}</div>
    </div>,
    document.body,
  );
}

function MenuItem({
  children,
  className,
  onClick,
  icon,
  danger,
}: {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  icon?: React.ReactNode;
  danger?: boolean;
}) {
  const context = useContext(MenuContext);
  if (!context) throw new Error("MenuItem must be used within a Menu");

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    onClick?.();
    context.close();
  };

  return (
    <button
      onClick={handleClick}
      className={cn(
        "group flex w-full items-center px-4 py-2 text-sm transition-colors",
        danger
          ? "text-red-600 hover:bg-red-50"
          : "text-gray-700 hover:bg-gray-100 hover:text-gray-900",
        className,
      )}
    >
      {icon && (
        <span
          className={cn(
            "mr-3 h-4 w-4",
            danger
              ? "text-red-500 group-hover:text-red-600"
              : "text-gray-400 group-hover:text-gray-500",
          )}
        >
          {icon}
        </span>
      )}
      {children}
    </button>
  );
}

function MenuLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="px-4 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">
      {children}
    </div>
  );
}

function MenuDivider() {
  return <div className="h-px w-full bg-gray-200 my-1" />;
}

// Attach sub-components
Menu.Target = MenuTarget;
Menu.Dropdown = MenuDropdown;
Menu.Item = MenuItem;
Menu.Label = MenuLabel;
Menu.Divider = MenuDivider;
