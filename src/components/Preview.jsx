import {useSelector} from 'react-redux';


const Preview = () => {
const codes = useSelector((state) => state.codeUpdater);
const srcCode = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <style>
            ${codes[1].code}
        </style>
    </head>
  
    <body className="ps-10 pr-3 pt-9 pb-3" >
        ${codes[0].code}
        <script>
            ${codes[2].code}
        </script>
    </body>
    </html>

    `


  return (
    <iframe className="w-full h-full bg-white" srcDoc={srcCode} ></iframe>
  )
}
export default Preview