
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addSkill, updateSkill } from "../../actions/socialNetwork";

const SocialNetwork = ({ id, header, skil, submitValue, colorButton }) => {
  const {
    register,
    handleSubmit,
    reset,
    setValue,
  } = useForm();
  const dispatch = useDispatch();

  useEffect(() => {
    if (id === "editSkill") {
      setValue("type", skil.type);
      setValue("level", skil.level);
    }
  }, [skil, id, setValue]);

  const onClick = (data) => {
    if (id === "editSkill") {
      dispatch(updateSkill(skil._id, data));
    } else {
      dispatch(addSkill(data));
    }
    reset();
  };
  return (
    <div>
      <div
        className="modal fade"
        id={id}
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog  modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                {header}
              </h5>
              <button
                type="button"
                className="btn-close shadow-none"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div>
                <div className="row">
                  <div className="col-md-12 mb-md-0 mb-5 px-md-5">
                    <form>
                      <div className="row py-md-2">
                        <div className="col-md-12">
                          <p> ion-social-facebook,<br /> ion-social-twitter,<br /> ion-social-googleplus,<br /> ion-social-youtube-outline,<br /> ion-social-instagram-outline	</p>
                          
                          <div className="md-form mb-0">
                            <label htmlFor="title" className="">
                              Name Social Network
                            </label>
                            <textarea
                              type="text"
                              id="type"
                              name="type"
                              className="form-control shadow-none"
                              {...register("type")}
                            />
                          </div>
                        </div>

                        <div className="col-md-12">
                          <div className="md-form mb-0">
                            <label htmlFor="level" className="">
                              Link
                            </label>
                            <input
                              type="text"
                              id="level"
                              name="level"
                              className="form-control shadow-none"
                              {...register("level")}
                            />
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary shadow-none"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                className={`btn btn-${colorButton} shadow-none`}
                data-bs-dismiss="modal"
                onClick={handleSubmit(onClick)}
              >
                {submitValue}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
 
 );
};

export default SocialNetwork;
