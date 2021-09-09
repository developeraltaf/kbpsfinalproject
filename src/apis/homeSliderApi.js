import api from "./serverApi";

export const addProjectApi = (project) => {
  return api.post("/homeslider/", project);
};

export const getslidersApi = () => {
  return api.get("/homeslider/");
};

export const deleteProjectApi = (projectId) => {
  return api.delete(`/homeslider/${projectId}`);
};

export const updateProjectApi = (projectId, project) => {
  return api.put(`/homeslider/${projectId}`, project);
};
