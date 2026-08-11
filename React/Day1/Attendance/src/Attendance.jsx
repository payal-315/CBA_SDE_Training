import React, { useState, useEffect } from "react";

function Attendance() {
  
  const [employeeName, setEmployeeName] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");

  
  const [attendanceList, setAttendanceList] = useState([]);

  const [search, setSearch] = useState("");

  const [totalEmployees, setTotalEmployees] = useState(0);

  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const fakeAPI = [
      {
        id: 1,
        name: "Rahul",
        checkIn: "09:00",
        checkOut: "06:00",
      },
      {
        id: 2,
        name: "Priya",
        checkIn: "09:30",
        checkOut: "06:15",
      },
    ];

    const savedData = JSON.parse(localStorage.getItem("attendance"));

    if (savedData) {
      setAttendanceList(savedData);
    } else {
      setAttendanceList(fakeAPI);
    }
  }, []);

  useEffect(() => {
    setTotalEmployees(attendanceList.length);

    localStorage.setItem(
      "attendance",
      JSON.stringify(attendanceList)
    );
  }, [attendanceList]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const addAttendance = () => {
    if (
      employeeName === "" ||
      checkIn === "" ||
      checkOut === ""
    ) {
      alert("Please fill all fields.");
      return;
    }

    const newEmployee = {
      id: Date.now(),
      name: employeeName,
      checkIn,
      checkOut,
    };

    setAttendanceList([...attendanceList, newEmployee]);

    setEmployeeName("");
    setCheckIn("");
    setCheckOut("");
  };

  const deleteAttendance = (id) => {
    const updatedList = attendanceList.filter(
      (employee) => employee.id !== id
    );

    setAttendanceList(updatedList);
  };

  const filteredEmployees = attendanceList.filter((employee) =>
    employee.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div
      style={{
        width: "800px",
        margin: "30px auto",
        textAlign: "center",
      }}
    >
      <h1>Employee Attendance Dashboard</h1>

      <h3>{currentTime.toLocaleString()}</h3>

      <h2>Total Present Employees : {totalEmployees}</h2>

      <hr />

      <h3>Add Attendance</h3>

      <input
        type="text"
        placeholder="Employee Name"
        value={employeeName}
        onChange={(e) => setEmployeeName(e.target.value)}
      />

      <br />
      <br />

      <label>Check In : </label>

      <input
        type="time"
        value={checkIn}
        onChange={(e) => setCheckIn(e.target.value)}
      />

      <br />
      <br />

      <label>Check Out : </label>

      <input
        type="time"
        value={checkOut}
        onChange={(e) => setCheckOut(e.target.value)}
      />

      <br />
      <br />

      <button onClick={addAttendance}>
        Add Attendance
      </button>

      <hr />

      <h3>Search Employee</h3>

      <input
        type="text"
        placeholder="Search Employee"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <br />
      <br />

      <table
        border="1"
        cellPadding="10"
        width="100%"
      >
        <thead>
          <tr>
            <th>Employee Name</th>
            <th>Check In</th>
            <th>Check Out</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {filteredEmployees.length > 0 ? (
            filteredEmployees.map((employee) => (
              <tr key={employee.id}>
                <td>{employee.name}</td>
                <td>{employee.checkIn}</td>
                <td>{employee.checkOut}</td>
                <td>
                  <button
                    onClick={() =>
                      deleteAttendance(employee.id)
                    }
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4">
                No Employee Found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Attendance;