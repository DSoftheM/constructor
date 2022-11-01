import { useState, MouseEvent } from 'react';
import { Icons } from '../../enums/Icons';
import './Dropdown.scss';
import DropdownItem from './DropdownItem/DropdownItem';

interface DropdownProps {
    title: string;
    pagesCount: number;
}

export default function Dropdown({ title, pagesCount }: DropdownProps) {
    const [activeNumber, setActiveNumber] = useState<number>(1);
    const selected: string = `${title} ${activeNumber}`;

    const handleClick = (num: number) => {
        setActiveNumber(num);
    };

    return (
        <>
            <div className="dropdown">
                <div>{selected} <img src={Icons.arrow} alt="arrow down" /></div>
                <ul>
                    {
                        Array(pagesCount)
                            .fill(null)
                            .map((_, index) =>
                                <DropdownItem
                                    key={index}
                                    title={title}
                                    num={index + 1}
                                    handleClick={handleClick}
                                />
                            )
                    }
                </ul>
            </div>
        </>
    );
};
