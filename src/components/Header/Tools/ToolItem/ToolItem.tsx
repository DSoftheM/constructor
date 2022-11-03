interface ToolItemProps {
    children: React.ReactNode;
}

export default function ToolItem({ children }: ToolItemProps): JSX.Element {
    return (
        <>
            <li className="tools__item">
                {children}
            </li>
        </>
    );
}
