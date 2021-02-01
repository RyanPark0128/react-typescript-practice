import ReactDOM from 'react-dom';
import UserSearch from './refs/UserSearch';
// import Event from './events/Event';

const App = () => {
	return (
		<div>
			<UserSearch />
		</div>
	);
};

ReactDOM.render(<App />, document.querySelector('#root'));
