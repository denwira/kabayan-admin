import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Dashboard, Profile } from "./pages";
import route from "./routes/routes.js";
// function BaseLayout(props) {
//   return (
//     <div className="App">
//       <div className="container">
//         <header class="header-wrap">
//           <h1>{props.headerTitle}</h1>
//         </header>
//         <section className="main-section">
//           <main className="section-content">{props.children}</main>
//           <aside className="section-sidebar">
//             <h1>Main Sidebar</h1>
//           </aside>
//         </section>
//       </div>
//     </div>
//   );
// }

const App = () => (
  <BrowserRouter>
    <Switch>
      {route.map((value, index) => {
        console.log(value);
        return (
          <Route
            key={index}
            exact={value.exact}
            path={value.path}
            component={value.component}
          />
        );
      })}
      {/* 

      <Route exact={true} path="/" component={Dashboard} />
      <Route exact={true} path="/" component={Dashboard} />

      <Route exact={true} path="/profile">
        <Profile />
      </Route>
       */}
    </Switch>
  </BrowserRouter>
);

export default App;
