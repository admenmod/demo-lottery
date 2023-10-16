import { useTypedSelector } from '@/hooks/useTypedSelector';
import { Link } from 'react-router-dom';


export function Header() {
	const { user } = useTypedSelector(state => state.player);


	return <nav style={{
		display: 'grid',
		columnGap: '10px',
		gridTemplateColumns: 'repeat(16, max-content)',
		position: 'absolute',
		top: '0px',
		left: '0px',
		padding: '5px',
		width: '100vw',
		backgroundColor: '#444444'
	}}>
		<Link to='/'>root</Link>
		<Link to='/home'>home</Link>

		{ !user && <>
			<Link to='/login'>login</Link>
			<Link to='/register'>register</Link>
		</> }
	</nav>
}
