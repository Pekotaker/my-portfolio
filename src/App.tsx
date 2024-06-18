import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import routes from "routes";

const Page = (props: any) => {
  React.useEffect(() => {
    document.title = props.title || "React App";
  }, [props.title]);
  return <div>{React.cloneElement(props.children, props)}</div>;
};

function App() {
  return (
    <Router>
      <div className="App position-relative" style={{ height: "100vh" }}>
        <Routes>
          {routes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              Component={(props: any) => (
                <Page title={route.title}>
                  <route.component {...props} />
                </Page>
              )}
            />
          ))}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
