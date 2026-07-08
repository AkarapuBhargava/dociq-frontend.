import { useEffect, useState } from "react";

import DashboardLayout from "../layout/Dashboardlayout";

import UploadCard from "../components/common/UploadCard";
import StatsCards from "../components/common/StatsCards";
import DocumentBreakdown from "../components/common/DocumentBreakdown";
import SearchBar from "../components/common/SearchBar";

import RejectedTable from "../components/rejected/RejectedTable";
import RejectedDetails from "../components/rejected/RejectedDetails";

import { uploadDocuments, getDocuments } from "../services/documentService";

export default function RejectedFiles() {
  const [files, setFiles] = useState([]);
  const [selectedFile, setSelectedFile] = useState(null);

  const [stats, setStats] = useState({
    total: 0,
    approved: 0,
    pending: 0,
    rejected: 0,
  });

  const [breakdown, setBreakdown] = useState({
    invoices: 0,
    resumes: 0,
    panCards: 0,
    unknown: 0,
  });

  const [loading, setLoading] = useState(false);

  const [search, setSearch] = useState("");

  const [filter, setFilter] = useState("Rejected");

  const [dragActive, setDragActive] = useState(false);

  const [selectedFiles, setSelectedFiles] = useState([]);

  useEffect(() => {
    loadDashboard();
  }, []);

  async function loadDashboard() {
    try {
      const docs = await getDocuments();

      // const documents = docs.files || docs;

      let documents = [];

      if (Array.isArray(docs)) {
        documents = docs;
      } else if (Array.isArray(docs.documents)) {
        documents = docs.documents;
      } else if (Array.isArray(docs.files)) {
        documents = docs.files;
      } else {
        console.log("Unexpected API response:", docs);
      }

      console.log(documents);

      setFiles(documents);

      const rejectedFiles = documents.filter(
        (doc) => doc.status === "Rejected",
      );

      setFiles(rejectedFiles);

      const approved = documents.filter((d) => d.status === "Approved").length;

      const pending = documents.filter((d) => d.status === "Pending").length;

      const rejected = documents.filter((d) => d.status === "Rejected").length;

      setStats({
        total: documents.length,
        approved,
        pending,
        rejected,
      });

      setBreakdown({
        invoices: documents.filter((d) => d.type === "Invoice").length,
        resumes: documents.filter((d) => d.type === "Resume").length,
        panCards: documents.filter((d) => d.type === "PAN").length,
        unknown: documents.filter((d) => d.type === "Unknown").length,
      });
    } catch (err) {
      console.log(err);
    }
  }

  const handleFileChange = (e) => {
    if (e.target.files) {
      setSelectedFiles(Array.from(e.target.files));
    }
  };

  const handleDrag = (e) => {
    e.preventDefault();

    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();

    setDragActive(false);

    if (e.dataTransfer.files) {
      setSelectedFiles(Array.from(e.dataTransfer.files));
    }
  };

  async function handleUpload() {
    if (selectedFiles.length === 0) return;

    try {
      setLoading(true);

      await uploadDocuments(selectedFiles);

      setSelectedFiles([]);

      loadDashboard();
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="space-y-6">
      {/* Upload + Stats */}

      <div className="grid xl:grid-cols-12 gap-6">
        <div className="xl:col-span-4">
          <UploadCard
            files={selectedFiles}
            loading={loading}
            isDragActive={dragActive}
            handleDrag={handleDrag}
            handleDrop={handleDrop}
            handleFileChange={handleFileChange}
            handleSubmit={handleUpload}
          />
        </div>

        <div className="xl:col-span-8 space-y-6">
          <StatsCards stats={stats} />

          <DocumentBreakdown breakdown={breakdown} stats={stats} />
        </div>
      </div>

      {/* Search */}

      <SearchBar
        search={search}
        setSearch={setSearch}
        filter={filter}
        setFilter={setFilter}
        onRefresh={loadDashboard}
        onExport={() => {}}
      />

      {/* Table */}

      <RejectedTable
        files={files}
        search={search}
        selectedFile={selectedFile}
        setSelectedFile={setSelectedFile}
      />

      {/* Details */}

      <RejectedDetails file={selectedFile} />
    </div>
  );
}
