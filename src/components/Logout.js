import React from "react";

// ================
// COMPONENT
// ================
const Logout = () => {
  // ==============
  // CLEAR SESSION
  // ==============
  function clearSession() {
    localStorage.clear();
    alert("You have successfully logged out!");
    window.location.reload();
  }

  return (
    <div>
      <h3>Are you sure you want to logout?</h3>
      <br></br>
      <button onClick={clearSession}>Logout</button>
    </div>
  );
};
export default Logout;
