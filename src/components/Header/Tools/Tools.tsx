import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks/hooks";
import { setActiveTool } from "../../../redux/slices/toolsSlice";
import { ITool } from "../../../types/Tool.interface";
import ImgDropdown from "../../ImgDropdown/ImgDropdown";
import OnceToolItem from "./ToolItem/OnceToolItem";
import ToolItem from "./ToolItem/ToolItem";

interface ToolsProps {
    tools: ITool[];
}

export default function Tools({ tools }: ToolsProps) {
    const activeTool: number = useAppSelector((state) => state.toolsReducer.activePage);
    const dispatch = useAppDispatch();

    const handleClickOnSubmenu = (id: number) => {
        dispatch(setActiveTool(id));
    };

    return (
        <div className="tools">
            <ul className="tools__items">
                {tools.map(({ isOnce, id, imgPath, toolData, dropdownArrow }: ITool) => {
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
                            <ImgDropdown
                                titleImg={imgPath}
                                toolData={toolData}
                                dropdownArrow={dropdownArrow}
                            />
                        </ToolItem>
                    );
                })}
            </ul>
        </div>
    );
};
