import './Bar.scss';

export default function Bar(): JSX.Element {
    return (
        <>
            <div className="bar">
                <div className="bar__logo">App logo</div>
                <div className="bar__project dropdown">
                    <span>Project <img src="img/arrow.svg" /></span>
                    <ul>
                        <li><a href="#">Project Cat</a></li>
                        <li><a href="#">Project Dog</a></li>
                        <li><a href="#">Project Bird</a></li>
                    </ul>
                </div>
                <div className="bar__icons">
                    <div className="bar__icon">-</div>
                    <div className="bar__icon">=</div>
                    <div className="bar__icon">x</div>
                </div>
            </div>

        </>
    );
};
