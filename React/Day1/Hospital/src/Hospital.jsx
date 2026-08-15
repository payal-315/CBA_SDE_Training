import { useState, useEffect } from "react";

function Hospital() {
  const [patientName, setPatientName] = useState("");
  const [doctor, setDoctor] = useState("");
  const [appointmentDate, setAppointmentDate] = useState("");
  const [appointmentTime, setAppointmentTime] = useState("");

  const [appointments, setAppointments] = useState([]);

  const [search, setSearch] = useState("");
  const [doctorFilter, setDoctorFilter] = useState("");

  const [todayCount, setTodayCount] = useState(0);

  // Load Appointments
  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem("appointments"));

    if (savedData) {
      setAppointments(savedData);
    } else {
      const fakeAPI = [
        {
          id: 1,
          patient: "Rahul",
          doctor: "Dr. Sharma",
          date: "2026-08-07",
          time: "10:00",
        },
        {
          id: 2,
          patient: "Priya",
          doctor: "Dr. Rao",
          date: "2026-08-07",
          time: "11:00",
        },
      ];

      setAppointments(fakeAPI);
    }
  }, []);

  // Save Appointments & Today's Count
  useEffect(() => {
    localStorage.setItem(
      "appointments",
      JSON.stringify(appointments)
    );

    const today = new Date().toISOString().split("T")[0];

    const count = appointments.filter(
      (item) => item.date === today
    ).length;

    setTodayCount(count);
  }, [appointments]);

  // Book Appointment
  const bookAppointment = () => {
    if (
      patientName === "" ||
      doctor === "" ||
      appointmentDate === "" ||
      appointmentTime === ""
    ) {
      alert("Fill all fields");
      return;
    }

    // Prevent Duplicate Appointment
    const duplicate = appointments.find(
      (item) =>
        item.doctor === doctor &&
        item.date === appointmentDate &&
        item.time === appointmentTime
    );

    if (duplicate) {
      alert("Doctor already has an appointment at this time.");
      return;
    }

    const newAppointment = {
      id: Date.now(),
      patient: patientName,
      doctor,
      date: appointmentDate,
      time: appointmentTime,
    };

    setAppointments([...appointments, newAppointment]);

    setPatientName("");
    setDoctor("");
    setAppointmentDate("");
    setAppointmentTime("");
  };

  // Cancel Appointment
  const cancelAppointment = (id) => {
    setAppointments(
      appointments.filter((item) => item.id !== id)
    );
  };

  // Search + Filter
  const filteredAppointments = appointments.filter((item) => {
    const patientMatch = item.patient
      .toLowerCase()
      .includes(search.toLowerCase());

    const doctorMatch =
      doctorFilter === "" || item.doctor === doctorFilter;

    return patientMatch && doctorMatch;
  });

  return (
    <div
      style={{
        width: "900px",
        margin: "20px auto",
        textAlign: "center",
      }}
    >
      <h1>Hospital Appointment Booking</h1>

      <h2>Today's Appointments : {todayCount}</h2>

      <hr />

      <input
        type="text"
        placeholder="Patient Name"
        value={patientName}
        onChange={(e) => setPatientName(e.target.value)}
      />

      {" "}

      <select
        value={doctor}
        onChange={(e) => setDoctor(e.target.value)}
      >
        <option value="">Select Doctor</option>
        <option>Dr. Sharma</option>
        <option>Dr. Rao</option>
        <option>Dr. Mehta</option>
      </select>

      <br />
      <br />

      <input
        type="date"
        value={appointmentDate}
        onChange={(e) => setAppointmentDate(e.target.value)}
      />

      {" "}

      <input
        type="time"
        value={appointmentTime}
        onChange={(e) => setAppointmentTime(e.target.value)}
      />

      {" "}

      <button onClick={bookAppointment}>
        Book Appointment
      </button>

      <hr />

      <input
        type="text"
        placeholder="Search Patient"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {" "}

      <select
        value={doctorFilter}
        onChange={(e) => setDoctorFilter(e.target.value)}
      >
        <option value="">All Doctors</option>
        <option>Dr. Sharma</option>
        <option>Dr. Rao</option>
        <option>Dr. Mehta</option>
      </select>

      <br />
      <br />

      <table border="1" width="100%" cellPadding="10">
        <thead>
          <tr>
            <th>Patient</th>
            <th>Doctor</th>
            <th>Date</th>
            <th>Time</th>
            <th>Cancel</th>
          </tr>
        </thead>

        <tbody>
          {filteredAppointments.length > 0 ? (
            filteredAppointments.map((item) => (
              <tr key={item.id}>
                <td>{item.patient}</td>
                <td>{item.doctor}</td>
                <td>{item.date}</td>
                <td>{item.time}</td>
                <td>
                  <button
                    onClick={() =>
                      cancelAppointment(item.id)
                    }
                  >
                    Cancel
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5">
                No Appointments Found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Hospital;