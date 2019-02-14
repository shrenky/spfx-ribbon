import * as React from 'react';
import * as ReactDom from 'react-dom';

export interface IRibbonProps{
    element: HTMLElement;
    dismiss: () => void;
    elementName: string;
}

export interface IRibbonStates{

}

export class Ribbon extends React.Component<IRibbonProps, IRibbonStates> {
    constructor(props){
        super(props);
    }

    public render(){
        return (<div/>);
    }
}

