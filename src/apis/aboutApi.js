import api from "./serverApi";

export const addProjectApi = (project) => {
  return api.post("/abouts/", project);
};

export const getProjectsApi = () => {
  return api.get("/abouts/");
};

export const deleteProjectApi = (projectId) => {
  return api.delete(`/abouts/${projectId}`);
};

export const updateProjectApi = (projectId, project) => {
  return api.put(`/abouts/${projectId}`, project);
};
