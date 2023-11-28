import ListCode from '../ListCode';
import { useSelector } from 'react-redux';
const Nav = () => {
	const codes = useSelector((state) => state.codeUpdater);
    const navBarToggleState = useSelector((state) => state.navBarToggleSlice);
	// console.log(navBarToggleState);
	return (
		<nav className={`min-w-[150px] shrink-0 border-r border-gray-100 transition-transform will-change-auto ease-in-out delay-100 ${navBarToggleState ? 'translate-x-[-100%] absolute left-0 top-0 h-full' : ''}`}>
			<ul className="flex flex-col gap-5">
				{codes.map((code) => (
					<ListCode
						key={code.id}
						id={code.id}
						logo={code.logo}
						lang={code.lang}
					/>
				))}
			</ul>
		</nav>
	);
};
export default Nav;
