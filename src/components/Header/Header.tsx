import { toolsData } from "../../data/tools/tools";
import Bar from "./Bar/Bar";
import Tools from "./Tools/Tools";

export default function Header(): JSX.Element {
    return (
        <>
            <Bar />
            <Tools tools={toolsData} />
        </>
    );
};
