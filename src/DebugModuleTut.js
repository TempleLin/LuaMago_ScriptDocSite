import Table from "react-bootstrap/Table";
import SyntaxHighlighter from "react-syntax-highlighter";
import {docco} from "react-syntax-highlighter/dist/cjs/styles/hljs";
import {Fragment} from "react";

function DebugModuleTut() {
    return (
        <Fragment>
            <h4>debug模組</h4>
            <Table striped bordered hover>
                <thead>
                <tr>
                    <th>函式</th>
                    <th>功能</th>
                    <th>程式範例</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>log</td>
                    <td>在遊戲中印出使用者指定值。</td>
                    <td>
                        <SyntaxHighlighter language="javascript" style={docco} showLineNumbers>
                            {
                                "debug.log('Hello world!');\n" +
                                "for(let i = 0; i < 5; i++) {\n" +
                                "\tdebug.log(i);\n" +
                                "}"
                            }
                        </SyntaxHighlighter>
                    </td>
                </tr>
                </tbody>
            </Table>
        </Fragment>
    )
}

export default DebugModuleTut
