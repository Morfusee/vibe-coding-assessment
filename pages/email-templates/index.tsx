import EmailTemplatePreview from "@/components/email-template-preview";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Menu } from "@/components/ui/menu";
import { Pagination } from "@/components/ui/pagination";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import DashboardLayout from "@/pages/layout";
import { emailTemplateService } from "@/services/mock-email-template.service";
import { EmailTemplate } from "@/types/email-template";
import {
  DragDropContext,
  Draggable,
  Droppable,
  DropResult,
} from "@hello-pangea/dnd";
import {
  Archive,
  Copy,
  Download,
  Edit2,
  Eye,
  Filter,
  GripVertical,
  MoreHorizontal,
  Plus,
  Search,
} from "lucide-react";
import { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

// Types for dynamic columns
type ColumnId = "name" | "category" | "subject" | "status" | "updated";

interface ColumnDef {
  id: ColumnId;
  label: string;
  width: string;
  minWidth?: string;
  hasSearch?: boolean;
}

const initialColumns: ColumnDef[] = [
  {
    id: "name",
    label: "Template Name",
    width: "30%",
    minWidth: "200px",
    hasSearch: true,
  },
  {
    id: "category",
    label: "Category",
    width: "20%",
    minWidth: "150px",
    hasSearch: true,
  },
  {
    id: "subject",
    label: "Subject",
    width: "25%",
    minWidth: "250px",
    hasSearch: true,
  },
  { id: "status", label: "Status", width: "15%", minWidth: "150px" }, // Custom dropdown filter
  { id: "updated", label: "Last Updated", width: "15%", minWidth: "150px" }, // Custom date filter
];

const formatDate = (date: string) => {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
};

const EmailTemplatesIndexPage: NextPage = () => {
  const router = useRouter();
  const [templates, setTemplates] = useState<EmailTemplate[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [previewTemplate, setPreviewTemplate] = useState<EmailTemplate | null>(
    null,
  );
  const [activeTab, setActiveTab] = useState("All");

  // Pagination State
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  // Column Order State
  const [columns, setColumns] = useState<ColumnDef[]>(initialColumns);

  const fetchTemplates = async () => {
    setLoading(true);
    const data = await emailTemplateService.getTemplates();
    setTemplates(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchTemplates();
  }, []);

  const onDragEnd = (result: DropResult) => {
    if (!result.destination) {
      return;
    }

    const newColumns = Array.from(columns);
    const [reorderedItem] = newColumns.splice(result.source.index, 1);
    newColumns.splice(result.destination.index, 0, reorderedItem);

    setColumns(newColumns);
  };

  const filteredTemplates = templates.filter(
    (t) =>
      t.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      t.subject.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  // Pagination Logic
  const totalItems = filteredTemplates.length;
  const paginatedTemplates = filteredTemplates.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  );

  // Reset page when search changes
  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, activeTab]);

  // Render content based on column ID
  const renderCellContent = (template: EmailTemplate, columnId: ColumnId) => {
    switch (columnId) {
      case "name":
        return (
          <div className="font-medium text-(--color-primary-cool-gray-90)">
            {template.name}
          </div>
        );
      case "category":
        return (
          <Badge
            variant={
              template.category === "Verification" ? "secondary" : "default"
            }
            className={
              template.category === "Verification"
                ? "bg-blue-100 text-blue-800 hover:bg-blue-200 border-none"
                : "bg-purple-100 text-purple-800 hover:bg-purple-200 border-none"
            }
          >
            {template.category}
          </Badge>
        );
      case "subject":
        return (
          <div
            className="text-xs text-(--color-primary-cool-gray-50) truncate max-w-[200px]"
            title={template.subject}
          >
            {template.subject}
          </div>
        );
      case "status":
        return (
          <Badge
            variant="secondary"
            className="bg-emerald-100 text-emerald-800 hover:bg-emerald-200 border-none font-normal"
          >
            • Active
          </Badge>
        );
      case "updated":
        return (
          <div className="text-(--color-primary-cool-gray-70)">
            {formatDate(template.updated_at)}
          </div>
        );
      default:
        return null;
    }
  };

  // Render Header Filter based on column ID
  const renderHeaderFilter = (column: ColumnDef) => {
    return (
      <div className="flex flex-col gap-2 py-2">
        <div className="flex items-start gap-2 text-(--color-primary-cool-gray-500)">
          <GripVertical className="h-4 w-4 cursor-grab active:cursor-grabbing text-(--color-primary-cool-gray-30)" />
          <span className="text-xs font-bold text-(--color-primary-cool-gray-50) uppercase tracking-wider">
            {column.label}
          </span>
        </div>

        {column.hasSearch ? (
          <div className="relative">
            <Search className="absolute left-2 top-2 h-3 w-3 text-(--color-primary-cool-gray-40)" />
            <input
              onClick={(e) => e.stopPropagation()}
              type="text"
              placeholder="Search"
              className="w-full pl-7 pr-2 py-1 text-xs border border-(--color-primary-cool-gray-30) rounded bg-white focus:outline-none focus:border-(--color-primary-indigo-70)"
            />
          </div>
        ) : column.id === "status" ? (
          <select
            onClick={(e) => e.stopPropagation()}
            className="w-full px-2 py-1 text-xs border border-(--color-primary-cool-gray-30) rounded bg-white focus:outline-none focus:border-(--color-primary-indigo-70) text-(--color-primary-cool-gray-60)"
          >
            <option>All</option>
            <option>Active</option>
            <option>Inactive</option>
          </select>
        ) : column.id === "updated" ? (
          <button
            onClick={(e) => e.stopPropagation()}
            className="flex items-center justify-between w-full px-2 py-1 text-xs border border-(--color-primary-cool-gray-30) rounded bg-white text-(--color-primary-cool-gray-60)"
          >
            All Dates
          </button>
        ) : null}
      </div>
    );
  };

  return (
    <DashboardLayout>
      <div className="min-h-screen pb-10 font-sans">
        <Head>
          <title>Email Templates - FilPass</title>
        </Head>

        <main className="container mx-auto px-6 py-8">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <div>
              <h1 className="text-2xl font-bold text-(--color-primary-cool-gray-100)">
                All Email Templates
              </h1>
              <p className="text-(--color-primary-cool-gray-60)">
                View all email templates
              </p>
            </div>
            <Button
              onClick={() => router.push("/email-templates/create")}
              icon={<Plus className="h-4 w-4" />}
              className="bg-(--color-primary-indigo-70) hover:bg-(--color-primary-indigo-80)"
            >
              Create Template
            </Button>
          </div>

          {/* Tabs */}
          <div className="flex items-center border-b border-(--color-primary-cool-gray-20)">
            {["All", "Notification", "Verification"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-18 py-6 text-lg font-bold transition-colors relative ${
                  activeTab === tab
                    ? "text-(--color-primary-indigo-70) bg-white"
                    : "text-(--color-primary-cool-gray-60) hover:text-(--color-primary-cool-gray-80)"
                }`}
              >
                {tab}{" "}
                {tab !== "Verification" &&
                  tab !== "Notification" &&
                  `(${templates.length})`}
                {activeTab === tab && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-(--color-primary-indigo-70)" />
                )}
              </button>
            ))}
          </div>

          <div className="bg-white overflow-hidden flex flex-col">
            {/* Toolbar */}
            <div className="p-4 flex flex-col sm:flex-row items-center justify-between gap-4 bg-white border-b border-(--color-primary-cool-gray-20)">
              <div className="relative w-full">
                <Search className="absolute left-3 top-3 h-4 w-4 text-(--color-primary-cool-gray-40)" />
                <input
                  type="text"
                  placeholder="Global Search"
                  className="pl-10 pr-4 py-2.5 w-full text-sm border border-(--color-primary-cool-gray-30) rounded-md focus:outline-none focus:ring-2 focus:ring-(--color-primary-indigo-70)"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <div className="flex items-center gap-3 shrink-0">
                <Button
                  variant="outline"
                  className="text-(--color-primary-cool-gray-80) border-(--color-primary-cool-gray-30)"
                >
                  Clear Filter <Filter className="h-3 w-3 ml-2" />
                </Button>
                <Button
                  variant="outline"
                  className="text-(--color-primary-cool-gray-80) border-(--color-primary-cool-gray-30)"
                >
                  Download <Download className="h-3 w-3 ml-2" />
                </Button>
              </div>
            </div>

            <div className="flex-1 overflow-visible">
              <DragDropContext onDragEnd={onDragEnd}>
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <Droppable droppableId="columns" direction="horizontal">
                        {(provided) => (
                          <TableRow
                            ref={provided.innerRef}
                            {...provided.droppableProps}
                            className="bg-white hover:bg-white border-none"
                          >
                            {columns.map((column, index) => (
                              <Draggable
                                key={column.id}
                                draggableId={column.id}
                                index={index}
                              >
                                {(provided, snapshot) => (
                                  <TableHead
                                    ref={provided.innerRef}
                                    {...provided.draggableProps}
                                    {...provided.dragHandleProps}
                                    style={{
                                      ...provided.draggableProps.style,
                                      width: column.width,
                                      minWidth: column.minWidth,
                                    }}
                                    className={
                                      snapshot.isDragging
                                        ? "bg-gray-50 opacity-90 shadow-lg"
                                        : ""
                                    }
                                  >
                                    {renderHeaderFilter(column)}
                                  </TableHead>
                                )}
                              </Draggable>
                            ))}
                            {provided.placeholder}
                            {/* Sticky Action Column Header */}
                            <TableHead className="sticky right-0 z-20 w-20 min-w-20">
                              <span className="text-xs font-bold text-(--color-primary-cool-gray-50) uppercase tracking-wider block">
                                ACTION
                              </span>
                            </TableHead>
                          </TableRow>
                        )}
                      </Droppable>
                    </TableHeader>
                    <TableBody>
                      {loading ? (
                        <TableRow>
                          <TableCell
                            colSpan={columns.length + 1}
                            className="h-48 text-center text-(--color-primary-cool-gray-60)"
                          >
                            Loading...
                          </TableCell>
                        </TableRow>
                      ) : filteredTemplates.length === 0 ? (
                        <TableRow>
                          <TableCell
                            colSpan={columns.length + 1}
                            className="h-48 text-center text-(--color-primary-cool-gray-60)"
                          >
                            No results found.
                          </TableCell>
                        </TableRow>
                      ) : (
                        paginatedTemplates.map((template) => (
                          <TableRow
                            key={template.id}
                            className="hover:bg-(--color-primary-cool-gray-10)"
                          >
                            {columns.map((column) => (
                              <TableCell
                                key={`${template.id}-${column.id}`}
                                className="py-4 align-top"
                                style={{
                                  width: column.width,
                                  minWidth: column.minWidth,
                                }}
                              >
                                {renderCellContent(template, column.id)}
                              </TableCell>
                            ))}
                            {/* Sticky Action Column Cell */}
                            <TableCell className="sticky right-0 z-10 bg-white outline-2 outline-(--color-primary-cool-gray-10) py-4 align-top w-[80px] min-w-[80px] shadow-[-2px_0_5px_-2px_rgba(0,0,0,0.05)]">
                              <div className="flex items-center justify-center">
                                <Menu>
                                  <Menu.Target>
                                    <Button
                                      variant="outline"
                                      size="sm"
                                      className="h-8 w-8 p-0 border-(--color-primary-cool-gray-30) text-(--color-primary-cool-gray-60) hover:bg-(--color-primary-cool-gray-10)"
                                      title="Actions"
                                    >
                                      <MoreHorizontal className="h-4 w-4" />
                                    </Button>
                                  </Menu.Target>
                                  <Menu.Dropdown>
                                    <Menu.Label>Actions</Menu.Label>
                                    <Menu.Item
                                      icon={<Eye className="h-4 w-4" />}
                                      onClick={() =>
                                        setPreviewTemplate(template)
                                      }
                                    >
                                      Preview
                                    </Menu.Item>
                                    <Menu.Item
                                      icon={<Edit2 className="h-4 w-4" />}
                                      onClick={() =>
                                        router.push(
                                          `/email-templates/${template.id}`,
                                        )
                                      }
                                    >
                                      Edit
                                    </Menu.Item>
                                    <Menu.Item
                                      icon={<Copy className="h-4 w-4" />}
                                    >
                                      Duplicate
                                    </Menu.Item>
                                    <Menu.Divider />
                                    <Menu.Item
                                      icon={<Archive className="h-4 w-4" />}
                                      danger
                                    >
                                      Archive
                                    </Menu.Item>
                                  </Menu.Dropdown>
                                </Menu>
                              </div>
                            </TableCell>
                          </TableRow>
                        ))
                      )}
                    </TableBody>
                  </Table>
                </div>
              </DragDropContext>
            </div>

            {/* Pagination Controls */}
            {!loading && filteredTemplates.length > 0 && (
              <Pagination
                totalItems={totalItems}
                itemsPerPage={itemsPerPage}
                currentPage={currentPage}
                onPageChange={setCurrentPage}
                onItemsPerPageChange={setItemsPerPage}
              />
            )}
          </div>
        </main>

        {previewTemplate && (
          <EmailTemplatePreview
            isOpen={!!previewTemplate}
            onClose={() => setPreviewTemplate(null)}
            data={previewTemplate}
          />
        )}
      </div>
    </DashboardLayout>
  );
};

export default EmailTemplatesIndexPage;
