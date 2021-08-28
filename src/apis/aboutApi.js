import api from "./serverApi";

export const addProjectApi = (project) => {
  return api.post("/about/", project);
};

export const getProjectsApi = () => {
  return api.get("/about/");
};

export const deleteProjectApi = (projectId) => {
  return api.delete(`/about/${projectId}`);
};

export const updateProjectApi = (projectId, project) => {
  return api.put(`/about/${projectId}`, project);
};
