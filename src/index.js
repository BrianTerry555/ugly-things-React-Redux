import React from "react";
import ReactDOM from "react-dom";

//Gets the thing that provides the store to your App
import { Provider } from "react-redux";

//Gets the thing that makes the store
import { createStore } from "redux";

//Gets reducer to handle state
import reducers from "./reducers/";

//import css
import "./css/index.css";

//import components
import Header from "./components/header.js";
import FormContainer from "./containers/form-container.js";
import InfoListContainer from "./containers/info-list-container.js";

const store = createStore(reducers);

class App extends React.Component {
  render() {
    return (
      <div>
        <div className="header">
          <Header />
        </div>
        <div className="container">
          <FormContainer />
          <InfoListContainer />
        </div>
      </div>
    );
  }
}


ReactDOM.render(<Provider store={store}><App /></Provider>, document.querySelector("#root"));
