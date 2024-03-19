function ClickEvent() {
    const hello = () => {
      alert("Hello World!");
    };
    const lifeIs = (good: string) => {
      alert(`Life is ${good}`);
    };
    return (
      <div>
        <h2>Click Event</h2>
        <button onClick={hello} className="btn btn-primary" style={{ backgroundColor: 'blue'}}>
          Click Hello</button>
        <button onClick={() => lifeIs("Good!")}className="btn btn-primary" style={{ backgroundColor: 'blue',marginLeft: "10px"}}>
          Click Good</button>
        <button
          onClick={() => {
            hello();
            lifeIs("Great!");
          }}className="btn btn-primary" style={{ backgroundColor: 'blue',marginLeft: "10px"}}
        >
          Click Hello 3
        </button>
      </div>
    );
  }
  export default ClickEvent;
  
  