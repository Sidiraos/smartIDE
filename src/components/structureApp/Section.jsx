import { useSelector, useDispatch } from 'react-redux';
import { updateCode } from '../../redux/slices/codeUpdater';
import Preview from '../Preview';
import Code from '../Code';
const Section = () => {
    const toggleState = useSelector((state) => state.toggleSlice);
	return (
		<section className="flex-grow relative ">
          {
            toggleState ? <Preview /> : <Code />
          }
		</section>
	);
};
export default Section;
