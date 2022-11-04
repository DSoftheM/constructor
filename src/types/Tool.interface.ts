import { IToolData } from "./ToolData.interface";

export interface ITool {
    id: number;
    imgPath: string;
    description: string;
    isOnce: boolean;
    toolData?: IToolData[];
    dropdownArrow?: boolean;
}