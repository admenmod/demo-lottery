import { useTypedSelector } from './hooks/useTypedSelector';
import { Registeration } from './components/Registeration';
import { Content } from './components/Content';
import './App.css';


export function App() {
	const registration = useTypedSelector(state => state.registration);


	return <section>
		{ registration.registred ? <Content /> : <Registeration /> }
	</section>
}
