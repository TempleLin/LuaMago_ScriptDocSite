import Table from "react-bootstrap/Table";
import SyntaxHighlighter from "react-syntax-highlighter";
import {docco} from "react-syntax-highlighter/dist/cjs/styles/hljs";
import {Fragment} from "react";

function MagicModuleTut() {
    return (
        <Fragment>
            <h4>magic模組</h4>
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
                    <td>fireball</td>
                    <td>在遊戲中發射火球攻擊敵人。</td>
                    <td>
                        <SyntaxHighlighter language="javascript" style={docco} showLineNumbers>
                            {
                                "for(let i = 0; i < 3; i++) {\n" +
                                "\tmagic.fireball();\n" +
                                "}"
                            }
                        </SyntaxHighlighter>
                    </td>
                </tr>
                <tr>
                    <td>floatingArrow</td>
                    <td>在遊戲中發射浮空飛箭攻擊敵人。</td>
                    <td>
                        <SyntaxHighlighter language="javascript" style={docco} showLineNumbers>
                            {
                                "magic.floatingArrow();"
                            }
                        </SyntaxHighlighter>
                    </td>
                </tr>
                </tbody>
            </Table>
        </Fragment>
    )
}

export default MagicModuleTut
