// import config from "../config/config";
// import { Editor } from "@tinymce/tinymce-react";
// import { Controller } from "react-hook-form";

// export default function RTE({ name, control, label, defaultValue = "" }) {
//   return (
//     <div className="w-full">
//       {label && <label className="inline-block mb-1 pl-1">{label}</label>}

//       <Controller
//         name={name || "content"}
//         control={control}
//         render={({ field: { onChange } }) => (
//           <Editor
//             apiKey={config.tinymceApiKey}
//             initialValue={defaultValue}
//             init={{
//               initialValue: defaultValue,
//               height: 500,
//               menubar: true,
//               plugins: [
//                 "image",
//                 "advlist",
//                 "autolink",
//                 "lists",
//                 "link",
//                 "image",
//                 "charmap",
//                 "preview",
//                 "anchor",
//                 "searchreplace",
//                 "visualblocks",
//                 "code",
//                 "fullscreen",
//                 "insertdatetime",
//                 "media",
//                 "table",
//                 "code",
//                 "help",
//                 "wordcount",
//                 "anchor",
//               ],
//               toolbar:
//                 "undo redo | blocks | image | bold italic forecolor | alignleft aligncenter bold italic forecolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent |removeformat | help",
//               content_style:
//                 "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
//             }}
//             onEditorChange={onChange}
//           />
//         )}
//       />
//     </div>
//   );
// }

// Import necessary components and extensions
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import {
  FaBold,
  FaItalic,
  FaHeading,
  FaUnderline,
  FaStrikethrough,
  FaListUl,
  FaListOl,
  FaQuoteRight,
  FaUndo,
  FaRedo,
} from "react-icons/fa";

const extensions = [StarterKit];

export default function RTE() {
  const editor = useEditor({
    extensions,
  });

  // Toolbar component for formatting options, styled with Tailwind
  const Toolbar = () => (
    <div className="toolbar flex justify-between bg-gray-100 p-2 rounded-t-lg border-b border-gray-300">
      <button
        className="p-1 rounded hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
        onClick={() => editor.chain().focus().toggleBold().run()}
      >
        <FaBold />
      </button>
      <button
        className="p-1 rounded hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
        onClick={() => editor.chain().focus().toggleItalic().run()}
      >
        <FaItalic />
      </button>
      <button
        className="p-1 rounded hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
        onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
      >
        <FaHeading />
      </button>
      <button
        className="p-1 rounded hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
        onClick={() => editor.chain().focus().toggleUnderline().run()}
      >
        <FaUnderline />
      </button>
      <button
        className="p-1 rounded hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
        onClick={() => editor.chain().focus().toggleStrike().run()}
      >
        <FaStrikethrough />
      </button>
      <button
        className="p-1 rounded hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
        onClick={() => editor.chain().focus().toggleBulletList().run()}
      >
        <FaListUl />
      </button>
      <button
        className="p-1 rounded hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
      >
        <FaListOl />
      </button>
      <button
        className="p-1 rounded hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
        onClick={() => editor.chain().focus().toggleBlockquote().run()}
      >
        <FaQuoteRight />
      </button>
      <button
        className="p-1 rounded hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
        onClick={() => editor.chain().focus().undo().run()}
      >
        <FaUndo />
      </button>
      <button
        className="p-1 rounded hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
        onClick={() => editor.chain().focus().redo().run()}
      >
        <FaRedo />
      </button>
    </div>
  );

  if (!editor) {
    return null;
  }

  return (
    <>
      <Toolbar />
      <div className="flex flex-col bg-white  p-4 rounded-b-lg border border-gray-300">
        <EditorContent editor={editor} className="flex-1" />
      </div>
    </>
  );
}
