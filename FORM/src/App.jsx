import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
//import Data from './components/Date/Data.jsx'

function App() {
  const [Submit, setSubmits] = useState({
    name: "",
    FatherName: "",
    Email: "",
    Phone: "",
  });

  const [records, setRecords] = useState([]);

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log(name, value);

    setSubmits({ ...Submit, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newRecords = { ...Submit, id: new Date().getTime().toString() };
    console.log(records);
    setRecords([...records, newRecords]);
    console.log(records);

    setSubmits({ name: "", FatherName: "", Email: "", Phone: "" });
  };

  const handleDelete = (id) => {
    const updatedRecords = records.filter((record) => record.id !== id);
    setRecords(updatedRecords);
  };

  return (
    <div className="full-screen-container d-flex align-items-center justify-content-center">
      <div className="border border-dark w-25 rounded p-3 bg-dark bg-opacity-25">
        <h2 className="text-center">Form</h2>
        <form action="/submit_form" method="post" onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name:
            </label>
            <input
              value={Submit.name}
              onChange={handleInput}
              type="text"
              id="name"
              name="name"
              autoComplete="off"
              className="form-control"
              placeholder="Enter your name"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="FatherName" className="form-label">
              FatherName:
            </label>
            <input
              value={Submit.FatherName}
              onChange={handleInput}
              type="text"
              id="FatherName"
              autoComplete="off"
              name="FatherName"
              className="form-control"
              placeholder="Enter your Father name"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email:
            </label>
            <input
              value={Submit.Email}
              onChange={handleInput}
              type="Email"
              id="Email"
              autoComplete="off"
              name="Email"
              className="form-control"
              placeholder="Enter your Email"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="Email" className="form-label">
              Phone:
            </label>
            <input
              value={Submit.Phone}
              onChange={handleInput}
              type="number"   
              id="Phone"
              name="Phone"
              autoComplete="off"
              className="form-control"
              placeholder="Enter phone"
              required
              maxLength={10}
            />
          </div>
          <div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
          
          </div>
        </form>
      </div>
      <div>
        {records.map((curElem) => {
          return (
            <>
              <div className="output">
                <p>{curElem.name}</p>
                <p>{curElem.FatherName}</p>
                <p>{curElem.Email}</p>
                <p>{curElem.Phone}</p>
                <svg
                  onClick={() => handleDelete(curElem.id)}
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                  />
                </svg>
              </div>
            </>
          ); 
        })}
      </div>
    </div>
  );
}

export default App;
