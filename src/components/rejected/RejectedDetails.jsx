import {
  FileText,
  Calendar,
  User,
  Download,
  Eye,
  AlertTriangle,
} from "lucide-react";

import StatusBadge from "../common/StatusBadge";
import ConfidenceBar from "../common/ConfidenceBar";

export default function RejectedDetails({ file }) {
  if (!file) {
    return (
      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-20 text-center">
        <FileText size={70} className="mx-auto text-gray-300" />

        <h2 className="mt-6 text-xl font-semibold text-slate-700">
          Select Rejected Document
        </h2>

        <p className="text-gray-500 mt-2">
          Select a rejected file to view its details.
        </p>
      </div>
    );
  }

  return (
    <div className="grid xl:grid-cols-3 gap-6">
      {/* Preview */}

      <div className="xl:col-span-2 bg-white rounded-2xl border border-gray-200 shadow-sm">
        <div className="flex justify-between items-center border-b p-5">
          <div>
            <h2 className="text-lg font-semibold">Document Preview</h2>

            <p className="text-sm text-gray-500 mt-1">{file.name}</p>
          </div>

          <div className="flex gap-2">
            <button className="w-10 h-10 rounded-xl border hover:bg-gray-100 flex items-center justify-center">
              <Eye size={18} />
            </button>

            <button className="w-10 h-10 rounded-xl border hover:bg-gray-100 flex items-center justify-center">
              <Download size={18} />
            </button>
          </div>
        </div>

        <div className="h-[550px] bg-gray-100 flex items-center justify-center">
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

      {/* Right Side */}

      <div className="space-y-6">
        {/* Info */}

        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
          <h3 className="text-lg font-semibold mb-5">Document Information</h3>

          <div className="space-y-4">
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

              <span className="flex gap-2 items-center">
                <Calendar size={15} />

                {file.uploadedAt}
              </span>
            </div>

            <div className="flex justify-between">
              <span className="text-gray-500">Uploaded By</span>

              <span className="flex gap-2 items-center">
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

        {/* Confidence */}

        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
          <h3 className="font-semibold mb-4">AI Confidence</h3>

          <ConfidenceBar value={file.confidence} />
        </div>

        {/* Reject Reason */}

        <div className="bg-red-50 border border-red-200 rounded-2xl p-6">
          <div className="flex items-center gap-2 mb-4">
            <AlertTriangle className="text-red-600" size={20} />

            <h3 className="font-semibold text-red-700">Rejection Reason</h3>
          </div>

          <p className="text-sm leading-7 text-red-700">
            {file.reason ||
              "Document verification failed due to missing mandatory information or low OCR confidence. Please upload a clear and valid document."}
          </p>
        </div>
      </div>
    </div>
  );
}
