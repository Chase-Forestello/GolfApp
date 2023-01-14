import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "../styles/PlayerNames.css";
import "../styles/Scorecard.css";
import map from "../img/theQuarryGolfCourse.png";

export default function Scorecard(props) {
  const { state } = useLocation();
  console.log(state);

  function Scorecard() {
    let scorecardHtml = [];
    for (let i = 0; i < state.playerCount; i++) {
      scorecardHtml.push(
        <div key={i}>
          <button
            type="button"
            className="btn scorecard-btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target={"#Modal" + i}
          >
            {state.players[i]}
          </button>

          <div
            className="modal fade"
            id={"Modal" + i}
            tabIndex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-fullscreen">
              <div className="modal-content">
                <div className="modal-header">
                  <h1 className="modal-title fs-5" id="exampleModalLabel">
                    Modal title
                  </h1>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body">...</div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
    return scorecardHtml;
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-12 col-12">
          <div className="card" id="scoreCard">
            <div id="scoreCardHeader" className="card">
              <h1 id="courseNameText">The Quarry Golf Course</h1>
              <button
                type="button"
                className="btn map-btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                Map
              </button>

              <div
                className="modal fade"
                id="exampleModal"
                taBindex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog modal-fullscreen">
                  <div className="modal-content">
                    <div className="modal-header map-header">
                      <h1 className="modal-title fs-5 col-10" id="exampleModalLabel">
                        Modal title
                      </h1>
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div className="modal-body map-body">
                    <img id="quarryMap" src={map} referrerpolicy="no-referrer" alt="map" className="map-img" />
                    </div>
                    <div className="modal-footer map-footer">
                      <button
                        type="button"
                        className="btn btn-secondary"
                        data-bs-dismiss="modal"
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Scorecard />
          </div>
        </div>
      </div>
    </div>
  );
}
