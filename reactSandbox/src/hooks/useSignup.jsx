import { useState, useEffect } from "react";
import { useAuthContext } from "./useAuthContext";

import { auth } from "../firebase/config";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

export function useSignup() {
  const [isCancelled, setIsCancelled] = useState(false);
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const { dispatch } = useAuthContext();

  const signup = async (email, password, displayName) => {
    setError(null);
    setIsPending(true);

    createUserWithEmailAndPassword(auth, email, password)
      .then(res => {
        updateProfile(res.user, { displayName: displayName });
        dispatch({ type: "LOGIN", payload: res.user });

          setIsPending(false);
          setError(null);
      })
      .catch(err => {
          setError(err.message);
          setIsPending(false);
      });
  };

  return { error, isPending, signup };
}

/*     createUserWithEmailAndPassword(auth, email, password)
    .then(res => {
      dispatch({ type: "LOGIN", payload: res.user });
    })
    .catch(err => {
      setError(err.message);
    });
    await res.user.updateProfile({ displayName })
*/
