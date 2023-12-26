import React, { useState } from "react";
import "../CSS/GradeAutoFiller.css";
import { useHistory } from "react-router-dom";
import { LinearProgress } from "@mui/material";

function GradeAutoFiller() {
  const [loading, setLoading] = useState(false);
  const history = useHistory(); // Create a history object using useHistory()

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    // Show loading screen
    setLoading(true);

    // Make the POST request to the server
    const formData = new FormData(event.target);
    try {
      const response = await fetch("http://localhost:5000/module1", {
        method: "POST",
        body: formData,
      });

      console.log(response.ok);

      if (response.ok) {
        history.push("/success");
      } else {
        console.error("Server responded with an error:", response.status);
      }
    } catch (error) {
      console.error("Error:", error);

      // Handle error if necessary
    } finally {
      // Hide loading screen
      setLoading(false);
    }
  };

  return (
    <body>
      <div>
        <div id="title">Grades Sheet Correction</div>
        <div id="gradeDiv">
          {loading ? (
            <LinearProgress />
          ) : (
            <form onSubmit={handleFormSubmit} encType="multipart/form-data">
              <label id="l1">
                Table Image
                <input id="in3" type="file" name="image" accept="image/*" />
                <label id="in4">Already-Made OCR</label>
                <input id="in5" type="checkbox" name="sendCheckbox" />
              </label>
              <button className="but2" type="submit">
                Upload
              </button>
            </form>
          )}
        </div>
      </div>
    </body>
  );
}

export default GradeAutoFiller;
