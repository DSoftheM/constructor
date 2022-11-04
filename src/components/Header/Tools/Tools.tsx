import { useState } from "react";
import { ITool } from "../../../data/tools/tools";
import ImgDropdown from "../../ImgDropdown/ImgDropdown";
import OnceToolItem from "./ToolItem/OnceToolItem";
import ToolItem from "./ToolItem/ToolItem";

interface ToolsProps {
    tools: ITool[];
}

export default function Tools({ tools }: ToolsProps) {
    const [activeTool, setActiveTool] = useState<number>(1);

    const handleClickOnSubmenu = (id: number) => {
        setActiveTool(id);
    };

    return (
        <div className="tools">
            <ul className="tools__items">
                {tools.map(({ isOnce, id, imgPath, toolData }: ITool) => {
                    if (isOnce) return (
                        <OnceToolItem
                            handleClickOnSubmenu={handleClickOnSubmenu}
                            id={id}
                            imgPath={imgPath}
                            isActive={id === activeTool}
                        />
                    );
                    return (
                        <ToolItem
                            isActive={id === activeTool}
                            handleClickOnSubmenu={handleClickOnSubmenu}
                            id={id}
                        >
                            <ImgDropdown titleImg={imgPath} toolData={toolData} />
                        </ToolItem>
                    );
                })}
            </ul>
        </div>
    );
};
