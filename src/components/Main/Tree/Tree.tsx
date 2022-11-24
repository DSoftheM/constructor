import './Tree.scss';

interface TreeProps {

}

export default function Tree({ }: TreeProps): JSX.Element {
    return (
        <ul className="tree">
            <li className="tree__item">1 пункт</li>
            <li className="tree__item">2 пункт</li>
            <li className="tree__item">
                <ul className="tree">
                    <li className="tree__item">1 подпункт</li>
                    <li className="tree__item">2 подпункт</li>
                </ul>
            </li>
            <li className="tree__item">3 пункт</li>
        </ul>
    );
}
