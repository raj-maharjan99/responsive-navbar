import React from "react";
import "./form.css";

function Contact() {
  return (
    <>
      {" "}
      <div className="flex">
        <div class="form_css">
          <form action="" className="bg-gray-400">
            <fieldset>
              <h2 className="  text-[25px] text-green-50 font-semibold m text-center underline bg-gray-600 ">
                Registration Form
              </h2>{" "}
              <br />
              <label for="uName" className="font-bold">
                Username:
              </label>
              <input
                type="text"
                name="uname"
                id="uName"
                placeholder="ramey-shyame"
              />{" "}
              <hr />
              <br />
              <label for="pw" className="font-bold">
                Password:
              </label>
              <input type="password" name="pw" id="pw" placeholder="*******" />{" "}
              <hr />
              <br />
              {/* <!-- label ma for ani input ma id vitra same value define gare paxi
lable vitra ko content ma click garda input box ma sidhai click hunxa --> */}
              <label for="fName" className="font-bold">
                First Name:
              </label>
              <input type="text" name="fname" id="fName" placeholder="Raj" />
              <hr />
              <br />
              <label for="lname" className="font-bold">
                Last Name:
              </label>
              <input
                type="text"
                name="lname"
                id="lname"
                placeholder="Maharjan"
              />
              {/* <!-- name attribute vitra ko value rakhda form submit garda kun kun   data
        jane vanera define gareko --> */}
              <hr />
              <br />{" "}
              <div className="flex gap-12">
                <label for="age" className="font-bold">
                  Age:{" "}
                </label>
                {/* <!-- min max le yati samma ko number matra data base ma pathaune vanera define gareko --> */}
                <input type="number" name="age" id="age" min="0" max="200" />
              </div>
              <hr />
              <br />
              <div className="flex justify-left gap-3">
                <p className="font-bold">Gender:</p>{" "}
                <input type="radio" name="gender" id="male" />
                <label for="male">Male</label>
                <input type="radio" name="gender" id="fmale" />
                <label for="fmale">Female</label>
                <input type="radio" name="gender" id="others" />
                <label for="others">Others</label>
              </div>
              <hr />
              <br />{" "}
              <div className="flex gap-5">
                {" "}
                <p className="font-bold">
                  {" "}
                  Gender with <br />
                  Select Option:
                </p>
                <select name="gen" id="">
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="others">Others</option>
                </select>
              </div>
              <hr />
              <br />{" "}
              <div className="flex justify-left gap-3">
                <p className="font-bold">Religion:</p> <input type="checkbox" />{" "}
                Hindu
                <input type="checkbox" /> Muslim <input type="checkbox" />{" "}
                Buddhist
                <input type="checkbox" /> Christian
              </div>
              <hr />
              <br />
              <label for="" className="font-bold">
                Write Message:
              </label>
              <br />
              <textarea
                className=" bg-red-100 w-full"
                name="message"
                id="editor"
                cols="20"
                rows="10"
                placeholder="drop your message here"
              ></textarea>
              <br />{" "}
              <div className="flex justify-center gap-10">
                <button className="font-bold  border-2 border-solid border-[black] p-1 rounded-[10px]  ">
                  Submit
                </button>
                <button className="font-bold  border-2 border-solid border-[black] p-1 rounded-[10px]  ">
                  Reset
                </button>
              </div>
            </fieldset>
          </form>
        </div>
        <div>
          <iframe
            className="border-2 border-solid border-[black]"
            width={750}
            height={400}
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d2003.656315894801!2d84.35345535984017!3d27.692203312320636!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1697666062850!5m2!1sen!2sus"
          />

          <img
            width={750}
            src="https://ruttenschoenen.nl/pub/media/blog/cache/1100x/magefan_blog/kids-blog-01.jpg"
            alt=""
          />
        </div>
      </div>
    </>
  );
}

export default Contact;
