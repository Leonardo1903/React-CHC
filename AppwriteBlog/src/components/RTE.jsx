import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import {
  Bold,
  Underline,
  Italic,
  Heading,
  Strikethrough,
  Undo,
  Redo,
  List,
  ListOrdered,
} from "lucide-react";

export default function RTE() {
  const editor = useEditor({
    extensions: [StarterKit.configure({})],
    editorProps: {
      attributes: {
        class:
          "flex flex-col bg-white  p-4 rounded-b-lg border border-gray-300",
      },
    },
  });
  return (
    <>
      <Toolbar editor={editor} />
      <EditorContent editor={editor} />
    </>
  );
}

const Toolbar = ({ editor }) => (
  <div className="flex justify-between bg-gray-100 p-2 rounded-t-lg border-b border-gray-300">
    <button
      className="p-1 rounded hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
      onClick={() => editor.chain().focus().toggleBold().run()}
    >
      <Bold className="h-4 w-4" />
    </button>
    <button
      className="p-1 rounded hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
      onClick={() => editor.chain().focus().toggleItalic().run()}
    >
      <Italic className="h-4 w-4" />
    </button>
    <button
      className="p-1 rounded hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
      onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
    >
      <Heading className="h-4 w-4" />
    </button>
    <button
      className="p-1 rounded hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
      onClick={() => editor.chain().focus().toggleUnderline().run()}
    >
      <Underline className="h-4 w-4" />
    </button>
    <button
      className="p-1 rounded hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
      onClick={() => editor.chain().focus().toggleStrike().run()}
    >
      <Strikethrough className="h-4 w-4" />
    </button>
    <button
      className="p-1 rounded hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
      onClick={() => editor.chain().focus().toggleBulletList().run()}
    >
      <List className="h-4 w-4" />
    </button>
    <button
      className="p-1 rounded hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
      onClick={() => editor.chain().focus().toggleOrderedList().run()}
    >
      <ListOrdered className="h-4 w-4" />
    </button>
    <button
      className="p-1 rounded hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
      onClick={() => editor.chain().focus().undo().run()}
    >
      <Undo className="h-4 w-4" />
    </button>
    <button
      className="p-1 rounded hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
      onClick={() => editor.chain().focus().redo().run()}
    >
      <Redo className="h-4 w-4" />
    </button>
  </div>
);
