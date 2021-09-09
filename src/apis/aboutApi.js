import api from "./serverApi";

export const addProjectApi = (project) => {
  return api.post("/about/", project);
};

export const getaboutsApi = () => {
  return api.get("/about/");
};

export const deleteProjectApi = (projectId) => {
  return api.delete(`/about/${projectId}`);
};

export const updateProjectApi = (projectId, project) => {
  return api.put(`/about/${projectId}`, project);
};
