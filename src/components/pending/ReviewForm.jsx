import { useState, useEffect } from "react";
import {
  FileText,
  Save,
  CheckCircle2,
  XCircle,
  Calendar,
  User,
} from "lucide-react";

import StatusBadge from "../common/StatusBadge";
import ConfidenceBar from "../common/ConfidenceBar";

export default function ReviewForm({
  file,
  viewMode,
  onApprove,
  onReject,
  onSave,
}) {
  const [formData, setFormData] = useState({});

  useEffect(() => {
    if (file) {
      setFormData(file);
    }
  }, [file]);
  const ignoreFields = [
    "id",
    "preview",
    "file_url",
    "created_at",
    "updated_at",
    "confidence",
    "status",
  ];

  if (!file) {
    return (
      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-20 text-center">
        <FileText size={70} className="mx-auto text-gray-300" />

        <h2 className="mt-5 text-xl font-semibold">Select Pending Document</h2>

        <p className="text-gray-500 mt-2">
          Choose a document from the table to review.
        </p>
      </div>
    );
  }

  return (
    <div className="grid xl:grid-cols-3 gap-6">
      {/* Preview */}

      <div className="xl:col-span-2 bg-white rounded-2xl border border-gray-200 shadow-sm">
        <div className="border-b p-5">
          <h2 className="text-lg font-semibold">Document Preview</h2>

          <p className="text-sm text-gray-500 mt-1">{file.name}</p>
        </div>

        <div className="h-[600px] bg-gray-100 flex items-center justify-center">
          {file.file_url ? (
            file.file_name?.toLowerCase().endsWith(".pdf") ? (
              <iframe
                src={file.file_url}
                className="w-full h-full"
                title="Document Preview"
              />
            ) : (
              <img
                src={file.file_url}
                alt={file.file_name}
                className="max-h-full object-contain"
              />
            )
          ) : (
            <FileText className="text-gray-300" size={90} />
          )}
        </div>
      </div>

      {/* Review Form */}

      <div className="space-y-6">
        {/* Information */}

        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
          <h3 className="font-semibold text-lg mb-5">Document Information</h3>

          <div className="space-y-4">
            <div className="flex justify-between">
              <span className="text-gray-500">File</span>

              <span className="font-medium">{file.file_name}</span>
            </div>

            <div className="flex justify-between">
              <span className="text-gray-500">Uploaded</span>

              <span className="flex gap-2 items-center">
                <Calendar size={15} />

                {new Date(file.created_at).toLocaleString()}
              </span>
            </div>

            <div className="flex justify-between">
              <span className="text-gray-500">Uploaded By</span>

              <span className="flex gap-2 items-center">
                <User size={15} />
                {file.uploaded_by || "Unknown"}
              </span>
            </div>

            <div className="flex justify-between items-center">
              <span>Status</span>

              <StatusBadge status={file.status} />
            </div>
          </div>
        </div>

        {/* Confidence */}

        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
          <h3 className="font-semibold mb-4">AI Confidence</h3>

          <ConfidenceBar value={file.confidence} />
        </div>

        {/* Editable Fields */}

        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
          <h3 className="font-semibold text-lg mb-5">Extracted Fields</h3>

          <div className="space-y-4">
            {Object.entries(formData.extracted_data || {})
              .filter(([key]) => !ignoreFields.includes(key))
              .map(([key, value]) => (
                <div key={key}>
                  <label className="block text-sm text-gray-500 mb-2 capitalize">
                    {key.replace(/_/g, " ")}
                  </label>

                  {typeof value === "object" && value !== null ? (
                    <textarea
                      rows={8}
                      readOnly={viewMode}
                      value={JSON.stringify(value, null, 2)}
                      className={`w-full border rounded-xl px-4 py-3 font-mono text-sm ${
                        viewMode ? "bg-gray-100" : "bg-white"
                      }`}
                    />
                  ) : (
                    <input
                      type="text"
                      value={value ?? ""}
                      readOnly={viewMode}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          [key]: e.target.value,
                        })
                      }
                      className={`w-full border rounded-xl px-4 py-3 ${
                        viewMode ? "bg-gray-100" : "bg-white"
                      }`}
                    />
                  )}
                </div>
              ))}
          </div>
        </div>

        {/* Actions */}

        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
          <h3 className="text-lg font-semibold mb-5">Review Actions</h3>

          <div className="space-y-3">
            <button
              onClick={() => onSave(formData)}
              className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl transition"
            >
              <Save size={18} />
              Save Changes
            </button>

            <button
              onClick={() => onApprove(file.id)}
              className="w-full flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl transition"
            >
              <CheckCircle2 size={18} />
              Approve Document
            </button>

            <button
              onClick={() => onReject(file.id)}
              className="w-full flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white py-3 rounded-xl transition"
            >
              <XCircle size={18} />
              Reject Document
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
