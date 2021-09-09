import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteProject } from "../actions/sliderAction";
import ProjectModal from "../components/Admin/HomeSliderModel";
import Table from "../components/Admin/Table";

function SliderAdmin() {
  const homeslider = useSelector((state) => state.homeslider);
  const dispatch = useDispatch();
  const [selectedProject, setSelectedProject] = useState({
    projectImage: ""
  });

  const ondelteClick = (project) => {
    dispatch(deleteProject(project._id));
  };

  const onEditClick = (data) => {
    setSelectedProject(data);
  };

  return (
    <div className="container">
      <Table
        ondelteClick={ondelteClick}
        onEditClick={onEditClick}
        idModalAdd="addProject"
        idModalEdit="editProject"
        title="Slider"
        headerText={["Image"]}
        headerProprities={["projectImage"]}
        tableData={homeslider}
      />

      <ProjectModal
        id="addProject"
        header="Add Project"
        proj={deleteProject}
        submitValue="Add Project"
        colorButton="success"
      />
      <ProjectModal
        id="editProject"
        header="Edit Project"
        proj={selectedProject}
        submitValue="Edit Project"
        colorButton="warning"
      />
    </div>
  );
}

export default SliderAdmin;
