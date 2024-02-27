//this is root file of react project
import { createRoot } from "react-dom/client";
import { A } from "./A";
import { B } from "./B";

createRoot(document.getElementById("root")).render(
    <>
        <A />
        <B />
    </>
)