import api from "./serverApi";

export const addSkillApi = (skill) => {
  return api.post("/social/", skill);
};

export const getSkillsApi = () => {
  return api.get("/social/");
};

export const deleteSkillApi = (skillId) => {
  return api.delete(`/social/${skillId}`);
};

export const updateSkillApi = (skillId, skill) => {
  return api.put(`/social/${skillId}`, skill);
};
