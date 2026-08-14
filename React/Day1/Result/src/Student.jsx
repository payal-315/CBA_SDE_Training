import { useState, useEffect } from "react";

function Student() {
  const [name, setName] = useState("");
  const [marks, setMarks] = useState("");

  const [students, setStudents] = useState([]);

  const [search, setSearch] = useState("");

  const [average, setAverage] = useState(0);
  const [highest, setHighest] = useState(0);
  const [lowest, setLowest] = useState(0);
  const [passCount, setPassCount] = useState(0);

  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem("students"));

    if (savedData) {
      setStudents(savedData);
    }
  }, []);

  useEffect(() => {
    if (students.length === 0) {
      setAverage(0);
      setHighest(0);
      setLowest(0);
      setPassCount(0);
    } else {
      const total = students.reduce(
        (sum, student) => sum + student.marks,
        0
      );

      setAverage((total / students.length).toFixed(2));

      setHighest(
        Math.max(...students.map((student) => student.marks))
      );

      setLowest(
        Math.min(...students.map((student) => student.marks))
      );

      setPassCount(
        students.filter((student) => student.marks >= 35).length
      );
    }

    localStorage.setItem("students", JSON.stringify(students));
  }, [students]);

  const addStudent = () => {
    if (name === "" || marks === "") {
      alert("Fill all fields");
      return;
    }

    const newStudent = {
      id: Date.now(),
      name,
      marks: Number(marks),
    };

    setStudents([...students, newStudent]);

    setName("");
    setMarks("");
  };

  const deleteStudent = (id) => {
    setStudents(students.filter((student) => student.id !== id));
  };

  const updateMarks = (id) => {
    const newMarks = prompt("Enter New Marks");

    if (newMarks !== null && newMarks !== "") {
      setStudents(
        students.map((student) =>
          student.id === id
            ? { ...student, marks: Number(newMarks) }
            : student
        )
      );
    }
  };

  const sortMarks = () => {
    const sorted = [...students].sort((a, b) => b.marks - a.marks);
    setStudents(sorted);
  };

  const filteredStudents = students.filter((student) =>
    student.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div
      style={{
        width: "800px",
        margin: "20px auto",
        textAlign: "center",
      }}
    >
      <h1>Student Result Management</h1>
      <h1>System</h1>

      <input
        type="text"
        placeholder="Student Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      {" "}

      <input
        type="number"
        placeholder="Marks"
        value={marks}
        onChange={(e) => setMarks(e.target.value)}
      />

      {" "}

      <button onClick={addStudent}>
        Add Student
      </button>

      <br />
      <br />

      <input
        type="text"
        placeholder="Search Student"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {" "}

      <button onClick={sortMarks}>
        Sort By Marks
      </button>

      <br />
      <br />

      <table border="1" width="100%" cellPadding="10">
        <thead>
          <tr>
            <th>Student Name</th>
            <th>Marks</th>
            <th>Update</th>
            <th>Delete</th>
          </tr>
        </thead>

        <tbody>
          {filteredStudents.length > 0 ? (
            filteredStudents.map((student) => (
              <tr key={student.id}>
                <td>{student.name}</td>
                <td>{student.marks}</td>

                <td>
                  <button
                    onClick={() => updateMarks(student.id)}
                  >
                    Update
                  </button>
                </td>

                <td>
                  <button
                    onClick={() => deleteStudent(student.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4">No Student Found</td>
            </tr>
          )}
        </tbody>
      </table>

      <br />

      <h3>Average Marks : {average}</h3>
      <h3>Highest Marks : {highest}</h3>
      <h3>Lowest Marks : {lowest}</h3>
      <h3>Pass Students : {passCount}</h3>
    </div>
  );
}

export default Student;