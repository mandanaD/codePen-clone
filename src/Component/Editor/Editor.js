import "codemirror/lib/codemirror.css"
import "codemirror/theme/3024-night.css"
import {Controlled as ControlledEditor} from "react-codemirror2";

import "codemirror/mode/xml/xml"
import "codemirror/mode/css/css"
import "codemirror/mode/javascript/javascript"

import "./Editor.css"

const Editor = (props) => {
    const {language, value, displayName, onChange} = props
    const handleChange = (editor, data, value) => {
        onChange(value)
    }
    return (
        <div className="editor">
            <div className="title">
                <div className={"name"}>
                    {displayName}
                </div>
            </div>
            <ControlledEditor
                onBeforeChange={handleChange}
                value={value}
                options={{
                    mode: language,
                    theme: "3024-night",
                    lineNumbers: true,
                    lineWrapping: true,
                    line: true
                }}
            />
        </div>
    )
}
export default Editor;