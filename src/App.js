import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Dashboard, Profile } from "./pages";

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
      <Route exact={true} path="/">
        <Dashboard />
      </Route>
      <Route exact={true} path="/profile">
        <Profile />
      </Route>
    </Switch>
  </BrowserRouter>
);

export default App;
