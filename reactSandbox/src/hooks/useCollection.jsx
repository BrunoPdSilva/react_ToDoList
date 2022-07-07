import { useState, useEffect, useRef } from "react";
import { dataBase } from "../firebase/config";

import { collection, onSnapshot, query, where } from "firebase/firestore";

export const useCollection = (collec, _query) => {
  const [documents, setDocuments] = useState(null);

  const q = useRef(_query).current;

  useEffect(() => {
    let ref = collection(dataBase, collec);

    if (q) {
      ref = query(ref, where(...q));
    }

    const unsub = onSnapshot(ref, snapshot => {
      let results = [];

      snapshot.docs.forEach(doc => {
        results.push({ ...doc.data(), id: doc.id });
      });
      setDocuments(results);
    });

    return () => unsub();
  }, [collec, q]);

  return { documents };
};
