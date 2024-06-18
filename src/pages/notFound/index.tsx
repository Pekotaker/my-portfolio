import React from "react";

const NotFound: React.FC = () => {
  return (
    <div>
      <h1>404 - Page Not Found</h1>
      <p>The page you are looking for does not exist.</p>
      <button>
        <a href="/">Go Home</a>
      </button>
    </div>
  );
};

export default NotFound;
