import React, { useEffect, useState } from "react";
import axios from "axios";
function EncodingParametersInURLs() {
  const API_BASE = process.env.REACT_APP_BASE_API;
  const [a, setA] = useState(34);
  const [b, setB] = useState(23);
  const [result, setResult] = useState(0);
  const fetchSum = async (a: number, b: number) => {
    const response = await
      axios.get(`${API_BASE}/a5/add/${a}/${b}`);
    setResult(response.data);
  };
  const fetchSubtraction = async (a: number, b: number) => {
    const response = await axios.get(
      `${API_BASE}/a5/subtract/${a}/${b}`);
    setResult(response.data);
  };
  const [welcome, setWelcome] = useState("");
  const fetchWelcome = async () => {
    const response = await axios.get(`${API_BASE}/a5/welcome`);
    setWelcome(response.data);
  };
  useEffect(() => {
    fetchWelcome();
  }, []);
  return (
    <div>
      <h3>Encoding Parameters In URLs</h3>
      <h4>Integrating React with APIs</h4>
      <h5>Fetching Welcome</h5>
      <h6>{welcome}</h6>
      <h4>Calculator</h4>
        <div className="col-sm-2">
          <input className="form-control mb-2" type="number" onChange={(e) => setA(Number(e.target.value))} value={a}/>
          <input className="form-control mb-2" type="number" onChange={(e) => setB(Number(e.target.value))} value={b}/>
          <input className="form-control" value={result} type="number" readOnly />
        </div>
      <h3>Fetch Result</h3>
      <button onClick={() => fetchSum(a, b)} className="btn btn-primary" style={{ marginRight: '10px' }}>
        Fetch Sum of {a} + {b}
      </button>
      <button onClick={() => fetchSubtraction(a, b)} className="btn btn-danger" >
        Fetch Substraction of {a} - {b}
      </button>
      <h3>Path Parameters</h3>
      <a href={`${API_BASE}/a5/add/${a}/${b}`} className="btn btn-primary" style={{ marginRight: '10px' }}>
        Add {a} + {b}
      </a>
      <a href={`${API_BASE}/a5/subtract/${a}/${b}`} className="btn btn-danger" style={{ marginRight: '10px' }}>
        Subtract {a} - {b}
      </a>
      <a href={`${API_BASE}/a5/multiply/${a}/${b}`} className="btn btn-warning" style={{ marginRight: '10px' }}>
        Multiply {a} * {b}
      </a>
      <a href={`${API_BASE}/a5/divide/${a}/${b}`} className="btn btn-success">
        Divide {a} / {b}
      </a>
      <h3>Query Parameters</h3>
      <a className="btn btn-primary"
        href={`${API_BASE}/a5/calculator?operation=add&a=${a}&b=${b}`} style={{ marginRight: '10px' }}>
        Add {a} + {b}
      </a>
      <a className="btn btn-danger"
        href={`${API_BASE}/a5/calculator?operation=subtract&a=${a}&b=${b}`} style={{ marginRight: '10px' }}>
        Substract {a} - {b}
      </a>
      <a className="btn btn-warning"
        href={`${API_BASE}/a5/calculator?operation=multiply&a=${a}&b=${b}`} style={{ marginRight: '10px' }}>
        Multiply {a} * {b}
      </a>
      <a className="btn btn-success"
        href={`${API_BASE}/a5/calculator?operation=divide&a=${a}&b=${b}`}>
        Divide {a} / {b}
      </a>

    </div>
  );
}

export default EncodingParametersInURLs;