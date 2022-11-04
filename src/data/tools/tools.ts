import { ITool } from "../../types/Tool.interface";
import { IToolData } from "../../types/ToolData.interface";
import { boxToolData } from "./toolsData/boxTool";
import { dotsToolData } from "./toolsData/dotsTool";
import { textToolData } from "./toolsData/textTool";

export const toolsData: ITool[] = [
    {
        id: 1,
        imgPath: 'img/arrow-menu.svg',
        description: 'Move',
        isOnce: true,
    },
    {
        id: 2,
        imgPath: 'img/T.svg',
        description: 'Text',
        isOnce: false,
        toolData: textToolData
    },
    {
        id: 3,
        imgPath: 'img/box.svg',
        description: 'Block',
        isOnce: false,
        toolData: boxToolData
    },
    {
        id: 4,
        imgPath: 'img/hand.svg',
        description: 'Hand',
        isOnce: true
    },
    {
        id: 5,
        imgPath: 'img/dots.svg',
        description: 'More',
        isOnce: false,
        toolData: dotsToolData,
        dropdownArrow: false
    }
];