interface ColumnsProps {
    count: number;
}

export default function Columns({ count }: ColumnsProps): JSX.Element {
    return (
        <ul className="settings-item__list">
            {Array(count).fill(null).map((item, index) =>
                <li className="settings-item__li" key={index}>
                    <input type="text" placeholder="ввод" />
                    <span>:</span>
                    <input type="text" placeholder="ввод" />
                </li>
            )}
        </ul>
    );
}
