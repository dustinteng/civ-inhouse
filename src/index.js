import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./App";

import { ContextWindowProvider } from "./component/content/contentWindowContext";

import Modules from "./routes/modules";
import Inventory from "./routes/inventory.jsx";
import Box from "./routes/modules/box";

// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// import { getAuth, onAuthStateChanged } from "firebase/auth";
// import { getFirestore, collection } from "firebase/firestore";

// // Firebase web app configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyA3cOgFcizEZPRapS7_8JCPnRYrAdedQHc",
//   authDomain: "civ-robotics.firebaseapp.com",
//   projectId: "civ-robotics",
//   storageBucket: "civ-robotics.appspot.com",
//   messagingSenderId: "155377639051",
//   appId: "1:155377639051:web:1c776c3bb847d06d32be8e",
//   measurementId: "G-PTKTJS806P",
// };

// // Initializing Firebase
// const firebaseApp = initializeApp(firebaseConfig);
// // const analytics = getAnalytics(firebaseApp);
// // const auth = getAuth(firebaseApp);
// const db = getFirestore(firebaseApp);

// onAuthStateChanged(auth, (user) => {
//   if (user != null) {
//     console.log("logged in!");
//   } else {
//     console.log("no user!");
//   }
// });

const rootElement = document.getElementById("root");
render(
  <body style={{ overflow: "hidden" }}>
    <ContextWindowProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            {/* <Route path="modules" element={<Modules />}>
            <Route path="boxs" element={<Box />} />
          </Route>
          <Route path="inventory" element={<Inventory />}></Route>
          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>bad gateway</p>
              </main>
            }
          /> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </ContextWindowProvider>
  </body>,
  rootElement
);
