import { useTypedSelector } from '../hooks/useTypedSelector';


export function UserCard() {
	const { user } = useTypedSelector(state => state.registration);


	return <div style={{
		padding: '5px 30px',
		position: 'fixed',
		top: 0,
		right: 0,
		background: 'rgba(50, 50, 50, 0.5)'
	}}>

		<div>{user!.name}</div>
		<div style={{ fontSize: '0.5em', color: '#777777' }}>{user!.id}</div>
	</div>
}
