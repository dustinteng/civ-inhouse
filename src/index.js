import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./App";

import { ContextWindowProvider } from "./context/contentWindowContext";

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
