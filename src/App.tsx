import './App.scss';
import Header from './components/Header/Header';
import Main from './components/Main/Main';

function App() {
	return (
		<div className="wrapper">
			{/* <Header />
			<Main /> */}
			<F />
		</div>
	);
}

export default App;

const F = () => {
	return (
		<ul>
			<li>1 Пункт</li>
			<li>2 Пункт</li>
			<li>3 Пункт</li>
			<li>
				<ul>1 подпункт</ul>
				<ul>2 подпункт</ul>
				<ul>3 подпункт</ul>
			</li>
			<li>4 Пункт</li>
		</ul>
	);
}
