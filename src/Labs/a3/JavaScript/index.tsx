import FunctionDestructing from "./functions/FunctionDestructing";
import Destructing from "./json/Destructing";
import Spreading from "./json/Spreading";
import House from "./json/House";
import TemplateLiterals from "./string/TemplateLiterals";
import JsonStringify from "./json/JsonStringify";
import WorkingWithArrays from "./arrays/WorkingWithArrays";
import FunctionParenthesisAndParameters from "./functions/FunctionParenthesisAndParameters";
import ImpliedReturn from "./functions/ImpliedReturn";
import ArrowFunctions from "./functions/ArrowFunctions";
import ES5Functions from "./functions/ES5Functions";
import TernaryOperator from "./conditionals/TernaryOperator";
import IfElse from "./conditionals/IfElse";
import BooleanVariables from "./variables/BooleanVariables";
import VariableTypes from "./variables/VariableTypes";
import VariablesAndConstants
  from "./variables/VariablesAndConstants";
function JavaScript() {
    console.log('Hello World!');
    return(
       <div>
          <h1>JavaScript</h1>
          <VariablesAndConstants/>
          <VariableTypes/>
          <BooleanVariables/>
          <IfElse/>
          <TernaryOperator/>
          <ES5Functions/>
          <ArrowFunctions/>
          <ImpliedReturn/>
          <FunctionParenthesisAndParameters/>
          <WorkingWithArrays />
          <JsonStringify/>
          <TemplateLiterals/>
          <House/>
          <Spreading/>
          <Destructing/>
          <FunctionDestructing/>
       </div>
    );
 }
 export default JavaScript
 
 