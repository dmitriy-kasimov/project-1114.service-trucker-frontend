import * as go from 'gojs';
import { links } from './links.ts';

export function tree() {
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
