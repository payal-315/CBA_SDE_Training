import React, { useMemo, useState } from "react";

function StudentResult() {

  const [studentName, setStudentName] = useState("");

  const [marks, setMarks] = useState({
    maths: 90,
    science: 85,
    english: 80,
    computer: 95,
    history: 75
  });

  const handleChange = (e) => {
    setMarks({
      ...marks,
      [e.target.name]: Number(e.target.value)
    });
  };

  const result = useMemo(() => {

    console.log("Calculating result...");

    const total =
      marks.maths +
      marks.science +
      marks.english +
      marks.computer +
      marks.history;

    const percentage = total / 5;

    const average = total / 5;

    let grade;

    if (percentage >= 90) {
      grade = "A+";
    } else if (percentage >= 80) {
      grade = "A";
    } else if (percentage >= 70) {
      grade = "B";
    } else if (percentage >= 60) {
      grade = "C";
    } else if (percentage >= 50) {
      grade = "D";
    } else {
      grade = "F";
    }

    const pass =
      marks.maths >= 35 &&
      marks.science >= 35 &&
      marks.english >= 35 &&
      marks.computer >= 35 &&
      marks.history >= 35;

    return {
      total,
      percentage,
      average,
      grade,
      result: pass ? "PASS" : "FAIL"
    };

  }, [marks]);

  return (
    <div>

      <h2>Student Result Calculator</h2>

      <label>Student Name: </label>

      <input
        type="text"
        value={studentName}
        onChange={(e) => setStudentName(e.target.value)}
      />

      <br />
      <br />

      <label>Maths: </label>
      <input
        type="number"
        name="maths"
        value={marks.maths}
        onChange={handleChange}
      />

      <br />
      <br />

      <label>Science: </label>
      <input
        type="number"
        name="science"
        value={marks.science}
        onChange={handleChange}
      />

      <br />
      <br />

      <label>English: </label>
      <input
        type="number"
        name="english"
        value={marks.english}
        onChange={handleChange}
      />

      <br />
      <br />

      <label>Computer: </label>
      <input
        type="number"
        name="computer"
        value={marks.computer}
        onChange={handleChange}
      />

      <br />
      <br />

      <label>History: </label>
      <input
        type="number"
        name="history"
        value={marks.history}
        onChange={handleChange}
      />

      <hr />

      <h3>Result</h3>

      <p>
        Student Name: {studentName}
      </p>

      <p>
        Total Marks: {result.total}
      </p>

      <p>
        Percentage: {result.percentage}%
      </p>

      <p>
        Average: {result.average}
      </p>

      <p>
        Grade: {result.grade}
      </p>

      <p>
        Result: {result.result}
      </p>

    </div>
  );
}

export default StudentResult;