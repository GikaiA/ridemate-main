import React from "react";
import { Route, Navigate } from "react-router-dom";
import { getAuth, onIdTokenChanged } from "firebase/auth";

function PrivateRoute({ path, element }) {
  const auth = getAuth();

  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  React.useEffect(() => {
    const unsubscribe = onIdTokenChanged(auth, (user) => {
      setIsLoggedIn(!!user);
    });

    return () => unsubscribe();
  }, [auth]);

  return isLoggedIn ? <Route path={path} element={element} /> : <Navigate to="/access-forbidden" />;
}

export default PrivateRoute;
