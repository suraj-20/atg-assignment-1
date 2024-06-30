import React from "react";

const AddYourOwnCard = () => {
  return (
    <div className="add-you-own-card-section">
      <div className="add-your-own-card-container card-container">
        <div className="card">
          <div className="card-body p-5 d-flex flex-column gap-1 justify-content-between">
            <h4 className="card-title d-flex align-items-center gap-3">
              <i
                style={{ color: "#8064a2" }}
                class="fa-solid fa-circle-plus"
              ></i>{" "}
              Add your own
            </h4>
            <p className="card-text">
              Add your own Are you a teacher or expert? Do you sell or rent out
              equipment, venue or event tickets? Or, you know someone who should
              be on hobbycue? Go ahead and Add your Own page Add new
            </p>
            <button
              type="submit"
              style={{ width: "140px" }}
              className="btn btn-primary"
            >
              Add New
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddYourOwnCard;
