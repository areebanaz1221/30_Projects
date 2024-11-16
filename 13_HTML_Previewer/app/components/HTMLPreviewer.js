
"use client";

import { useState } from "react";

export default function HTMLPreviewer() {
  const [htmlInput, setHtmlInput] = useState("<h1>Hello, world!</h1>");

  const handleInputChange = (e) => {
    setHtmlInput(e.target.value);
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold text-center mb-6">HTML Previewer</h1>
      <div className="row">
        <div className="col-md-6 mb-4">
          <label className="form-label text-lg font-medium">HTML Input</label>
          <textarea
            className="form-control w-full h-80 p-3 border rounded-lg resize-none"
            value={htmlInput}
            onChange={handleInputChange}
            placeholder="Type your HTML here..."
          />
        </div>
        <div className="col-md-6">
          <label className="form-label text-lg font-medium">Preview</label>
          <div
            className="border border-gray-300 p-4 rounded-lg bg-white h-80 overflow-auto"
            dangerouslySetInnerHTML={{ __html: htmlInput }}
          />
        </div>
      </div>
    </div>
  );
}
