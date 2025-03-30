import * as go from 'gojs';
import { links } from './links.ts';

export function tree() {
    // set your license key here before creating the diagram: go.Diagram.licenseKey = "...";
    const diagram = new go.Diagram({
        'undoManager.isEnabled': true,

        layout: new go.TreeLayout({ angle: 0, layerSpacing: 100 }),
    });

    // define a simple Node template
    diagram.nodeTemplate = new go.Node('Vertical', {
        background: 'white',
    }).add(
        new go.Picture({
            width: 120,
            height: 60,
        }).bind('source'),
        new go.TextBlock('Default Text', {
            margin: 12,
            stroke: 'black',
            font: 'bold 16px sans-serif',
        }).bind('text', 'name'),
    );

    // the same model as before
    const z = (diagram.model = new go.TreeModel(links));
    z.isReadOnly = true;

    return diagram;
}
