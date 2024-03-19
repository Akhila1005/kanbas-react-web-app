import React, { useState } from "react";
function ArrayStateVariable() {
  const [array, setArray] = useState([1, 2, 3, 4, 5]);
  const addElement = () => {
    setArray([...array, Math.floor(Math.random() * 100)]);
  };
  const deleteElement = (index: number) => {
    setArray(array.filter((item, i) => i !== index));
  };
  return (
    <div>
      <h2>Array State Variable</h2>
      <button onClick={addElement} className="btn btn-success" style={{ marginBottom : '10px'}}>
      Add Element
      </button>
      <table>
        <tbody>
          {array.map((item, index) => (
            <tr key={index}>
              <td style={{ paddingRight: '40px' }}>{item}</td> 
              <td>
                <button onClick={() => deleteElement(index)} className="btn btn-danger" >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default ArrayStateVariable;

