import { MouseEvent } from "react";

interface DropdownItemProps {
    title: string;
    num: number;
    handleClick: (num: number) => void;
}

export default function DropdownItem({ num, title, handleClick }: DropdownItemProps) {
    return (
        <>
            <li onClick={() => handleClick(num)}>
                <a href="#1">{`${title} ${num}`}</a>
            </li>
        </>
    );
};
