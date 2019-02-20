import * as React from 'react';
import * as ReactDom from 'react-dom';
import Styles from './Group.module.scss';

export interface IGroupProps {
    groupName: string;
    children: any[]
}

export class Group extends React.Component<IGroupProps> {
    constructor(props){
        super(props);
    }

    public render() {
        return (
        <div>
            {
                this.props.children.map((child) => {
                    return child.props.children;
              })
            }
        </div>);
    }
}