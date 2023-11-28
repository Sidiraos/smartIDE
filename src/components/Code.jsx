import { useSelector, useDispatch } from 'react-redux';
import { updateCode } from '../redux/slices/codeUpdater';
const Code = () => {
    const codes = useSelector((state) => state.codeUpdater);
	const index = useSelector((state) => state.updateIndexSlice.index);
	const dispatch = useDispatch();
	return (
		<textarea
			spellCheck="false"
			autoCorrect="off"
			className="absolute top-0 left-0 w-full h-full outline-none resize-none bg-inherit text-xl ps-10 pr-3 pt-9 pb-3 "
			value={codes[index].code}
			onChange={(e) =>
				dispatch(updateCode({ code: e.target.value, index: index }))
			}
		>
			{`
        <div>
            <h1>Editeur de code avec React</h1>
            <p>Codez directement sur votre navigateur</p>
        </div>
    `}
		</textarea>
	);
};
export default Code;
