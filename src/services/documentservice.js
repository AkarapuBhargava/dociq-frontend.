// import axiosInstance from "../api/axiosInstance";

// export const uploadDocuments = async (files) => {
//   const formData = new FormData();

//   files.forEach((file) => {
//     formData.append("files", file);
//   });

//   const response = await axiosInstance.post("/documents/upload", formData, {
//     headers: {
//       "Content-Type": "multipart/form-data",
//     },
//   });

//   return response.data;
// };

import axiosInstance from "../api/axiosInstance";

/* Upload Documents */
export const uploadDocuments = async (files) => {
  const formData = new FormData();

  files.forEach((file) => {
    formData.append("files", file);
  });

  const response = await axiosInstance.post("/documents/upload", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  return response.data;
};

/* Get All Documents */
export const getDocuments = async () => {
  const response = await axiosInstance.get("/documents/all");
  return response.data;
};

/* Approved Documents */
export const getApprovedDocuments = async () => {
  const response = await axiosInstance.get("/documents/approved");
  return response.data;
};

/* Pending Documents */
export const getPendingDocuments = async () => {
  const response = await axiosInstance.get("/documents/pending");
  return response.data;
};

/* Rejected Documents */
export const getRejectedDocuments = async () => {
  const response = await axiosInstance.get("/documents/rejected");
  return response.data;
};

/* Approve Document */
export const approveDocument = async (id) => {
  const response = await axiosInstance.put(`/documents/${id}/approve`);
  return response.data;
};

/* Reject Document */
export const rejectDocument = async (id, payload = {}) => {
  const response = await axiosInstance.put(`/documents/${id}/reject`, payload);
  return response.data;
};

/* Get Single Document */
export const getDocumentById = async (id) => {
  const response = await axiosInstance.get(`/documents/${id}`);
  return response.data;
};

/* Delete Document */
export const deleteDocument = async (id) => {
  const response = await axiosInstance.delete(`/documents/${id}`);
  return response.data;
};
