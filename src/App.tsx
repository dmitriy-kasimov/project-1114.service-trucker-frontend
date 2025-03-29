import * as go from 'gojs';
import { ReactDiagram } from 'gojs-react';

import Freightliner from './assets/Freightliner.png';
import Phantom from './assets/Phantom.png';
import Phantom2 from './assets/Phantom2.png';
import Hauler from './assets/Hauler.png';
import Hauler2 from './assets/Hauler2.png';

import './App.css';

const links = [
    {
        key: 'Freightliner',
        name: 'Freightliner',
        source: Freightliner,
    },
    {
        key: 'Phantom',
        parent: 'Freightliner',
        name: 'Phantom',
        source: Phantom,
    },
    {
        key: 'Phantom2',
        parent: 'Phantom',
        name: 'Phantom 2',
        source: Phantom2,
    },
    {
        key: 'Hauler',
        parent: 'Freightliner',
        name: 'Hauler',
        source: Hauler,
    },
    {
        key: 'Hauler2',
        parent: 'Hauler',
        name: 'Hauler 2',
        source: Hauler2,
    },
];

function initDiagram() {
    // set your license key here before creating the diagram: go.Diagram.licenseKey = "...";
    const diagram = new go.Diagram({
        'undoManager.isEnabled': true,
        layout: new go.TreeLayout({ angle: 270, layerSpacing: 100 }),
    });

    // define a simple Node template
    diagram.nodeTemplate = new go.Node('Horizontal', {
        background: '#44CCFF',
    }).add(
        new go.Picture({
            margin: 10,
            width: 120,
            height: 120,
            background: 'red',
        }).bind('source'),
        new go.TextBlock('Default Text', {
            margin: 12,
            stroke: 'white',
            font: 'bold 16px sans-serif',
        }).bind('text', 'name'),
    );

    // the same model as before
    diagram.model = new go.TreeModel(links);

    return diagram;
}

export default function App() {
    return (
        <div>
            <ReactDiagram
                initDiagram={initDiagram}
                divClassName="myDiagramDiv"
                nodeDataArray={links}
            />
        </div>
    );
}
