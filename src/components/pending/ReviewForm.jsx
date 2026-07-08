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

export default function ReviewForm({ file, onApprove, onReject, onSave }) {
  const [formData, setFormData] = useState({});

  useEffect(() => {
    if (file) {
      setFormData({
        invoiceNumber: file.invoiceNumber || "",
        vendor: file.vendor || "",
        amount: file.amount || "",
        date: file.date || "",
        remarks: file.remarks || "",
      });
    }
  }, [file]);

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
          {file.preview ? (
            <img
              src={file.preview}
              alt=""
              className="max-h-full object-contain"
            />
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

              <span className="font-medium">{file.name}</span>
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

        {/* Editable Fields */}

        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
          <h3 className="font-semibold text-lg mb-5">Extracted Fields</h3>

          <div className="space-y-4">
            <div>
              <label className="text-sm text-gray-500">Invoice Number</label>

              <input
                value={formData.invoiceNumber}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    invoiceNumber: e.target.value,
                  })
                }
                className="w-full mt-2 border rounded-xl px-4 py-3"
              />
            </div>

            <div>
              <label className="text-sm text-gray-500">Vendor Name</label>

              <input
                value={formData.vendor}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    vendor: e.target.value,
                  })
                }
                className="w-full mt-2 border rounded-xl px-4 py-3"
              />
            </div>

            <div>
              <label className="text-sm text-gray-500">Amount</label>

              <input
                value={formData.amount}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    amount: e.target.value,
                  })
                }
                className="w-full mt-2 border rounded-xl px-4 py-3"
              />
            </div>
            <div>
              <label className="text-sm text-gray-500">Invoice Date</label>

              <input
                type="date"
                value={formData.date}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    date: e.target.value,
                  })
                }
                className="w-full mt-2 border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>

            <div>
              <label className="text-sm text-gray-500">Remarks</label>

              <textarea
                rows={4}
                value={formData.remarks}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    remarks: e.target.value,
                  })
                }
                className="w-full mt-2 border border-gray-300 rounded-xl px-4 py-3 resize-none focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>
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
