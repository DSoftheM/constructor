import Dropdown from '../Dropdown/Dropdown';
import Settings from '../Settings/Settings';
import Canvas from './Canvas/Canvas';
import './Main.scss';

export default function Main(): JSX.Element {
    return (
        <>
            <main className="main">
                <aside className="main__left aside-main">
                    <header className="aside-main__header">
                        <div className="aside-main__name">Слои</div>
                        <Dropdown title='Страница' pagesCount={3} dropdownArrow={true} />
                    </header>
                </aside>
                <Canvas />
                <aside className="main__right">
                    <header className="aside-main__header">
                        <div className="aside-main__name">Редактирование</div>
                        <Dropdown title='Шаблон' pagesCount={3} />
                    </header>
                    <Settings />
                </aside>
            </main>

        </>
    );
};
