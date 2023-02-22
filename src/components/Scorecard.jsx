import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "../styles/playerNames.css";
import "../styles/scorecard.css";
import map from "../img/theQuarryGolfCourse.png";
import { Dropdown } from "bootstrap";

export default function Scorecard(props) {
  const { state } = useLocation();
  console.log(state);

  // function handleYardageChange () {
  //   for (let i = 0; i < state.playerCount; i++) {
  //     let yardageSelect = document.getElementById("yardageSelect" + i);
  //     let{ yardage  + i}= yardageSelect.value;
  //     console.log{(yardage) + i};
  //   }
  // }

  // let lastBtn

  const inputForm = (
    <div>
      <input
        id="strokeNum"
        type="number"
        inputMode="numeric"
        pattern="[0-9]*"
        name="strokeNum"
        className="form-control text-center score-input"
      />
    </div>
  );

  
  const parForm = (
    <div>
      <select className="par-inputs">
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>
    </div>
  );

  // function handleYardageChange(e) {
  //   let yardage = e.target.value;
  //   let yardages = "";
  //   let player = e.target.id;
  //   console.log(player.charAt(player.length - 1));
  //   console.log(yardage);
  //   let test = document.getElementsByClassName(
  //     "yardage" + player.charAt(player.length - 1)
  //   );
  //   console.log(test);
  //   for (let i = 0; i < test.length; i++) {
  //     console.log(test[i].innerHTML);
  //   }

  //   if (yardage === "regular") {
  //     yardages = [
  //       330, 385, 106, 258, 474, 293, 360, 125, 267, 413, 318, 138, 292, 381,
  //       480, 174, 309, 473,
  //     ];
  //   } else if (yardage === "championship") {
  //     yardages = [
  //       361, 423, 136, 292, 514, 324, 374, 142, 307, 437, 351, 164, 331, 410,
  //       495, 201, 657, 509,
  //     ];
  //   } else if (yardage === "professional") {
  //     yardages = [
  //       388, 453, 168, 325, 544, 383, 399, 158, 349, 474, 370, 205, 362, 442,
  //       528, 242, 386, 564,
  //     ];
  //   }
  //   for (let i = 0; i < test.length; i++) {
  //     test[i].innerHTML = yardages[i];
  //   }
  // }

  function handleTotalClick(e) {
    let total = 0;
    let player = e.target.id;
    let parTotal = [];
    let parInputs = document.getElementsByClassName("par-inputs");
    for(let i = 0; i < parInputs.length; i++){
      console.log(parInputs[i].value);
      parTotal.push(parInputs[i].value);
    }
    console.log(parTotal);
    console.log(player);
    let scoreInputs = document.getElementsByClassName("score-input");
    console.log(scoreInputs.innerHTML);
    player = "total" + player.charAt(player.length - 1);
    for (let i = 0; i < scoreInputs.length; i++) {
      if (scoreInputs[i].value !== "") {
        total += parseInt(scoreInputs[i].value);
      }
    }
    document.getElementById(player).innerHTML = total;
  }

  function ScorecardModals() {
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
                    Scorecard for {state.players[i]}
                  </h1>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body">
                  <div className="table-responsive">
                    <table className="table table-dark table-hover">
                      <thead>
                        <tr>
                          <th scope="col">Hole</th>
                          {/* <th scope="col">
                            <div>
                              <select
                                onChange={handleYardageChange}
                                id={"yardageSelect" + i}
                                className="yardage-select"
                              >
                                <option value="regular">Regular</option>
                                <option value="championship">
                                  Championship
                                </option>
                                <option value="professional">
                                  Professional
                                </option>
                              </select>
                            </div>
                            Yardage
                          </th> */}
                          <th scope="col">Par</th>
                          <th scope="col">Score</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th scope="row">1</th>
                          {/* <td className={"yardage" + i}>330</td> */}
                          <td>{parForm}</td>
                          <td className="score-input-div">{inputForm}</td>
                        </tr>
                        <tr>
                          <th scope="row">2</th>
                          {/* <td className={"yardage" + i}>385</td> */}
                          <td>{parForm}</td>
                          <td>{inputForm}</td>
                        </tr>
                        <tr>
                          <th scope="row">3</th>
                          {/* <td className={"yardage" + i}>106</td> */}
                          <td>{parForm}</td>
                          <td>{inputForm}</td>
                        </tr>
                        <tr>
                          <th scope="row">4</th>
                          {/* <td className={"yardage" + i}>258</td> */}
                          <td>{parForm}</td>
                          <td>{inputForm}</td>
                        </tr>
                        <tr>
                          <th scope="row">5</th>
                          {/* <td className={"yardage" + i}>474</td> */}
                          <td>{parForm}</td>
                          <td>{inputForm}</td>
                        </tr>
                        <tr>
                          <th scope="row">6</th>
                          {/* <td className={"yardage" + i}>293</td> */}
                          <td>{parForm}</td>
                          <td>{inputForm}</td>
                        </tr>
                        <tr>
                          <th scope="row">7</th>
                          {/* <td className={"yardage" + i}>360</td> */}
                          <td>{parForm}</td>
                          <td>{inputForm}</td>
                        </tr>
                        <tr>
                          <th scope="row">8</th>
                          {/* <td className={"yardage" + i}>125</td> */}
                          <td>{parForm}</td>
                          <td>{inputForm}</td>
                        </tr>
                        <tr>
                          <th scope="row">9</th>
                          {/* <td className={"yardage" + i}>267</td> */}
                          <td>{parForm}</td>
                          <td>{inputForm}</td>
                        </tr>
                        <tr>
                          <th scope="row">10</th>
                          {/* <td className={"yardage" + i}>413</td> */}
                          <td>{parForm}</td>
                          <td>{inputForm}</td>
                        </tr>
                        <tr>
                          <th scope="row">11</th>
                          {/* <td className={"yardage" + i}>318</td> */}
                          <td>{parForm}</td>
                          <td>{inputForm}</td>
                        </tr>
                        <tr>
                          <th scope="row">12</th>
                          {/* <td className={"yardage" + i}>138</td> */}
                          <td>{parForm}</td>
                          <td>{inputForm}</td>
                        </tr>
                        <tr>
                          <th scope="row">13</th>
                          {/* <td className={"yardage" + i}>292</td> */}
                          <td>{parForm}</td>
                          <td>{inputForm}</td>
                        </tr>
                        <tr>
                          <th scope="row">14</th>
                          {/* <td className={"yardage" + i}>381</td> */}
                          <td>{parForm}</td>
                          <td>{inputForm}</td>
                        </tr>
                        <tr>
                          <th scope="row">15</th>
                          {/* <td className={"yardage" + i}>480</td> */}
                          <td>{parForm}</td>
                          <td>{inputForm}</td>
                        </tr>
                        <tr>
                          <th scope="row">16</th>
                          {/* <td className={"yardage" + i}>174</td> */}
                          <td>{parForm}</td>
                          <td>{inputForm}</td>
                        </tr>
                        <tr>
                          <th scope="row">17</th>
                          {/* <td className={"yardage" + i}>309</td> */}
                          <td>{parForm}</td>
                          <td>{inputForm}</td>
                        </tr>
                        <tr>
                          <th scope="row">18</th>
                          {/* <td className={"yardage" + i}>473</td> */}
                          <td>{parForm}</td>
                          <td>{inputForm}</td>
                        </tr>
                      </tbody>
                    </table>
                    <button
                      type="button"
                      id={"total" + i}
                      onClick={handleTotalClick}
                      className="btn btn-primary"
                    >
                      Total
                    </button>
                    <span id={"totalText" + i}></span>
                  </div>
                </div>
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
              <h1 id="courseNameText">Scorecard</h1>
              {/* <button
                type="button"
                className="btn map-btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                Map
              </button> */}

              <div
                className="modal fade"
                id="exampleModal"
                tabIndex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog modal-fullscreen">
                  <div className="modal-content">
                    <div className="modal-header map-header">
                      <h1
                        className="modal-title fs-5 col-10"
                        id="exampleModalLabel"
                      ></h1>
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    {/* <div className="modal-body map-body">
                      <img
                        id="quarryMap"
                        src={map}
                        referrerPolicy="no-referrer"
                        alt="map"
                        className="map-img"
                      />
                    </div> */}
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
            <ScorecardModals />
          </div>
        </div>
      </div>
    </div>
  );
}
