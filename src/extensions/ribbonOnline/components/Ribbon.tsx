import * as React from 'react';
import * as ReactDom from 'react-dom';
import Styles from './Tab.module.scss';
import { Tabs } from './Tabs';
import { Tab } from './Tab';
import { Group } from './Group';
import { Button } from './Button';

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
                        <Group groupName="New">
                            <Button buttonName="New Document"></Button>
                            <Button buttonName="Upload Document"></Button>
                        </Group>
                        <Group groupName="Open &amp; Check Out">
                            <div></div>
                            <div></div>
                        </Group>
                    </Tab>
                    <Tab key="Library" label="Library" activeTab="Files">
                        Library settings, <em>Library</em>!
                    </Tab>
                </Tabs>
            </div>
            
        );
    }
}

