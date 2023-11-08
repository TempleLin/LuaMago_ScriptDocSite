import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table';
import {Fragment} from "react";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import DebugModuleTut from "./DebugModuleTut";
import MagicModuleTut from "./MagicModuleTut";

function App() {
  return (
      <Fragment>
        <DebugModuleTut/>

        <MagicModuleTut/>
      </Fragment>
  );
}

export default App;
