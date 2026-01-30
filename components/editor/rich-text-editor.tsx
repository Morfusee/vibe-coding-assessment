import { cn } from "@/lib/utils";
import Link from "@tiptap/extension-link";
import Placeholder from "@tiptap/extension-placeholder";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import {
  Bold,
  Italic,
  Link as LinkIcon,
  List,
  ListOrdered,
  Unlink,
} from "lucide-react";
import { useEffect } from "react";
import { Button } from "../ui/button";

interface RichTextEditorProps {
  value: string;
  onChange: (html: string) => void;
  label?: string;
  error?: string;
  helperText?: string;
  placeholder?: string;
}

const RichTextEditor = ({
  value,
  onChange,
  label,
  error,
  helperText,
  placeholder,
}: RichTextEditorProps) => {
  const editor = useEditor({
    immediatelyRender: false,
    extensions: [
      StarterKit,
      Link.configure({
        openOnClick: false,
        HTMLAttributes: {
          class:
            "text-[var(--color-primary-indigo-70)] underline hover:text-[var(--color-primary-indigo-80)]",
        },
      }),
      Placeholder.configure({
        placeholder: placeholder || "Write something...",
        emptyEditorClass:
          "is-editor-empty before:content-[attr(data-placeholder)] before:text-[var(--color-primary-cool-gray-40)] before:float-left before:pointer-events-none",
      }),
    ],
    content: value,
    editorProps: {
      attributes: {
        class: cn(
          "prose prose-sm max-w-none min-h-[150px] p-3 text-sm focus:outline-none",
          "prose-headings:font-heading prose-headings:font-bold prose-headings:text-[var(--color-primary-cool-gray-100)]",
          "prose-p:leading-normal prose-p:text-[var(--color-primary-cool-gray-80)]",
          "prose-a:text-[var(--color-primary-indigo-70)] prose-a:no-underline hover:prose-a:underline",
          "prose-ul:list-disc prose-ol:list-decimal prose-li:ml-4",
        ),
      },
    },
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML());
    },
  });

  // Sync value if changed externally (e.g. initial load or reset)
  useEffect(() => {
    if (editor && value !== editor.getHTML()) {
      editor.commands.setContent(value);
    }
  }, [value, editor]);

  if (!editor) return null;

  const setLink = () => {
    const previousUrl = editor.getAttributes("link").href;
    const url = window.prompt("URL", previousUrl);

    if (url === null) return;

    if (url === "") {
      editor.chain().focus().extendMarkRange("link").unsetLink().run();
      return;
    }

    editor.chain().focus().extendMarkRange("link").setLink({ href: url }).run();
  };

  return (
    <div className="flex flex-col gap-1.5 w-full">
      {label && (
        <label className="text-sm font-medium text-[var(--color-primary-cool-gray-90)]">
          {label}
        </label>
      )}

      <div
        className={cn(
          "rounded border border-[var(--color-primary-cool-gray-30)] bg-white overflow-hidden focus-within:ring-2 focus-within:ring-[var(--color-primary-indigo-70)] focus-within:ring-offset-2",
          error &&
            "border-[var(--color-supporting-red-60)] focus-within:ring-[var(--color-supporting-red-60)]",
        )}
      >
        {/* Toolbar */}
        <div className="flex items-center gap-1 border-b border-[var(--color-primary-cool-gray-20)] bg-[var(--color-primary-cool-gray-10)] p-2">
          <Button
            type="button"
            variant="ghost"
            size="sm"
            onClick={() => editor.chain().focus().toggleBold().run()}
            disabled={!editor.can().chain().focus().toggleBold().run()}
            className={cn(
              "h-8 w-8 p-0",
              editor.isActive("bold")
                ? "bg-[var(--color-primary-cool-gray-20)]"
                : "",
            )}
            title="Bold"
          >
            <Bold className="h-4 w-4" />
          </Button>
          <Button
            type="button"
            variant="ghost"
            size="sm"
            onClick={() => editor.chain().focus().toggleItalic().run()}
            disabled={!editor.can().chain().focus().toggleItalic().run()}
            className={cn(
              "h-8 w-8 p-0",
              editor.isActive("italic")
                ? "bg-[var(--color-primary-cool-gray-20)]"
                : "",
            )}
            title="Italic"
          >
            <Italic className="h-4 w-4" />
          </Button>
          <div className="w-px h-4 bg-[var(--color-primary-cool-gray-30)] mx-1" />
          <Button
            type="button"
            variant="ghost"
            size="sm"
            onClick={() => editor.chain().focus().toggleBulletList().run()}
            className={cn(
              "h-8 w-8 p-0",
              editor.isActive("bulletList")
                ? "bg-[var(--color-primary-cool-gray-20)]"
                : "",
            )}
            title="Bullet List"
          >
            <List className="h-4 w-4" />
          </Button>
          <Button
            type="button"
            variant="ghost"
            size="sm"
            onClick={() => editor.chain().focus().toggleOrderedList().run()}
            className={cn(
              "h-8 w-8 p-0",
              editor.isActive("orderedList")
                ? "bg-[var(--color-primary-cool-gray-20)]"
                : "",
            )}
            title="Ordered List"
          >
            <ListOrdered className="h-4 w-4" />
          </Button>
          <div className="w-px h-4 bg-[var(--color-primary-cool-gray-30)] mx-1" />
          <Button
            type="button"
            variant="ghost"
            size="sm"
            onClick={setLink}
            className={cn(
              "h-8 w-8 p-0",
              editor.isActive("link")
                ? "bg-[var(--color-primary-cool-gray-20)]"
                : "",
            )}
            title="Link"
          >
            <LinkIcon className="h-4 w-4" />
          </Button>
          {editor.isActive("link") && (
            <Button
              type="button"
              variant="ghost"
              size="sm"
              onClick={() => editor.chain().focus().unsetLink().run()}
              className="h-8 w-8 p-0"
              title="Unlink"
            >
              <Unlink className="h-4 w-4" />
            </Button>
          )}
        </div>

        {/* Editor Area */}
        <EditorContent editor={editor} />
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
};

export default RichTextEditor;
