import { useState } from "react";
import {
  HashRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";

function Home() {
  return (
    <div className="card home">
      <div className="paw">🐾</div>
      <h2>Welcome to Pet Care</h2>
      <p>Every pet deserves love, care and happiness.</p>
      <p>Register your pet and keep their details organized!</p>
      <Link className="button" to="/register">
        Register Your Pet
      </Link>
    </div>
  );
}

function Register() {
  const [pet, setPet] = useState({
    owner: "",
    name: "",
    type: "",
    age: "",
    mobile: ""
  });

  const [success, setSuccess] = useState(false);

  function update(e) {
    setPet({
      ...pet,
      [e.target.name]: e.target.value
    });
    setSuccess(false);
  }

  function submit(e) {
    e.preventDefault();
    setSuccess(true);
  }

  return (
    <div className="card">
      <h2>Pet Registration 🐶</h2>

      <form onSubmit={submit}>
        <label>Owner Name</label>
        <input
          name="owner"
          value={pet.owner}
          onChange={update}
          pattern="[A-Za-z ]+"
          title="Use letters and spaces only"
          placeholder="Enter owner name"
          required
        />

        <label>Pet Name</label>
        <input
          name="name"
          value={pet.name}
          onChange={update}
          placeholder="Enter pet name"
          required
        />

        <label>Pet Type</label>
        <select
          name="type"
          value={pet.type}
          onChange={update}
          required
        >
          <option value="">Select pet type</option>
          <option value="Dog">Dog</option>
          <option value="Cat">Cat</option>
          <option value="Bird">Bird</option>
          <option value="Other">Other</option>
        </select>

        <label>Pet Age (years)</label>
        <input
          name="age"
          type="number"
          min="0"
          max="50"
          value={pet.age}
          onChange={update}
          placeholder="Enter pet age"
          required
        />

        <label>Mobile Number</label>
        <input
          name="mobile"
          type="tel"
          value={pet.mobile}
          onChange={update}
          pattern="[0-9]{10}"
          maxLength="10"
          title="Enter exactly 10 digits"
          placeholder="10-digit mobile number"
          required
        />

        <button type="submit">Register Pet</button>
      </form>

      {success && (
        <p className="success" role="status">
          Registration completed successfully! 🐾
        </p>
      )}
    </div>
  );
}

function App() {
  return (
    <HashRouter>
      <header>
        <h1>🐾 Pet Care System</h1>
        <p>Love and care for every paw</p>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/register">Register Pet</Link>
        </nav>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </main>

      <footer>
        Made with ❤️ for our furry friends
      </footer>
    </HashRouter>
  );
}

export default App;

