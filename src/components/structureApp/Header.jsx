import { hide, view } from '../../../logoData';
import { useSelector, useDispatch } from 'react-redux';
import { toggle } from '../../redux/slices/toggleSlice';

const Header = () => {
	const toggleState = useSelector((state) => state.toggleSlice);
	// console.log(toggleState);
	const dispatch = useDispatch();
	return (
		<header className="border-b border-gray-100 px-4 py-5 flex justify-between items-center">
			<h1 translate="no" className="text-2xl select-none">
				<span className="text-base">the</span>SmartIDE
			</h1>
			<button onClick={() => dispatch(toggle())} className='flex items-center gap-2 bg-blue-600 px-4 py-2 rounded-md shadow-md'>
				<img
					src={toggleState ? hide : view}
					alt={toggleState ? 'Hide' : 'View'}
					className="w-8"
				/>
				<span>{toggleState ? 'Hide' : 'View'} Preview</span>
			</button>
			<div className="flex flex-col gap-1 cursor-pointer">
				<p className="rounded-full w-1 h-1 bg-slate-50"></p>
				<p className="rounded-full w-1 h-1 bg-slate-50"></p>
				<p className="rounded-full w-1 h-1 bg-slate-50"></p>
			</div>
		</header>
	);
};
export default Header;
