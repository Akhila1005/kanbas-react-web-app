function PassingFunctions({ theFunction }: { theFunction: () => void }) {
    return (
      <div>
        <h2>Passing Functions</h2>
        <button onClick={theFunction} className="btn btn-primary" style={{ backgroundColor: 'blue' }}>
          Invoke the Function
        </button>
      </div>
    );
  }
  export default PassingFunctions;