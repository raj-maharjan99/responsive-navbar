import React from "react";
import "./form.css";
function Contact() {
  return (
    <form action="" class="form_style">
      <table cellpadding="8">
        <tr>
          <th colspan="2" class="head">
            STUDENT REGISTRATION FORM
          </th>
        </tr>

        <tr>
          <td>Name:</td>
          <td>
            <input type="text" placeholder="Enter Full Name" />
          </td>
        </tr>
        <tr>
          <td>Father's Name:</td>
          <td>
            <input type="text" />
          </td>
        </tr>
        <tr>
          <td>Mother's Name:</td>
          <td>
            <input type="text" />
          </td>
        </tr>
        <tr>
          <td>Phone Number:</td>
          <td>
            <input type="number" placeholder="281-xxx-xxxx" />
          </td>
        </tr>
        <tr>
          <td>Email:</td>
          <td>
            <input type="text" placeholder="sample@broadway.com" />
          </td>
        </tr>
        <tr>
          <td>Gender:</td>
          <td>
            <div class="radio_css">
              <input type="radio" name="gender" /> Male
              <input type="radio" name="gender" />
              Female
              <input type="radio" name="gender" />
              Others
            </div>
          </td>
        </tr>
        <tr>
          <td>Date of Birth:</td>
          <td>
            <div class="dob-css">
              <input type="text" />-<input type="text" />-
              <input type="text" class="year_css" />
              <div>(dd-mm-yyy)</div>
            </div>
          </td>
        </tr>
        <tr>
          <td>Address:</td>
          <td>
            <div class="address_css">
              <input type="box" placeholder="Street:-     House:-    Road:- " />
            </div>
          </td>
        </tr>
        <tr>
          <td>Blood Group:</td>
          <td>
            <select name="" id="">
              <option value="">Select</option>
              <option value="">O+</option>
              <option value="">O-</option>
              <option value="">A+</option>
              <option value="">A-</option>
            </select>
          </td>
        </tr>
        <tr>
          <td>Department:</td>
          <td>
            <div class="radio_css">
              <input type="radio" name="department" /> CSE
              <input type="radio" name="department" /> EEE
              <input type="radio" name="department" /> BBA
            </div>
          </td>
        </tr>
        <tr>
          <td>Course:</td>
          <td>
            <div class="course_css">
              <input type="checkbox" />C <input type="checkbox" />
              C++
              <input type="checkbox" />
              Java <input type="checkbox" />
              AI
              <input type="checkbox" />
              Machine Learning
              <input type="checkbox" />
              Robotics
            </div>
          </td>
        </tr>
        <tr>
          <td>Photo:</td>
          <td>
            <input type="file" />
          </td>
        </tr>

        <tr>
          <td>
            <br />
            <br />
            <button class="btn_submit">Submit</button>
            <button>Reset</button>
          </td>
        </tr>
      </table>
    </form>
  );
}

export default Contact;
