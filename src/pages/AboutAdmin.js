import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteProject } from "../actions/aboutAction";
import ProjectModal from "../components/Admin/AboutModel";
import Table from "../components/Admin/Table";

function AboutAdmin() {
  const projects = useSelector((state) => state.projects);
  const dispatch = useDispatch();
  const [selectedProject, setSelectedProject] = useState({
    title: "",
    description: "",   
    projectImage: "",
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
        title="About"
        headerText={["Title",  "Image", "Edit"]}
        headerProprities={["title",  "projectImage",".","."]}
        tableData={projects}
      />

      <ProjectModal
        id="addProject"
        header="Add About"
        proj={deleteProject}
        submitValue="Add Project"
        colorButton="success"
      />
      <ProjectModal
        id="editProject"
        header="Edit About"
        proj={selectedProject}
        submitValue="Edit Project"
        colorButton="warning"
      />
    </div>
  );
}

export default AboutAdmin;
