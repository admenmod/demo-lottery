import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypedSelector';


export function Registeration() {
	const { setInput, register } = useActions();
	const registration = useTypedSelector(state => state.registration);


	return <div>
		<form>
			<input onInput={e => setInput(e.currentTarget.value)}/>

			<button onClick={e => {
				e.preventDefault();

				if(!registration.input) return;

				register({
					id: '9c78c8e2-ead4-4f8d-b04d-029e8f756af8',
					name: registration.input
				});
			}}>register</button>
		</form>
	</div>
}
