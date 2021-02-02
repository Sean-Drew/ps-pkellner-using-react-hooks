1. go to file
2. at terminal prompt, "npm init -y" 
3. at terminal prompt, "npm install react react-dom next"
4. add scripts to package.json under main
    "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "dev": "next",
    "build": "next build",
    "start": "next start"
  }
5. at terminal prompt, "mkdir pages"
6. create "index.js" file within "pages" directory. base content as follows:
    import React from 'react'
    const InputElement = () => {

        return <input placeholder='Placeholder Text' />
    }

    export default InputElement
7. at terminal prompt start dev server with "npm run dev"