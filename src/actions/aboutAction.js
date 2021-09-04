import {
    addProjectApi,
    getProjectsApi,
    deleteProjectApi,
    updateProjectApi,
  } from "../apis/aboutApi";
  import { toastSuccess, toastError } from "../shared/toast";
  
  export const getprojects = () => async (dispatch) => {
    try {
      const { data } = await getProjectsApi();
      dispatch({ type: "GET_PROJECTS", payload: data });
    } catch (error) {
      console.log(error);
    }
  };
  
  export const addProject = (abouts) => async (dispatch) => {
    try {
      const { data } = await addProjectApi(abouts);
      dispatch({ type: "ADD_PROJECT", payload: data });
      toastSuccess("Project Added Successfully");
    } catch (error) {
      console.log(error);
      toastError("Error while adding project");
    }
  };
  
  export const deleteProject = (id) => async (dispatch) => {
    try {
      await deleteProjectApi(id);
      dispatch({ type: "DELETE_PROJECT", payload: id });
      toastSuccess("Project deleted Successfully");
    } catch (error) {
      console.log(error);
      toastError("Error while deleting project");
    }
  };
  
  export const updateProject = (id, project) => async (dispatch) => {
    try {
      const { data } = await updateProjectApi(id, project);
      dispatch({
        type: "UPDATE_PROJECT",
        payload: data.project,
        //payload:{...project,_id: data.project._id},
      });
      toastSuccess("Project Updated Successfully");
    } catch (error) {
      console.log(error);
      toastError("Error while updating project");
    }
  };
  