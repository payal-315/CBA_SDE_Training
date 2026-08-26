import { useEffect, useMemo, useRef, useState } from "react";
import "./App.css";

const productData = [
  { id: 1, name: "Laptop", price: 50000, tag: "Workstation" },
  { id: 2, name: "Mouse", price: 500, tag: "Accessory" },
  { id: 3, name: "Keyboard", price: 1500, tag: "Accessory" },
  { id: 4, name: "Headphones", price: 2000, tag: "Audio" },
  { id: 5, name: "Monitor", price: 12000, tag: "Display" },
];

const weatherData = {
  Bangalore: { temp: 28, humidity: 65, wind: 15, condition: "Cloudy" },
  Delhi: { temp: 35, humidity: 45, wind: 10, condition: "Sunny" },
  Mumbai: { temp: 30, humidity: 80, wind: 20, condition: "Rainy" },
  Chennai: { temp: 33, humidity: 70, wind: 18, condition: "Hot" },
  Hyderabad: { temp: 31, humidity: 55, wind: 14, condition: "Sunny" },
};

const tabs = [
  { id: "commerce", label: "Commerce" },
  { id: "weather", label: "Weather" },
  { id: "students", label: "Students" },
  { id: "tasks", label: "Tasks" },
  { id: "time", label: "Time" },
  { id: "people", label: "People" },
];

