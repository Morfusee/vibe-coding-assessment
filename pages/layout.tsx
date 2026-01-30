import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  BookOpen,
  Briefcase,
  ChevronDown,
  ClipboardList,
  Code,
  ExternalLink,
  Files,
  FileStack,
  FileText,
  Home,
  List,
  Menu,
  Settings,
  Shield,
  UserCircle,
  Users,
} from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import Switcher from "../components/ui/switcher";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const SidebarItem = ({
  icon: Icon,
  label,
  href,
  isActive,
  hasSub,
  onClick,
}: {
  icon: React.ElementType;
  label: string;
  href?: string;
  isActive?: boolean;
  hasSub?: boolean;
  onClick?: () => void;
}) => {
  const content = (
    <div
      className={cn(
        "flex items-center justify-between px-3 py-2 rounded-md transition-colors cursor-pointer text-sm font-medium",
        isActive
          ? "bg-(--color-primary-indigo-70) text-white"
          : "text-(--color-primary-cool-gray-80) hover:bg-(--color-primary-cool-gray-10)",
      )}
      onClick={onClick}
    >
      <div className="flex items-center gap-3">
        <Icon className="h-4 w-4" />
        <span>{label}</span>
      </div>
      {hasSub && <ChevronDown className="h-4 w-4 opacity-50" />}
    </div>
  );

  return href ? <Link href={href}>{content}</Link> : content;
};

const SidebarSection = ({
  title,
  children,
}: {
  title?: string;
  children: React.ReactNode;
}) => (
  <div className="mb-4">
    {title && (
      <h3 className="px-3 mb-2 text-xs font-bold text-(--color-primary-cool-gray-50) uppercase tracking-wider">
        {title}
      </h3>
    )}
    <div className="space-y-1">{children}</div>
  </div>
);

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const router = useRouter();
  const path = router.pathname;

  return (
    <div className="flex h-screen bg-(--color-custom-background) overflow-hidden font-sans">
      {/* Sidebar */}
      <aside className="w-64 shrink-0 bg-white border-r border-(--color-primary-cool-gray-20) flex flex-col overflow-y-auto">
        <div className="p-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-xl font-heading font-bold text-(--color-primary-indigo-100)">
              FilPass
            </span>
          </div>
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <Menu className="h-5 w-5 text-(--color-primary-cool-gray-80)" />
          </Button>
        </div>

        <div className="px-3 py-2">
          <SidebarItem
            icon={Home}
            label="Dashboard"
            href="/"
            isActive={path === "/"}
          />
        </div>

        <div className="flex-1 px-3 py-2 space-y-6">
          <SidebarSection title="Company">
            <SidebarItem icon={Users} label="Recipient" />
          </SidebarSection>

          <SidebarSection title="Issuance">
            <SidebarItem icon={FileStack} label="Batch Issuance" hasSub />
            <SidebarItem icon={Files} label="Approval" />
          </SidebarSection>

          <SidebarSection title="Template">
            {/* Only clickable item as requested */}
            <SidebarItem
              icon={FileText}
              label="Email Templates"
              href="/email-templates"
              isActive={path.startsWith("/email-templates")}
            />
          </SidebarSection>

          <SidebarSection title="Workflow">
            <SidebarItem icon={List} label="List" />
            <SidebarItem icon={Briefcase} label="Applications" />
          </SidebarSection>

          <SidebarSection title="Developer">
            <SidebarItem icon={Code} label="API" />
            <SidebarItem icon={BookOpen} label="Documentation" />
          </SidebarSection>

          <SidebarSection title="Account">
            <SidebarItem icon={ClipboardList} label="Audit Log" hasSub />
            <SidebarItem icon={UserCircle} label="Accounts" />
            <SidebarItem icon={Settings} label="Settings" hasSub />
            <SidebarItem icon={Shield} label="Legal" />
          </SidebarSection>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="h-16 border-(--color-primary-cool-gray-20) flex items-center justify-between px-6">
          <div className="flex items-center gap-4">
            <span className="text-sm font-medium text-(--color-primary-cool-gray-60)">
              Switch to:
            </span>
            <div className="flex rounded-md border border-(--color-primary-cool-gray-30) overflow-hidden">
              <Switcher />
            </div>
          </div>

          <div className="flex items-center gap-6">
            <div className="relative">
              <button className="flex items-center gap-2 text-sm text-(--color-primary-cool-gray-80) border border-(--color-primary-cool-gray-30) rounded px-3 py-1.5 bg-white">
                All Departments <ChevronDown className="h-4 w-4" />
              </button>
            </div>

            <button className="flex items-center gap-1 text-sm text-(--color-primary-cool-gray-60) hover:text-(--color-primary-indigo-70)">
              Verify File <ExternalLink className="h-4 w-4" />
            </button>

            <div className="h-8 w-8 rounded-full bg-(--color-primary-cool-gray-20) flex items-center justify-center text-(--color-primary-cool-gray-60)">
              <UserCircle className="h-6 w-6" />
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto p-6">{children}</main>
      </div>
    </div>
  );
}
