import {
  Calendar,
  FileText,
  User,
  BadgeCheck,
  Download,
  Eye,
} from "lucide-react";

import StatusBadge from "../common/StatusBadge";
import ConfidenceBar from "../common/ConfidenceBar";

export default function ApprovedDetails({ file }) {
  if (!file) {
    return (
      <div className="bg-white rounded-2xl border border-gray-200 p-16 text-center">
        <FileText className="mx-auto text-gray-300" size={70} />

        <h2 className="mt-6 text-xl font-semibold text-slate-700">
          Select a document
        </h2>

        <p className="text-gray-500 mt-2">
          Click an approved file to view its details.
        </p>
      </div>
    );
  }

  return (
    <div className="grid lg:grid-cols-3 gap-6">
      {/* Preview */}

      <div className="lg:col-span-2 bg-white rounded-2xl border border-gray-200 shadow-sm">
        <div className="border-b p-5 flex justify-between items-center">
          <div>
            <h2 className="font-semibold text-lg">Document Preview</h2>

            <p className="text-sm text-gray-500 mt-1">{file.name}</p>
          </div>

          <div className="flex gap-2">
            <button className="w-10 h-10 rounded-xl border flex items-center justify-center hover:bg-gray-100">
              <Eye size={18} />
            </button>

            <button className="w-10 h-10 rounded-xl border flex items-center justify-center hover:bg-gray-100">
              <Download size={18} />
            </button>
          </div>
        </div>

        <div className="h-[500px] bg-gray-100 flex items-center justify-center rounded-b-2xl">
          {file.preview ? (
            <img
              src={file.preview}
              alt=""
              className="max-h-full object-contain"
            />
          ) : (
            <FileText size={90} className="text-gray-300" />
          )}
        </div>
      </div>

      {/* Information */}

      <div className="space-y-6">
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
          <h3 className="font-semibold text-lg mb-5">Document Information</h3>

          <div className="space-y-5">
            <div className="flex justify-between">
              <span className="text-gray-500">File</span>

              <span className="font-medium">{file.name}</span>
            </div>

            <div className="flex justify-between">
              <span className="text-gray-500">Type</span>

              <span>{file.type}</span>
            </div>

            <div className="flex justify-between">
              <span className="text-gray-500">Uploaded</span>

              <span className="flex items-center gap-2">
                <Calendar size={15} />

                {file.uploadedAt}
              </span>
            </div>

            <div className="flex justify-between">
              <span className="text-gray-500">Uploaded By</span>

              <span className="flex items-center gap-2">
                <User size={15} />
                Admin
              </span>
            </div>

            <div className="flex justify-between items-center">
              <span>Status</span>

              <StatusBadge status={file.status} />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
          <h3 className="font-semibold mb-4">AI Confidence</h3>

          <ConfidenceBar value={file.confidence} />
        </div>
      </div>
    </div>
  );
}
