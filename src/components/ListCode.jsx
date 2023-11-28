import { useDispatch, useSelector } from 'react-redux';
import { updateIndex } from '../redux/slices/updateIndex';
import { hidePreview } from '../redux/slices/toggleSlice';
const ListCode = ({ logo, lang, id }) => {
	const dispatch = useDispatch();
	const codes = useSelector((state) => state.codeUpdater);
	const newIndex = codes.indexOf(codes.find((el) => el.id === id));
	const handleClick = () => {
		dispatch(hidePreview());
		dispatch(updateIndex(newIndex));
	};
	return (
		<li className="hover:bg-slate-500/50 transition-colors ease-out duration-100">
			<button
				onClick={handleClick}
				className="flex justify-between items-center px-4 py-8 w-full outline-none focus:bg-slate-600"
			>
				<img className="w-8 shrink-0" src={logo} />
				<span className="flex-grow ps-4 text-xl">{lang}</span>
			</button>
		</li>
	);
};
export default ListCode;
