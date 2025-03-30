import * as go from 'gojs';
import { links } from './links.ts';

export function tree() {
    // set your license key here before creating the diagram: go.Diagram.licenseKey = "...";
    const diagram = new go.Diagram({
        layout: new go.TreeLayout({ angle: 0, layerSpacing: 100 }),
    });

    diagram.linkTemplate = new go.Link().add(
        new go.Shape({ stroke: 'white' }), // the link shape
        new go.Shape({ toArrow: 'Standard', stroke: 'white' }), // the arrowhead
    );

    // define a simple Node template
    diagram.nodeTemplate = new go.Node('Vertical', {
        margin: 10,
        background: 'black',
    }).add(
        new go.TextBlock('Default Text', {
            stroke: 'white',
            font: 'bold 16px sans-serif',
            textAlign: 'left',
        }).bind('text', 'name'),
        new go.Picture({
            width: 120,
            height: 60,
        }).bind('source'),

        go.GraphObject.build('Button', {
            margin: 2,
            width: 120,
            'ButtonBorder.fill': '#5CD039',
            _buttonFillOver: '#5FB744',
        }).add(
            new go.TextBlock('Исследовать', {
                font: 'bold 14px sans-serif',
                stroke: 'white',
            }),
        ),
    );

    // the same model as before
    const z = (diagram.model = new go.TreeModel(links));
    z.isReadOnly = true;

    return diagram;
}
