import Dropdown from '../Dropdown/Dropdown';
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
                <section className="main__center">
                </section>
                <aside className="main__right">
                    <header className="aside-main__header">
                        <div className="aside-main__name">Редактирование</div>
                        <Dropdown title='Шаблон' pagesCount={3} />
                    </header>
                </aside>
            </main>

        </>
    );
};
