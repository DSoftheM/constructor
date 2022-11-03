import { useState } from "react";
import { ITool, toolsData } from "../../../data/tools/tools";
import { textToolDropdownImg } from "../../../data/tools/toolsData/textTool";
import { Icons } from "../../../enums/Icons";
import ImgDropdown from "../../ImgDropdown/ImgDropdown";
import OnceToolItem from "./ToolItem/OnceToolItem";
import ToolItem from "./ToolItem/ToolItem";

interface ToolsProps {
    tools: ITool[];
}

export default function Tools({ tools }: ToolsProps) {
    const [activeTool, setActiveTool] = useState<number>(1);
    return (
        <>
            <div className="tools">
                <ul className="tools__items">
                    {
                        toolsData.map((tool: ITool) => {
                            if (tool.isOnce) return <OnceToolItem imgPath={tool.imgPath} />
                            return (
                                <ToolItem>
                                    <ImgDropdown titleImg={tool.imgPath} toolData={tool.toolData} />
                                </ToolItem>
                            );
                        })
                    }

                    {/* <OnceToolItem imgPath={Icons.arrowMenu} />

                    <ToolItem>
                        <ImgDropdown titleImg={textToolDropdownImg} />
                    </ToolItem> */}

                    {/* <li className="tools__item">
                        <div className="dropdown">
                            <div className="dropdown__hover"><img src="img/box.svg" /></div>
                            <ul>
                                <li>
                                    <a href="#">
                                        <div className="dropdown__img">
                                            <img src="img/box.svg" alt="Text" />
                                        </div>
                                        <p className="dropdown__text">Секция</p>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <div className="dropdown__img">
                                            <img src="img/article.svg" alt="Link" />
                                        </div>
                                        <p className="dropdown__text">Статья</p>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <div className="dropdown__img">
                                            <img src="img/iframe.svg" alt="Header" />
                                        </div>
                                        <p className="dropdown__text">IFrame</p>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li className="tools__item once">
                        <img src="img/hand.svg" />
                    </li>
                    <li className="tools__item">
                        <div className="dropdown">
                            <div>
                                <div className="tools__more" />
                                <ul>
                                    <li>
                                        <a href="#">
                                            <div className="dropdown__img">
                                                <img src="img/img.svg" alt="Text" />
                                            </div>
                                            <p className="dropdown__text">Изображение</p>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <div className="dropdown__img">
                                                <img src="img/audio.svg" alt="Link" />
                                            </div>
                                            <p className="dropdown__text">Аудио</p>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <div className="dropdown__img">
                                                <img src="img/video.svg" alt="Header" />
                                            </div>
                                            <p className="dropdown__text">Видео</p>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <div className="dropdown__img">
                                                <img src="img/canvas.svg" alt="Paragraph" />
                                            </div>
                                            <p className="dropdown__text">Холст</p>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </li> */}
                </ul>
            </div>
        </>
    );
};
