import { createSlice } from '@reduxjs/toolkit';
import { html, js, css } from '../../../logoData';

const initialState = [
	{
		id: 1,
		lang: 'HTML',
		logo: html,
		code: `
        <div>
            <h1>Code Editor with React</h1>
            <p>Code directly on your browser</p>
        </div>
        `,
	},
	{
		id: 2,
		lang: 'CSS',
		logo: css,
		code: `
        body {
            background-color: #fff;
        }
        `,
	},
	{
		id: 3,
		lang: 'JS',
		logo: js,
		code: `
            console.log('Hello World')        
        `,
	},
];

const codeUpdater = createSlice({
	name: 'code-updater',
	initialState,
	reducers: {
		updateCode: (state, action) => {
			state[action.payload.index].code = action.payload.code;
		},
	},
});

export const { updateCode } = codeUpdater.actions;
export default codeUpdater.reducer;
