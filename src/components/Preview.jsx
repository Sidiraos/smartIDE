import {useSelector} from 'react-redux';


const Preview = () => {
const codes = useSelector((state) => state.codeUpdater);
const getCode = (lang) => codes.find(obj => obj.lang === lang)
const srcCode = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <style>
            ${getCode('CSS').code}
        </style>
    </head>
  
    <body className="ps-10 pr-3 pt-9 pb-3" >
        ${getCode('HTML').code}
        <script>
            ${getCode('JS').code}
        </script>
    </body>
    </html>

    `


  return (
    <iframe className="w-full h-full block bg-white" sandbox='allow-scripts' srcDoc={srcCode} ></iframe>
  )
}
export default Preview