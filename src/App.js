import "antd/dist/antd.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CountDown from "./Component/CountDown";
import HeaderView from "./Component/HeaderView";
import Quote from "./Component/Quote";
import StateManage from "./Component/StateManage";

function App() {
  return (
    <div>
      <Router>
        {" "}
        <HeaderView />
        <Switch>
          {" "}
          <Route exact path="/counter" component={CountDown} />
          <Route exact path="/quote" component={Quote} />
          <Route exact path="/state" component={StateManage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
//
