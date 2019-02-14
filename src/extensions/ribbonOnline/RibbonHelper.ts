import * as ReactDom from 'react-dom';

export class RibbonHelper {

    private static readonly ribbonElementId: string = 'ribbon-command-container-element';

    public static clearRibbon(): void {
        const id: string = RibbonHelper.ribbonElementId;
        ReactDom.unmountComponentAtNode(document.getElementById(id));
    }

    public static appendRibbon(parentElement: HTMLElement): HTMLElement {
        const id: string = RibbonHelper.ribbonElementId;

        let ribbonELement: HTMLElement = parentElement.querySelector(`#${id}`) as HTMLElement;
        if (!ribbonELement) {
            ribbonELement = document.createElement('div');
            ribbonELement.setAttribute('id', id);

            parentElement.appendChild(ribbonELement);
        }

        return ribbonELement;
    }
}