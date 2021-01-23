import "antd/dist/antd.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CountDown from "./Component/CountDown";
import HeaderView from "./Component/HeaderView";
import Quote from "./Component/Quote";
import StateManage from "./Component/StateManage";
import HomeScreen from "./MyTeams/HomeScreen";
import EditScreen from "./MyTeams/EditScreen";
import AddScreen from "./MyTeams/AddScreen";
import { GlobalProvider } from "./MyTeams/ContextAPI/GlobalContext";

function App() {
  return (
    <GlobalProvider>
      <div>
        <Router>
          {" "}
          <HeaderView />
          <Switch>
            {" "}
            <Route exact path="/" component={HomeScreen} />
            <Route exact path="/edit/:id" component={EditScreen} />
            <Route exact path="/add" component={AddScreen} />
            <Route exact path="/counter" component={CountDown} />
            <Route exact path="/quote" component={Quote} />
            <Route exact path="/state" component={StateManage} />
          </Switch>
        </Router>
      </div>
    </GlobalProvider>
  );
}

export default App;
//