function App() {
  const [activeTab, setActiveTab] = useState("commerce");

  return (
    <main className="app-shell">
      <section className="hero-band">
        <div>
          <p className="eyebrow">React merged assignment</p>
          <h1>React Project</h1>
          <p className="hero-copy">
            A single React workspace built from cart, weather, result, todo, stopwatch,
            and attendance exercises.
          </p>
        </div>
      </section>

      <nav className="tab-bar" aria-label="Dashboard sections">
        {tabs.map((tab) => (
          <button
            className={activeTab === tab.id ? "tab active" : "tab"}
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </nav>

      <section className="workspace">
        {activeTab === "commerce" && <CommercePanel />}
        {activeTab === "weather" && <WeatherPanel />}
        {activeTab === "students" && <StudentPanel />}
        {activeTab === "tasks" && <TaskPanel />}
        {activeTab === "time" && <StopwatchPanel />}
        {activeTab === "people" && <AttendancePanel />}
      </section>
    </main>
  );
}

function CommercePanel() {
  const [cart, setCart] = useLocalStorage("hub-cart", []);
  const [coupon, setCoupon] = useState("");

  const totals = useMemo(() => {
    const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const discount = coupon.trim().toUpperCase() === "SAVE10" ? subtotal * 0.1 : 0;
    const shipping = subtotal > 1000 || subtotal === 0 ? 0 : 50;
    return { subtotal, discount, shipping, final: subtotal - discount + shipping };
  }, [cart, coupon]);

  const addToCart = (product) => {
    setCart((current) => {
      const existing = current.find((item) => item.id === product.id);
      if (!existing) {
        return [...current, { ...product, quantity: 1 }];
      }
      return current.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
    });
  };

  const changeQuantity = (id, amount) => {
    setCart((current) =>
      current
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + amount } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  return (
    <Panel title="Smart Store" intro="Products, coupon discount, cart quantity and billing summary.">
      <div className="split-layout">
        <div className="product-grid">
          {productData.map((product) => (
            <article className="item-card" key={product.id}>
              <span>{product.tag}</span>
              <h3>{product.name}</h3>
              <p>Rs. {product.price.toLocaleString("en-IN")}</p>
              <button onClick={() => addToCart(product)}>Add item</button>
            </article>
          ))}
        </div>

        <aside className="summary-panel">
          <h3>Cart</h3>
          {cart.length === 0 ? (
            <p className="muted">No items added yet.</p>
          ) : (
            cart.map((item) => (
              <div className="cart-row" key={item.id}>
                <div>
                  <strong>{item.name}</strong>
                  <span>Rs. {(item.price * item.quantity).toLocaleString("en-IN")}</span>
                </div>
                <div className="stepper">
                  <button onClick={() => changeQuantity(item.id, -1)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => changeQuantity(item.id, 1)}>+</button>
                </div>
              </div>
            ))
          )}

          <label className="field">
            Coupon
            <input value={coupon} onChange={(event) => setCoupon(event.target.value)} placeholder="SAVE10" />
          </label>

          <dl className="bill">
            <div><dt>Total</dt><dd>Rs. {totals.subtotal.toLocaleString("en-IN")}</dd></div>
            <div><dt>Discount</dt><dd>Rs. {Math.round(totals.discount).toLocaleString("en-IN")}</dd></div>
            <div><dt>Shipping</dt><dd>Rs. {totals.shipping}</dd></div>
            <div className="final"><dt>Final</dt><dd>Rs. {Math.round(totals.final).toLocaleString("en-IN")}</dd></div>
          </dl>
          <button className="secondary" onClick={() => setCart([])}>Empty cart</button>
        </aside>
      </div>
    </Panel>
  );
}

function WeatherPanel() {
  const [city, setCity] = useState("Bangalore");
  const [history, setHistory] = useState(["Bangalore"]);
  const weather = weatherData[city.trim()];

  useEffect(() => {
    const cleanCity = city.trim();
    if (weatherData[cleanCity]) {
      setHistory((current) => current.includes(cleanCity) ? current : [...current, cleanCity]);
    }
  }, [city]);

  return (
    <Panel title="City Weather" intro="Static weather search with recent city history.">
      <label className="field compact">
        City
        <input value={city} onChange={(event) => setCity(event.target.value)} placeholder="Try Delhi" />
      </label>
      {weather ? (
        <div className="metric-grid">
          <Metric label="Temperature" value={`${weather.temp} C`} />
          <Metric label="Humidity" value={`${weather.humidity}%`} />
          <Metric label="Wind" value={`${weather.wind} km/h`} />
          <Metric label="Condition" value={weather.condition} />
        </div>
      ) : (
        <p className="empty-state">City not found. Try Bangalore, Delhi, Mumbai, Chennai, or Hyderabad.</p>
      )}
      <div className="chip-list">
        {history.map((item) => (
          <button key={item} onClick={() => setCity(item)}>{item}</button>
        ))}
      </div>
    </Panel>
  );
}

function StudentPanel() {
  const [students, setStudents] = useLocalStorage("hub-students", [
    { id: 1, name: "Asha", marks: 86 },
    { id: 2, name: "Kabir", marks: 72 },
  ]);
  const [name, setName] = useState("");
  const [marks, setMarks] = useState("");
  const [search, setSearch] = useState("");

  const filteredStudents = students.filter((student) =>
    student.name.toLowerCase().includes(search.toLowerCase())
  );

  const stats = useMemo(() => {
    if (students.length === 0) {
      return { average: 0, highest: 0, lowest: 0, pass: 0 };
    }
    const marksList = students.map((student) => student.marks);
    return {
      average: (marksList.reduce((sum, mark) => sum + mark, 0) / students.length).toFixed(1),
      highest: Math.max(...marksList),
      lowest: Math.min(...marksList),
      pass: students.filter((student) => student.marks >= 35).length,
    };
  }, [students]);

  const addStudent = () => {
    if (!name.trim() || marks === "") {
      return;
    }
    setStudents((current) => [...current, { id: Date.now(), name: name.trim(), marks: Number(marks) }]);
    setName("");
    setMarks("");
  };

  return (
    <Panel title="Student Results" intro="Add, search, sort and review student performance.">
      <div className="form-row">
        <input value={name} onChange={(event) => setName(event.target.value)} placeholder="Student name" />
        <input value={marks} onChange={(event) => setMarks(event.target.value)} type="number" placeholder="Marks" />
        <button onClick={addStudent}>Add</button>
      </div>
      <div className="form-row">
        <input value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Search student" />
        <button className="secondary" onClick={() => setStudents((current) => [...current].sort((a, b) => b.marks - a.marks))}>
          Sort marks
        </button>
      </div>
      <div className="metric-grid">
        <Metric label="Average" value={stats.average} />
        <Metric label="Highest" value={stats.highest} />
        <Metric label="Lowest" value={stats.lowest} />
        <Metric label="Pass" value={stats.pass} />
      </div>
      <DataTable
        columns={["Name", "Marks", "Action"]}
        rows={filteredStudents.map((student) => [
          student.name,
          student.marks,
          <button className="danger" onClick={() => setStudents((current) => current.filter((item) => item.id !== student.id))}>Delete</button>,
        ])}
      />
    </Panel>
  );
}

function TaskPanel() {
  const [todos, setTodos] = useLocalStorage("hub-todos", [
    { id: 1, task: "Review inventory", completed: false },
    { id: 2, task: "Update student report", completed: true },
    { id: 3, task: "Send attendance summary", completed: false },
  ]);
  const [task, setTask] = useState("");
  const [filter, setFilter] = useState("all");

  const visibleTodos = todos.filter((todo) =>
    filter === "all" || (filter === "done" && todo.completed) || (filter === "open" && !todo.completed)
  );

  const addTodo = () => {
    if (!task.trim()) {
      return;
    }
    setTodos((current) => [...current, { id: Date.now(), task: task.trim(), completed: false }]);
    setTask("");
  };

  return (
    <Panel title="Task Board" intro="Todo list with add, filter, complete and delete actions.">
      <div className="form-row">
        <input value={task} onChange={(event) => setTask(event.target.value)} placeholder="New task" />
        <button onClick={addTodo}>Add</button>
        <select value={filter} onChange={(event) => setFilter(event.target.value)}>
          <option value="all">All</option>
          <option value="open">Pending</option>
          <option value="done">Completed</option>
        </select>
      </div>
      <div className="task-list">
        {visibleTodos.map((todo) => (
          <label className={todo.completed ? "task done" : "task"} key={todo.id}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() =>
                setTodos((current) =>
                  current.map((item) => item.id === todo.id ? { ...item, completed: !item.completed } : item)
                )
              }
            />
            <span>{todo.task}</span>
            <button onClick={() => setTodos((current) => current.filter((item) => item.id !== todo.id))}>Delete</button>
          </label>
        ))}
      </div>
    </Panel>
  );
}

function StopwatchPanel() {
  const [time, setTime] = useState(0);
  const [laps, setLaps] = useState([]);
  const timerRef = useRef(null);

  useEffect(() => () => clearInterval(timerRef.current), []);

  const start = () => {
    if (timerRef.current) {
      return;
    }
    timerRef.current = setInterval(() => setTime((current) => current + 1), 1000);
  };

  const stop = () => {
    clearInterval(timerRef.current);
    timerRef.current = null;
  };

  const reset = () => {
    stop();
    setTime(0);
    setLaps([]);
  };

  return (
    <Panel title="Focus Stopwatch" intro="Timer controls with lap history.">
      <div className="timer">{formatTime(time)}</div>
      <div className="button-row">
        <button onClick={start}>Start</button>
        <button className="secondary" onClick={stop}>Stop</button>
        <button className="secondary" onClick={() => setLaps((current) => [...current, time])}>Lap</button>
        <button className="danger" onClick={reset}>Reset</button>
      </div>
      <ol className="lap-list">
        {laps.map((lap, index) => (
          <li key={`${lap}-${index}`}>Lap {index + 1}: {formatTime(lap)}</li>
        ))}
      </ol>
    </Panel>
  );
}

function AttendancePanel() {
  const [attendance, setAttendance] = useLocalStorage("hub-attendance", [
    { id: 1, name: "Rahul", checkIn: "09:00", checkOut: "18:00" },
    { id: 2, name: "Priya", checkIn: "09:30", checkOut: "18:15" },
  ]);
  const [employeeName, setEmployeeName] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [search, setSearch] = useState("");
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const addAttendance = () => {
    if (!employeeName.trim() || !checkIn || !checkOut) {
      return;
    }
    setAttendance((current) => [...current, { id: Date.now(), name: employeeName.trim(), checkIn, checkOut }]);
    setEmployeeName("");
    setCheckIn("");
    setCheckOut("");
  };

  const filteredAttendance = attendance.filter((person) =>
    person.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Panel title="Attendance Desk" intro={`Live time: ${now.toLocaleString()}`}>
      <div className="form-row">
        <input value={employeeName} onChange={(event) => setEmployeeName(event.target.value)} placeholder="Employee name" />
        <input value={checkIn} onChange={(event) => setCheckIn(event.target.value)} type="time" />
        <input value={checkOut} onChange={(event) => setCheckOut(event.target.value)} type="time" />
        <button onClick={addAttendance}>Add</button>
      </div>
      <div className="form-row">
        <input value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Search employee" />
        <Metric label="Present" value={attendance.length} />
      </div>
      <DataTable
        columns={["Employee", "Check in", "Check out", "Action"]}
        rows={filteredAttendance.map((person) => [
          person.name,
          person.checkIn,
          person.checkOut,
          <button className="danger" onClick={() => setAttendance((current) => current.filter((item) => item.id !== person.id))}>Delete</button>,
        ])}
      />
    </Panel>
  );
}

function Panel({ title, intro, children }) {
  return (
    <article className="panel">
      <header className="panel-header">
        <div>
          <p className="eyebrow">Workspace</p>
          <h2>{title}</h2>
        </div>
        <p>{intro}</p>
      </header>
      {children}
    </article>
  );
}

function Metric({ label, value }) {
  return (
    <div className="metric">
      <span>{label}</span>
      <strong>{value}</strong>
    </div>
  );
}

function DataTable({ columns, rows }) {
  return (
    <div className="table-wrap">
      <table>
        <thead>
          <tr>{columns.map((column) => <th key={column}>{column}</th>)}</tr>
        </thead>
        <tbody>
          {rows.length > 0 ? (
            rows.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {row.map((cell, cellIndex) => <td key={cellIndex}>{cell}</td>)}
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={columns.length}>No records found.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    try {
      const saved = localStorage.getItem(key);
      return saved ? JSON.parse(saved) : initialValue;
    } catch {
      return initialValue;
    }
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}

function formatTime(totalSeconds) {
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;
  return [hours, minutes, seconds].map((part) => String(part).padStart(2, "0")).join(":");
}

export default App;
