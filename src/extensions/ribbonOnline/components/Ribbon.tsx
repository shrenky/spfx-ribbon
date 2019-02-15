import * as React from 'react';
import * as ReactDom from 'react-dom';
import Styles from './Tab.module.scss';
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
            <div className={Styles.ribbon}>
                <Tabs>
                    <Tab key="Files" label="Files" activeTab="Files">
                        Ribbon buttons, <em>Files</em>!
                    </Tab>
                    <Tab key="Library" label="Library" activeTab="Files">
                        Library settings, <em>Library</em>!
                    </Tab>
                </Tabs>
            </div>
            
        );
    }
}

