import ListCode from '../ListCode';
import { useSelector } from 'react-redux';
const Nav = () => {
	const codes = useSelector((state) => state.codeUpdater);
	// console.log(codes);
	return (
		<nav className="min-w-[150px] shrink-0 border-r border-gray-100  hidden sm:block">
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
