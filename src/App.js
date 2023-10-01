import Editor from "./Component/Editor/Editor";
import {useState, useEffect} from "react";
import LocalStorage from "./Component/LocalStorage/LocalStorage";
function App() {
    const [srcDoc, setSrcDoc] = useState("")
    const [html, setHtml] = LocalStorage("html","")
    const [css, setCss] = LocalStorage("css","")
    const [js, setJs] = LocalStorage("js","")
    useEffect(() => {
        const timeout = setTimeout(() => {
            setSrcDoc(`
                  <html lang="en">
                    <body>${html}</body>
                    <style>${css}</style>
                    <script>${js}</script>
                   </html>`
            )
            return clearTimeout(timeout)
        }, 500)
    }, [js, css, html])
    return (
        <div className={"pen"}>
            <div className="pane-down">
                <iframe
                    srcDoc={srcDoc}
                    title="output"
                    sandbox="allow-scripts"
                    frameBorder="0"
                    width="100%"
                    height="100%"
                />
            </div>
            <div className="pane-top">
                <Editor language={"xml"} displayName={"HTML"} value={html} onChange={setHtml}/>
                <Editor language={"css"} displayName={"CSS"} value={css} onChange={setCss}/>
                <Editor language={"javascript"} displayName={"JS"} value={js} onChange={setJs}/>
            </div>
        </div>
    );
}

export default App;
