import React from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import "./App.css";
import { Header } from "./components/Header";
import { UserNameForm } from "./components/UserNameForm";

const App = ({ user, userName, handleNameChange, handleNameSubmit }) => {
  const navigate = useNavigate();

  return (
    <div>
      <Header user={user} />
      {/* show name form if there is no user yet */}
      {!user ? (
        <UserNameForm
          handleNameSubmit={handleNameSubmit}
          handleNameChange={handleNameChange}
          userName={userName}
        />
      ) : null}

      <nav style={{ marginTop: "10px" }}>
        <NavLink
          className={({ isActive }) =>
            isActive ? "btn btn-dark btn-sm disabled" : "btn btn-sm btn-dark"
          }
          // className="btn btn-secondary"

          style={{ margin: "0 5px", boxShadow: "none" }}
          to="/stories"
        >
          Stories
        </NavLink>
        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            isActive ? "btn btn-dark btn-sm disabled" : "btn btn-sm btn-dark"
          }
          style={{ boxShadow: "none" }}
        >
          Dashboard
        </NavLink>
      </nav>
      <Outlet />
    </div>
  );
};

export default App;
