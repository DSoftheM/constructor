import { useAppSelector } from '../../../redux/hooks/hooks';
import './Canvas.scss';

interface CanvasProps {

}

export default function Canvas({ }: CanvasProps): JSX.Element {
    const activeTool: number = useAppSelector(state => state.toolsReducer.activeTool);

    // !
    if (activeTool === 4) {

    }

    return (
        <section className="main__center">
            <div className="main__parent">
                <div className="main__child">

                </div>
            </div>
        </section>
    );
}
