import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Tabs } from './Tabs';
import { Tab } from './Tab';

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
        return (
            <Tabs>
                <Tab key="Gator" label="Gator" activeTab="Gator" onClick={()=>console.log('Gator')} >
                    See ya later, <em>Alligator</em>!
                </Tab>
                <Tab key="Croc" label="Croc" activeTab="Croc" onClick={()=>console.log('Croc')} >
                    After 'while, <em>Crocodile</em>!
                </Tab>
          </Tabs>
        );
    }
}

