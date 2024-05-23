/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import Offcanvas from "../../../Entryfile/offcanvance";
import Excellence from "../../../_components/prereview/excellence";

const Performance = () => {
  return (
    <>
      <div className="page-wrapper">
        <Helmet>
          <title>Performance - HRMS Admin Template</title>
          <meta name="description" content="Login page" />
        </Helmet>
        {/* Page Content */}
        <div className="content container-fluid">
          {/* Page Header */}
          <div className="page-header">
            <div className="row">
              <div className="col-sm-12">
                <h3 className="page-title">Performance</h3>
                <ul className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to="/app/main/dashboard">Dashboard</Link>
                  </li>
                  <li className="breadcrumb-item active">Performance</li>
                </ul>
              </div>
            </div>
          </div>
          {/* /Page Header */}
          <section className="review-section information">
            <div className="review-header text-center">
              <h3 className="review-title">Employee Basic Information</h3>
              <p className="text-muted">Lorem ipsum dollar</p>
            </div>
            <div className="row">
              <div className="col-md-12 col-sm-12">
                <div className="table-responsive">
                  <table className="table table-bordered table-nowrap review-table mb-0">
                    <tbody>
                      <tr>
                        <td>
                          <form>
                            <div className="input-block">
                              <label htmlFor="name">Name</label>
                              <input
                                type="text"
                                className="form-control"
                                id="name"
                              />
                            </div>
                            <div className="input-block">
                              <label htmlFor="depart3">Department</label>
                              <input
                                type="text"
                                className="form-control"
                                id="depart3"
                              />
                            </div>
                            <div className="input-block">
                              <label htmlFor="departa">Designation</label>
                              <input
                                type="text"
                                className="form-control"
                                id="departa"
                              />
                            </div>
                            <div className="input-block">
                              <label htmlFor="qualif">Qualification: </label>
                              <input
                                type="text"
                                className="form-control"
                                id="qualif"
                              />
                            </div>
                          </form>
                        </td>
                        <td>
                          <form>
                            <div className="input-block">
                              <label htmlFor="doj">Emp ID</label>
                              <input
                                type="text"
                                className="form-control"
                                defaultValue="DGT-009"
                              />
                            </div>
                            <div className="input-block">
                              <label htmlFor="doj">Date of Join</label>
                              <input
                                type="text"
                                className="form-control"
                                id="doj"
                              />
                            </div>
                            <div className="input-block">
                              <label htmlFor="doc">Date of Confirmation</label>
                              <input
                                type="text"
                                className="form-control"
                                id="doc"
                              />
                            </div>
                            <div className="input-block">
                              <label htmlFor="qualif1">
                                Previous years of Exp
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                id="qualif1"
                              />
                            </div>
                          </form>
                        </td>
                        <td>
                          <form>
                            <div className="input-block">
                              <label htmlFor="name1"> RO's Name</label>
                              <input
                                type="text"
                                className="form-control"
                                id="name1"
                              />
                            </div>
                            <div className="input-block">
                              <label htmlFor="depart1"> RO Designation: </label>
                              <input
                                type="text"
                                className="form-control"
                                id="depart1"
                              />
                            </div>
                          </form>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </section>
          {/*Professional Excellence */}
          {/*Personal Excellence */}

          <Excellence />

          {/*/Personal Excellence */}
          {/*/Professional Excellence */}
          <section className="review-section">
            <div className="review-header text-center">
              <h3 className="review-title">
                Special Initiatives, Achievements, contributions if any
              </h3>
              <p className="text-muted">Lorem ipsum dollar</p>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="table-responsive">
                  <table
                    className="table table-bordered table-review review-table mb-0"
                    id="table_achievements"
                  >
                    <thead>
                      <tr>
                        <th style={{ width: "40px" }}>#</th>
                        <th>By Self</th>
                        <th>RO's Comment</th>
                        <th>HOD's Comment</th>
                        <th style={{ width: "64px" }}>
                          <button
                            type="button"
                            className="btn btn-primary btn-add-row"
                          >
                            <i className="fa fa-plus" />
                          </button>
                        </th>
                      </tr>
                    </thead>
                    <tbody id="table_achievements_tbody">
                      <tr>
                        <td>1</td>
                        <td>
                          <input type="text" className="form-control" />
                        </td>
                        <td>
                          <input type="text" className="form-control" />
                        </td>
                        <td>
                          <input type="text" className="form-control" />
                        </td>
                        <td />
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>
                          <input type="text" className="form-control" />
                        </td>
                        <td>
                          <input type="text" className="form-control" />
                        </td>
                        <td>
                          <input type="text" className="form-control" />
                        </td>
                        <td />
                      </tr>
                      <tr>
                        <td>3</td>
                        <td>
                          <input type="text" className="form-control" />
                        </td>
                        <td>
                          <input type="text" className="form-control" />
                        </td>
                        <td>
                          <input type="text" className="form-control" />
                        </td>
                        <td />
                      </tr>
                      <tr>
                        <td>4</td>
                        <td>
                          <input type="text" className="form-control" />
                        </td>
                        <td>
                          <input type="text" className="form-control" />
                        </td>
                        <td>
                          <input type="text" className="form-control" />
                        </td>
                        <td />
                      </tr>
                      <tr>
                        <td>5</td>
                        <td>
                          <input type="text" className="form-control" />
                        </td>
                        <td>
                          <input type="text" className="form-control" />
                        </td>
                        <td>
                          <input type="text" className="form-control" />
                        </td>
                        <td />
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </section>
          <section className="review-section">
            <div className="review-header text-center">
              <h3 className="review-title">Comments on the role</h3>
              <p className="text-muted">
                alterations if any requirred like addition/deletion of
                responsibilities
              </p>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="table-responsive">
                  <table
                    className="table table-bordered table-review review-table mb-0"
                    id="table_alterations"
                  >
                    <thead>
                      <tr>
                        <th style={{ width: "40px" }}>#</th>
                        <th>By Self</th>
                        <th>RO's Comment</th>
                        <th>HOD's Comment</th>
                        <th style={{ width: "64px" }}>
                          <button
                            type="button"
                            className="btn btn-primary btn-add-row"
                          >
                            <i className="fa fa-plus" />
                          </button>
                        </th>
                      </tr>
                    </thead>
                    <tbody id="table_alterations_tbody">
                      <tr>
                        <td>1</td>
                        <td>
                          <input type="text" className="form-control" />
                        </td>
                        <td>
                          <input type="text" className="form-control" />
                        </td>
                        <td>
                          <input type="text" className="form-control" />
                        </td>
                        <td />
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>
                          <input type="text" className="form-control" />
                        </td>
                        <td>
                          <input type="text" className="form-control" />
                        </td>
                        <td>
                          <input type="text" className="form-control" />
                        </td>
                        <td />
                      </tr>
                      <tr>
                        <td>3</td>
                        <td>
                          <input type="text" className="form-control" />
                        </td>
                        <td>
                          <input type="text" className="form-control" />
                        </td>
                        <td>
                          <input type="text" className="form-control" />
                        </td>
                        <td />
                      </tr>
                      <tr>
                        <td>4</td>
                        <td>
                          <input type="text" className="form-control" />
                        </td>
                        <td>
                          <input type="text" className="form-control" />
                        </td>
                        <td>
                          <input type="text" className="form-control" />
                        </td>
                        <td />
                      </tr>
                      <tr>
                        <td>5</td>
                        <td>
                          <input type="text" className="form-control" />
                        </td>
                        <td>
                          <input type="text" className="form-control" />
                        </td>
                        <td>
                          <input type="text" className="form-control" />
                        </td>
                        <td />
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </section>
          <section className="review-section">
            <div className="review-header text-center">
              <h3 className="review-title">Comments on the role</h3>
              <p className="text-muted">
                alterations if any requirred like addition/deletion of
                responsibilities
              </p>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="table-responsive">
                  <table className="table table-bordered review-table mb-0">
                    <thead>
                      <tr>
                        <th style={{ width: "40px" }}>#</th>
                        <th>Strengths</th>
                        <th>Area's for Improvement</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>
                          <input type="text" className="form-control" />
                        </td>
                        <td>
                          <input type="text" className="form-control" />
                        </td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>
                          <input type="text" className="form-control" />
                        </td>
                        <td>
                          <input type="text" className="form-control" />
                        </td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td>
                          <input type="text" className="form-control" />
                        </td>
                        <td>
                          <input type="text" className="form-control" />
                        </td>
                      </tr>
                      <tr>
                        <td>4</td>
                        <td>
                          <input type="text" className="form-control" />
                        </td>
                        <td>
                          <input type="text" className="form-control" />
                        </td>
                      </tr>
                      <tr>
                        <td>5</td>
                        <td>
                          <input type="text" className="form-control" />
                        </td>
                        <td>
                          <input type="text" className="form-control" />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </section>
          <section className="review-section">
            <div className="review-header text-center">
              <h3 className="review-title">
                Appraisee's Strengths and Areas for Improvement perceived by the
                Reporting officer
              </h3>
              <p className="text-muted">Lorem ipsum dollar</p>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="table-responsive">
                  <table className="table table-bordered review-table mb-0">
                    <thead>
                      <tr>
                        <th style={{ width: "40px" }}>#</th>
                        <th>Strengths</th>
                        <th>Area's for Improvement</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>
                          <input type="text" className="form-control" />
                        </td>
                        <td>
                          <input type="text" className="form-control" />
                        </td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>
                          <input type="text" className="form-control" />
                        </td>
                        <td>
                          <input type="text" className="form-control" />
                        </td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td>
                          <input type="text" className="form-control" />
                        </td>
                        <td>
                          <input type="text" className="form-control" />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </section>
          <section className="review-section">
            <div className="review-header text-center">
              <h3 className="review-title">
                Appraisee's Strengths and Areas for Improvement perceived by the
                Head of the Department
              </h3>
              <p className="text-muted">Lorem ipsum dollar</p>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="table-responsive">
                  <table className="table table-bordered review-table mb-0">
                    <thead>
                      <tr>
                        <th style={{ width: "40px" }}>#</th>
                        <th>Strengths</th>
                        <th>Area's for Improvement</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>
                          <input type="text" className="form-control" />
                        </td>
                        <td>
                          <input type="text" className="form-control" />
                        </td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>
                          <input type="text" className="form-control" />
                        </td>
                        <td>
                          <input type="text" className="form-control" />
                        </td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td>
                          <input type="text" className="form-control" />
                        </td>
                        <td>
                          <input type="text" className="form-control" />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </section>
          <section className="review-section">
            <div className="review-header text-center">
              <h3 className="review-title">Personal Goals</h3>
              <p className="text-muted">Lorem ipsum dollar</p>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="table-responsive">
                  <table className="table table-bordered review-table mb-0">
                    <thead>
                      <tr>
                        <th style={{ width: "40px" }}>#</th>
                        <th>Goal Achieved during last year</th>
                        <th>Goal set for current year</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>
                          <input type="text" className="form-control" />
                        </td>
                        <td>
                          <input type="text" className="form-control" />
                        </td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>
                          <input type="text" className="form-control" />
                        </td>
                        <td>
                          <input type="text" className="form-control" />
                        </td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td>
                          <input type="text" className="form-control" />
                        </td>
                        <td>
                          <input type="text" className="form-control" />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </section>
          <section className="review-section">
            <div className="review-header text-center">
              <h3 className="review-title">Personal Updates</h3>
              <p className="text-muted">Lorem ipsum dollar</p>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="table-responsive">
                  <table className="table table-bordered review-table mb-0">
                    <thead>
                      <tr>
                        <th style={{ width: "40px" }}>#</th>
                        <th>Last Year</th>
                        <th>Yes/No</th>
                        <th>Details</th>
                        <th>Current Year</th>
                        <th>Yes/No</th>
                        <th>Details</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>Married/Engaged?</td>
                        <td>
                          <select className="form-control select">
                            <option>Select</option>
                            <option>Yes</option>
                            <option>No</option>
                          </select>
                        </td>
                        <td>
                          <input type="text" className="form-control" />
                        </td>
                        <td>Marriage Plans</td>
                        <td>
                          <select className="form-control select">
                            <option>Select</option>
                            <option>Yes</option>
                            <option>No</option>
                          </select>
                        </td>
                        <td>
                          <input type="text" className="form-control" />
                        </td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>Higher Studies/Certifications?</td>
                        <td>
                          <select className="form-control select">
                            <option>Select</option>
                            <option>Yes</option>
                            <option>No</option>
                          </select>
                        </td>
                        <td>
                          <input type="text" className="form-control" />
                        </td>
                        <td>Plans For Higher Study</td>
                        <td>
                          <select className="form-control select">
                            <option>Select</option>
                            <option>Yes</option>
                            <option>No</option>
                          </select>
                        </td>
                        <td>
                          <input type="text" className="form-control" />
                        </td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>Health Issues?</td>
                        <td>
                          <select className="form-control select">
                            <option>Select</option>
                            <option>Yes</option>
                            <option>No</option>
                          </select>
                        </td>
                        <td>
                          <input type="text" className="form-control" />
                        </td>
                        <td>Certification Plans</td>
                        <td>
                          <select className="form-control select">
                            <option>Select</option>
                            <option>Yes</option>
                            <option>No</option>
                          </select>
                        </td>
                        <td>
                          <input type="text" className="form-control" />
                        </td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>Others</td>
                        <td>
                          <select className="form-control select">
                            <option>Select</option>
                            <option>Yes</option>
                            <option>No</option>
                          </select>
                        </td>
                        <td>
                          <input type="text" className="form-control" />
                        </td>
                        <td>Others</td>
                        <td>
                          <select className="form-control select">
                            <option>Select</option>
                            <option>Yes</option>
                            <option>No</option>
                          </select>
                        </td>
                        <td>
                          <input type="text" className="form-control" />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </section>
          <section className="review-section">
            <div className="review-header text-center">
              <h3 className="review-title">
                Professional Goals Achieved for last year
              </h3>
              <p className="text-muted">Lorem ipsum dollar</p>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="table-responsive">
                  <table
                    className="table table-bordered table-review review-table mb-0"
                    id="table_goals"
                  >
                    <thead>
                      <tr>
                        <th style={{ width: "40px" }}>#</th>
                        <th>By Self</th>
                        <th>RO's Comment</th>
                        <th>HOD's Comment</th>
                        <th style={{ width: "64px" }}>
                          <button
                            type="button"
                            className="btn btn-primary btn-add-row"
                          >
                            <i className="fa fa-plus" />
                          </button>
                        </th>
                      </tr>
                    </thead>
                    <tbody id="table_goals_tbody">
                      <tr>
                        <td>1</td>
                        <td>
                          <input type="text" className="form-control" />
                        </td>
                        <td>
                          <input type="text" className="form-control" />
                        </td>
                        <td>
                          <input type="text" className="form-control" />
                        </td>
                        <td />
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>
                          <input type="text" className="form-control" />
                        </td>
                        <td>
                          <input type="text" className="form-control" />
                        </td>
                        <td>
                          <input type="text" className="form-control" />
                        </td>
                        <td />
                      </tr>
                      <tr>
                        <td>3</td>
                        <td>
                          <input type="text" className="form-control" />
                        </td>
                        <td>
                          <input type="text" className="form-control" />
                        </td>
                        <td>
                          <input type="text" className="form-control" />
                        </td>
                        <td />
                      </tr>
                      <tr>
                        <td>4</td>
                        <td>
                          <input type="text" className="form-control" />
                        </td>
                        <td>
                          <input type="text" className="form-control" />
                        </td>
                        <td>
                          <input type="text" className="form-control" />
                        </td>
                        <td />
                      </tr>
                      <tr>
                        <td>5</td>
                        <td>
                          <input type="text" className="form-control" />
                        </td>
                        <td>
                          <input type="text" className="form-control" />
                        </td>
                        <td>
                          <input type="text" className="form-control" />
                        </td>
                        <td />
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </section>
          <section className="review-section">
            <div className="review-header text-center">
              <h3 className="review-title">
                Professional Goals for the forthcoming year
              </h3>
              <p className="text-muted">Lorem ipsum dollar</p>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="table-responsive">
                  <table
                    className="table table-bordered table-review review-table mb-0"
                    id="table_forthcoming"
                  >
                    <thead>
                      <tr>
                        <th style={{ width: "40px" }}>#</th>
                        <th>By Self</th>
                        <th>RO's Comment</th>
                        <th>HOD's Comment</th>
                        <th style={{ width: "64px" }}>
                          <button
                            type="button"
                            className="btn btn-primary btn-add-row"
                          >
                            <i className="fa fa-plus" />
                          </button>
                        </th>
                      </tr>
                    </thead>
                    <tbody id="table_forthcoming_tbody">
                      <tr>
                        <td>1</td>
                        <td>
                          <input type="text" className="form-control" />
                        </td>
                        <td>
                          <input type="text" className="form-control" />
                        </td>
                        <td>
                          <input type="text" className="form-control" />
                        </td>
                        <td />
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>
                          <input type="text" className="form-control" />
                        </td>
                        <td>
                          <input type="text" className="form-control" />
                        </td>
                        <td>
                          <input type="text" className="form-control" />
                        </td>
                        <td />
                      </tr>
                      <tr>
                        <td>3</td>
                        <td>
                          <input type="text" className="form-control" />
                        </td>
                        <td>
                          <input type="text" className="form-control" />
                        </td>
                        <td>
                          <input type="text" className="form-control" />
                        </td>
                        <td />
                      </tr>
                      <tr>
                        <td>4</td>
                        <td>
                          <input type="text" className="form-control" />
                        </td>
                        <td>
                          <input type="text" className="form-control" />
                        </td>
                        <td>
                          <input type="text" className="form-control" />
                        </td>
                        <td />
                      </tr>
                      <tr>
                        <td>5</td>
                        <td>
                          <input type="text" className="form-control" />
                        </td>
                        <td>
                          <input type="text" className="form-control" />
                        </td>
                        <td>
                          <input type="text" className="form-control" />
                        </td>
                        <td />
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </section>
          <section className="review-section">
            <div className="review-header text-center">
              <h3 className="review-title">Training Requirements</h3>
              <p className="text-muted">
                if any to achieve the Performance Standard Targets completely
              </p>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="table-responsive">
                  <table
                    className="table table-bordered table-review review-table mb-0"
                    id="table_targets"
                  >
                    <thead>
                      <tr>
                        <th style={{ width: "40px" }}>#</th>
                        <th>By Self</th>
                        <th>RO's Comment</th>
                        <th>HOD's Comment</th>
                        <th style={{ width: "64px" }}>
                          <button
                            type="button"
                            className="btn btn-primary btn-add-row"
                          >
                            <i className="fa fa-plus" />
                          </button>
                        </th>
                      </tr>
                    </thead>
                    <tbody id="table_targets_tbody">
                      <tr>
                        <td>1</td>
                        <td>
                          <input type="text" className="form-control" />
                        </td>
                        <td>
                          <input type="text" className="form-control" />
                        </td>
                        <td>
                          <input type="text" className="form-control" />
                        </td>
                        <td />
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>
                          <input type="text" className="form-control" />
                        </td>
                        <td>
                          <input type="text" className="form-control" />
                        </td>
                        <td>
                          <input type="text" className="form-control" />
                        </td>
                        <td />
                      </tr>
                      <tr>
                        <td>3</td>
                        <td>
                          <input type="text" className="form-control" />
                        </td>
                        <td>
                          <input type="text" className="form-control" />
                        </td>
                        <td>
                          <input type="text" className="form-control" />
                        </td>
                        <td />
                      </tr>
                      <tr>
                        <td>4</td>
                        <td>
                          <input type="text" className="form-control" />
                        </td>
                        <td>
                          <input type="text" className="form-control" />
                        </td>
                        <td>
                          <input type="text" className="form-control" />
                        </td>
                        <td />
                      </tr>
                      <tr>
                        <td>5</td>
                        <td>
                          <input type="text" className="form-control" />
                        </td>
                        <td>
                          <input type="text" className="form-control" />
                        </td>
                        <td>
                          <input type="text" className="form-control" />
                        </td>
                        <td />
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </section>
          <section className="review-section">
            <div className="review-header text-center">
              <h3 className="review-title">
                Any other general comments, observations, suggestions etc.
              </h3>
              <p className="text-muted">Lorem ipsum dollar</p>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="table-responsive">
                  <table
                    className="table table-bordered table-review review-table mb-0"
                    id="general_comments"
                  >
                    <thead>
                      <tr>
                        <th style={{ width: "40px" }}>#</th>
                        <th>Self</th>
                        <th>RO</th>
                        <th>HOD</th>
                        <th style={{ width: "64px" }}>
                          <button
                            type="button"
                            className="btn btn-primary btn-add-row"
                          >
                            <i className="fa fa-plus" />
                          </button>
                        </th>
                      </tr>
                    </thead>
                    <tbody id="general_comments_tbody">
                      <tr>
                        <td>1</td>
                        <td>
                          <input type="text" className="form-control" />
                        </td>
                        <td>
                          <input type="text" className="form-control" />
                        </td>
                        <td>
                          <input type="text" className="form-control" />
                        </td>
                        <td />
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>
                          <input type="text" className="form-control" />
                        </td>
                        <td>
                          <input type="text" className="form-control" />
                        </td>
                        <td>
                          <input type="text" className="form-control" />
                        </td>
                        <td />
                      </tr>
                      <tr>
                        <td>3</td>
                        <td>
                          <input type="text" className="form-control" />
                        </td>
                        <td>
                          <input type="text" className="form-control" />
                        </td>
                        <td>
                          <input type="text" className="form-control" />
                        </td>
                        <td />
                      </tr>
                      <tr>
                        <td>4</td>
                        <td>
                          <input type="text" className="form-control" />
                        </td>
                        <td>
                          <input type="text" className="form-control" />
                        </td>
                        <td>
                          <input type="text" className="form-control" />
                        </td>
                        <td />
                      </tr>
                      <tr>
                        <td>5</td>
                        <td>
                          <input type="text" className="form-control" />
                        </td>
                        <td>
                          <input type="text" className="form-control" />
                        </td>
                        <td>
                          <input type="text" className="form-control" />
                        </td>
                        <td />
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </section>
          <section className="review-section">
            <div className="review-header text-center">
              <h3 className="review-title">For RO's Use Only</h3>
              <p className="text-muted">Lorem ipsum dollar</p>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="table-responsive">
                  <table className="table table-bordered review-table mb-0">
                    <thead>
                      <tr>
                        <th />
                        <th>Yes/No</th>
                        <th>If Yes - Details</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>The Team member has Work related Issues</td>
                        <td>
                          <select className="form-control select">
                            <option>Select</option>
                            <option>Yes</option>
                            <option>No</option>
                          </select>
                        </td>
                        <td>
                          <input type="text" className="form-control" />
                        </td>
                      </tr>
                      <tr>
                        <td>The Team member has Leave Issues</td>
                        <td>
                          <select className="form-control select">
                            <option>Select</option>
                            <option>Yes</option>
                            <option>No</option>
                          </select>
                        </td>
                        <td>
                          <input type="text" className="form-control" />
                        </td>
                      </tr>
                      <tr>
                        <td>The team member has Stability Issues</td>
                        <td>
                          <select className="form-control select">
                            <option>Select</option>
                            <option>Yes</option>
                            <option>No</option>
                          </select>
                        </td>
                        <td>
                          <input type="text" className="form-control" />
                        </td>
                      </tr>
                      <tr>
                        <td>
                          The Team member exhibits non-supportive attitude
                        </td>
                        <td>
                          <select className="form-control select">
                            <option>Select</option>
                            <option>Yes</option>
                            <option>No</option>
                          </select>
                        </td>
                        <td>
                          <input type="text" className="form-control" />
                        </td>
                      </tr>
                      <tr>
                        <td>
                          Any other points in specific to note about the team
                          member
                        </td>
                        <td>
                          <select className="form-control select">
                            <option>Select</option>
                            <option>Yes</option>
                            <option>No</option>
                          </select>
                        </td>
                        <td>
                          <input type="text" className="form-control" />
                        </td>
                      </tr>
                      <tr>
                        <td>Overall Comment /Performance of the team member</td>
                        <td>
                          <select className="form-control select">
                            <option>Select</option>
                            <option>Yes</option>
                            <option>No</option>
                          </select>
                        </td>
                        <td>
                          <input type="text" className="form-control" />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </section>
          <section className="review-section">
            <div className="review-header text-center">
              <h3 className="review-title">For HRD's Use Only</h3>
              <p className="text-muted">Lorem ipsum dollar</p>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="table-responsive">
                  <table className="table table-bordered review-table mb-0">
                    <thead>
                      <tr>
                        <th>Overall Parameters</th>
                        <th>Available Points</th>
                        <th>Points Scored</th>
                        <th>RO's Comment</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          KRAs Target Achievement Points (will be considered
                          from the overall score specified in this document by
                          the Reporting officer)
                        </td>
                        <td>
                          <input type="text" className="form-control" />
                        </td>
                        <td>
                          <input type="text" className="form-control" />
                        </td>
                        <td>
                          <input type="text" className="form-control" />
                        </td>
                      </tr>
                      <tr>
                        <td>
                          Professional Skills Scores(RO's Points furnished in
                          the skill &amp; attitude assessment sheet will be
                          considered)
                        </td>
                        <td>
                          <input type="text" className="form-control" />
                        </td>
                        <td>
                          <input type="text" className="form-control" />
                        </td>
                        <td>
                          <input type="text" className="form-control" />
                        </td>
                      </tr>
                      <tr>
                        <td>
                          Personal Skills Scores(RO's Points furnished in the
                          skill &amp; attitude assessment sheet will be
                          considered)
                        </td>
                        <td>
                          <input type="text" className="form-control" />
                        </td>
                        <td>
                          <input type="text" className="form-control" />
                        </td>
                        <td>
                          <input type="text" className="form-control" />
                        </td>
                      </tr>
                      <tr>
                        <td>Special Achievements Score (HOD to furnish)</td>
                        <td>
                          <input type="text" className="form-control" />
                        </td>
                        <td>
                          <input type="text" className="form-control" />
                        </td>
                        <td>
                          <input type="text" className="form-control" />
                        </td>
                      </tr>
                      <tr>
                        <td>Overall Total Score</td>
                        <td>
                          <input type="text" className="form-control" />
                        </td>
                        <td>
                          <input type="text" className="form-control" />
                        </td>
                        <td>
                          <input type="text" className="form-control" />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </section>
          <div className="row">
            <div className="col-md-12">
              <div className="table-responsive">
                <table className="table table-bordered review-table mb-0">
                  <thead>
                    <tr>
                      <th />
                      <th>Name</th>
                      <th>Signature</th>
                      <th>Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Employee</td>
                      <td>
                        <input type="text" className="form-control" />
                      </td>
                      <td>
                        <input type="text" className="form-control" />
                      </td>
                      <td>
                        <input type="text" className="form-control" />
                      </td>
                    </tr>
                    <tr>
                      <td>Reporting Officer</td>
                      <td>
                        <input type="text" className="form-control" />
                      </td>
                      <td>
                        <input type="text" className="form-control" />
                      </td>
                      <td>
                        <input type="text" className="form-control" />
                      </td>
                    </tr>
                    <tr>
                      <td>HOD</td>
                      <td>
                        <input type="text" className="form-control" />
                      </td>
                      <td>
                        <input type="text" className="form-control" />
                      </td>
                      <td>
                        <input type="text" className="form-control" />
                      </td>
                    </tr>
                    <tr>
                      <td>HRD</td>
                      <td>
                        <input type="text" className="form-control" />
                      </td>
                      <td>
                        <input type="text" className="form-control" />
                      </td>
                      <td>
                        <input type="text" className="form-control" />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        {/* /Page Content */}
      </div>
      <Offcanvas />
    </>
  );
};

export default Performance;
