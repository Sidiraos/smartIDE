import { hide, view } from '../../../logoData';
import { useSelector, useDispatch } from 'react-redux';
import { toggle } from '../../redux/slices/toggleSlice';
import { navBarToggle } from '../../redux/slices/navBarToogleSlice';
const Header = () => {
	const toggleState = useSelector((state) => state.toggleSlice);
  const navBarToggleState = useSelector((state) => state.navBarToggleSlice);
  // console.log(navBarToggleState);
	// console.log(toggleState);
	const dispatch = useDispatch();
	return (
		<header className="border-b border-gray-100 px-4 py-5 flex flex-col justify-center items-center gap-3 sm:justify-between sm:items-center sm:flex-row sm:gap-0">
			<h1 translate="no" className="text-2xl select-none">
				<span className="text-base">the</span>SmartIDE
			</h1>
			<button
				onClick={() => dispatch(toggle())}
				className="flex items-center gap-2 bg-blue-600 px-4 py-2 rounded-md shadow-md"
			>
				<img
					src={toggleState ? hide : view}
					alt={toggleState ? 'Hide' : 'View'}
					className="w-5"
				/>
				<span>{toggleState ? 'Hide' : 'View'} Preview</span>
			</button>
			<button onClick={() => dispatch(navBarToggle())} className={`bg-blue-600 hover:bg-blue-500 px-4 py-2 rounded-md shadow-md flex items-center gap-2`}>
				<img
					src={!navBarToggleState ? hide : view}
					alt={!navBarToggleState ? 'Hide Navbar' : 'Show Navbar'}
					className="w-5"
				/>
				<span className={`${!navBarToggleState ? 'line-through' : ''} `}>NavBar</span>
			</button>
		</header>
	);
};
export default Header;
