//this is root file of react project
import { createRoot } from "react-dom/client";
import { FormComp } from "./FormComp";

const data = ["A", "B", "C", "D", "E", "F", "G", "H", "Z"]

createRoot(document.getElementById("root")).render(
    <>
        {/* dynamic Itreation  */}
        {data.map((ele) => {
            return <FormComp name={ele} key={ele} />
        })}

        {/* HardCoded  */}
        <FormComp name={"TEST"} />
        <FormComp name={"TEST245"} />
        <FormComp name={"TEST"} />
        <FormComp name={"TEST"} />
        <FormComp name={"TEST"} />
        <FormComp name={"4545"} />
        <FormComp name={"TEST"} />
    </>
)