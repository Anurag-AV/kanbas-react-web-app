import { FaAlignJustify } from "react-icons/fa";

export default function CourseStatus() {
  return (
    <div id="wd-course-status" className="text-nowrap">
      <h2 className="text-black">Course Status</h2>
      <hr />
      <div className="col">
        <div className="row mt-1 mb-4">
          <button
            id="wd-view-progress"
            className="col btn btn-lg btn-secondary me-1 float-end"
          >
            Unpublish
          </button>
          <button
            id="wd-view-progress"
            className="col btn btn-lg btn-secondary me-1 float-end"
          >
            Publish
          </button>
        </div>
        <div className="row mt-1 mb-1">
          <button
            id="wd-view-progress"
            className="btn btn-lg btn-secondary me-1 float-end"
          >
            Import Exisiting Content
          </button>
        </div>
        <div className="row mt-1 mb-1">
          <button
            id="wd-view-progress"
            className="btn btn-lg btn-secondary me-1 float-end"
          >
            Import from Commons
          </button>
        </div>
        <div className="row mt-1 mb-1">
          <button
            id="wd-view-progress"
            className="btn btn-lg btn-secondary me-1 float-end"
          >
            Choose Home Page
          </button>
        </div>
        <div className="row mt-1 mb-1">
          <button
            id="wd-view-progress"
            className="btn btn-lg btn-secondary me-1 float-end"
          >
            View Course Stream
          </button>
        </div>
        <div className="row mt-1 mb-1">
          <button
            id="wd-view-progress"
            className="btn btn-lg btn-secondary me-1 float-end"
          >
            New Announcement
          </button>
        </div>
        <div className="row mt-1 mb-1">
          <button
            id="wd-view-progress"
            className="btn btn-lg btn-secondary me-1 float-end"
          >
            New Announcement
          </button>
        </div>
        <div className="row mt-1 mb-1">
          <button
            id="wd-view-progress"
            className="btn btn-lg btn-secondary me-1 float-end"
          >
            New Analy
          </button>
        </div>
        <div className="row mt-1 mb-1">
          <button
            id="wd-view-progress"
            className="btn btn-lg btn-secondary me-1 float-end"
          >
            View Course Notifications
          </button>
        </div>
      </div>
    </div>
  );
}
