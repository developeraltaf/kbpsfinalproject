import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteSkill } from "../actions/socialNetwork";
import SkillModal from "../components/Admin/SocialNetwork";
import Table from "../components/Admin/Table";

const SocialNetworks = () => {
  const skills = useSelector((state) => state.social);
  const dispatch = useDispatch();
  const [selectedSkill, setSelectedSkill] = useState({
    type: "",
    level:"",
  });

  const ondelteClick = (skill) => {
    dispatch(deleteSkill(skill._id));
  };

  const onEditClick = (skill) => {
    setSelectedSkill(skill);
  };

  return (
    <div className="skill">
      <div className="container">
        <Table
          ondelteClick={ondelteClick}
          idModalAdd="addSkill"
          idModalEdit="editSkill"
          onEditClick={onEditClick}
          title="Social Network"
          headerText={["Name","Social Link"]}
          headerProprities={["type","level"]}
        

          tableData={skills}
        />
      </div>
      <SkillModal
        id="addSkill"
        header="Add Skill"
        skil={selectedSkill}
        submitValue="Add Skill"
        colorButton="success"
      />
      <SkillModal
        id="editSkill"
        header="Edit Skill"
        skil={selectedSkill}
        submitValue="Edit Skill"
        colorButton="warning"
      />
    </div>
  );
};

export default SocialNetworks;
