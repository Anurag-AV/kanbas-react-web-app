export default function AssignmentEditor() {
    return (
      <div id="wd-assignments-editor">
        <label htmlFor="wd-name">Assignment Name</label>
        <input id="wd-name" value="A1 - ENV + HTML" /><br /><br />
        <textarea id="wd-description">
          The assignment is available online Submit a link to the landing page of
        </textarea>
        <br />
        <table>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-points">Points</label>
          </td>
          <td>
            <input id="wd-points" value={100} />
          </td>
        </tr>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-group">Assignment Group</label>
          </td>
          <td>
            <select id="wd-group">
   <option value="1">Assignment</option>
   <option value="2">Lab</option>
   <option selected value="3">
       Quiz</option>
</select>
          </td>
        </tr>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-display-grade-as">Display grade as</label>
          </td>
          <td>
          <select id="wd-display-grade-as">
   <option value="1">Decimal(4)</option>
   <option value="2">Decimal(10)</option>
   <option selected value="3">
       Percentage</option>
</select>
          </td>
        </tr>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-submission-type">Submission Type</label>
          </td>
          <td>
          <select id="wd-submission-type">
   <option value="1">offlinne</option>
   <option selected value="3">
       Online</option>
</select>
<h4><label> <strong>Online Entry Options</strong></label></h4><br />
<input type="checkbox" name="entry-options" id="wd-text-entry"/>
<label htmlFor="wd-text-entry">Text Entry</label><br/>

<input type="checkbox" name="entry-options" id="wd-website-url"/>
<label htmlFor="wd-website-url">Website Url</label><br/>

<input type="checkbox" name="entry-options" id="wd-media-recordings"/>
<label htmlFor="wd-media-recordings">Media Recordings</label><br/>

<input type="checkbox" name="entry-options" id="wd-student-annotation"/>
<label htmlFor="wd-student-annotation">Student Aannotation</label><br />

<input type="checkbox" name="entry-options" id="wd-file-upload"/>
<label htmlFor="wd-file-upload">File Uploads</label>
          </td>
        </tr>

        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-assign-to">Assign</label>
          </td>
          <td>
          <label htmlFor="wd-assign-to">Assign to</label>
    <input id="wd-assign-to" placeholder="jdoe" /> <br />
    <label htmlFor="wd-due-date">Due</label>
    <input type="date"
      id="wd-due-date"
      value="2000-01-21"/><br/>

<label htmlFor="wd-available-from">Available From</label>
    <input type="date"
      id="wd-available-from"
      value="2000-01-21"/>  <label htmlFor="wd-available-until">Until</label>
      <input type="date"
        id="wd-available-until"/>
          </td>
        </tr>
        
      </table>
    </div>
);}

  