export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor">
      <div className="col ms-3">
        <div className="row ms-3">
          <h5>Assignment</h5>
        </div>
        <div className="row ms-3 me-3 mb-4">
          <label htmlFor="wd-name" className="form-label"></label>
          <input id="wd-name" className="form-control" value="A1" />
          <br />
          <br />
        </div>
        <div className="ms-3 mb-4 me-3 row">
          <textarea
            id="wd-description"
            className=" form-control border border-dark rounded-1  mt-2"
            rows={10}
          >
            The assignment is available online Submit a link to the landing page
            of The assignment is available online Submit a link to the landing
            page of The assignment is available online Submit a link to the
            landing page of The assignment is available online Submit a link to
            the landing page of The assignment is available online Submit a link
            to the landing page of The assignment is available online Submit a
            link to the landing page of The assignment is available online
            Submit a link to the landing page of The assignment is available
            online Submit a link to the landing page of The assignment is
            available online Submit a link to the landing page of The assignment
            is available online Submit a link to the landing page of
          </textarea>
        </div>
        <div className="ms-3 mb-4 row d-flex">
          <div className="col-4">
            <label htmlFor="wd-points" className="float-end">
              Points
            </label>
          </div>
          <div className="col-8">
            <input
              id="wd-points"
              className=" form-control border border-dark rounded-1"
              value={100}
            />
          </div>
        </div>

        <div className="ms-3 mb-4 row d-flex">
          <div className="col-4">
            <label htmlFor="wd-group" className="float-end">
              Assignment Group
            </label>
          </div>
          <div className="col-8">
            <select className="form-select" id="wd-group">
              <option value="3" selected>
                Quiz
              </option>
              <option value="1">Assignments</option>
              <option value="2">Labs</option>
              <option value="3">Three</option>
            </select>
          </div>
        </div>

        <div className="ms-3 mb-4 row d-flex">
          <div className="col-4">
            <label htmlFor="wd-display-grade-as" className="float-end">
              Display grade as
            </label>
          </div>
          <div className="col-8">
            <select className="form-select" id="wd-display-grade-as">
              <option value="3" selected>
                Percentage
              </option>
              <option value="1">Decimal(4)</option>
              <option value="2">Decimal(10)</option>
              <option value="3">Three</option>
            </select>
          </div>
        </div>

        <div className="ms-3 mb-4 row d-flex">
          <div className="col-4">
            <label htmlFor="wd-submission-type" className="float-end">
              Submission Type
            </label>
          </div>
          <div className="col-8">
            <div className=" border border-dark rounded-2 p-3">
              <select className="form-select mb-4" id="wd-submission-type">
                <option value="3" selected>
                  online
                </option>
                <option value="1">Offline</option>
              </select>

              <label>
                <h5>
                  <strong>Online Entry Options</strong>
                </h5>
              </label>
              <div className="form-check mb-4">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="wd-text-entry"
                />
                <label className="form-check-label" htmlFor="wd-text-entry">
                  Text Entry
                </label>
              </div>

              <div className="form-check mb-4">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="wd-website-url"
                />
                <label className="form-check-label" htmlFor="wd-website-url">
                  Website Url
                </label>
              </div>

              <div className="form-check mb-4">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="wd-media-recordings"
                />
                <label
                  className="form-check-label"
                  htmlFor="wd-media-recordings"
                >
                  Media Recordings
                </label>
              </div>
              <div className="form-check mb-4">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="wd-student-annotation"
                />
                <label
                  className="form-check-label"
                  htmlFor="wd-student-annotation"
                >
                  Student Aannotation
                </label>
              </div>
              <div className="form-check mb-4">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="wd-file-upload"
                />
                <label className="form-check-label" htmlFor="wd-file-upload">
                  File Uploads
                </label>
              </div>
            </div>
          </div>
        </div>

        <div className="ms-3 mb-4 row d-flex">
          <div className="col-4">
            <label htmlFor="wd-assign-to" className="float-end">
              Assign
            </label>
          </div>
          <div className="col-8">
            <div className=" border border-dark rounded-2 p-3">
              <label htmlFor="wd-assign-to">
                <h5>
                  <strong>Assign to</strong>
                </h5>
              </label>
              <input
                id="wd-assign-to"
                className=" form-control mb-3 border border-dark rounded-1"
                placeholder="jdoe"
              />
              <label htmlFor="wd-due-date">
                <h5>
                  <strong>Due</strong>
                </h5>
              </label>
              <input
                id="wd-assign-to"
                type="date"
                className=" form-control mb-3 border border-dark rounded-1"
                value="2000-01-21"
              />
              <div className="row">
                <div className="col-6">
                  <label htmlFor="wd-available-from">
                    <h5>
                      <strong>Available From</strong>
                    </h5>
                  </label>
                  <input
                    id="wd-available-from"
                    type="date"
                    className=" form-control mb-3 border border-dark rounded-1"
                    value="2000-01-21"
                  />
                </div>
                <div className="col-6">
                  <label htmlFor="wd-available-until">
                    <h5>
                      <strong>Until</strong>
                    </h5>
                  </label>
                  <input
                    id="wd-available-until"
                    type="date"
                    className=" form-control mb-3 border border-dark rounded-1"
                    value="2000-01-21"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr></hr>
      <div className="d-flex justify-content-end w-100">
      <button
          id="wd-add-assignment-group"
          className="float-end text-nowrap btn btn-lg btn-secondary me-1"
        >
          Cancel
        </button>
        <button
          id="wd-add-assignment-group"
          className="float-end text-nowrap btn btn-lg btn-danger me-1"
        >
          Submit
        </button>
      </div>
    </div>
  );
}
