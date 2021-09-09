import api from "./serverApi";

export const addProjectApi = (project) => {
  return api.post("/teacher/", project);
};

export const getTeachersApi = () => {
  return api.get("/teacher/");
};

export const deleteProjectApi = (projectId) => {
  return api.delete(`/teacher/${projectId}`);
};

export const updateProjectApi = (projectId, project) => {
  return api.put(`/teacher/${projectId}`, project);
};
