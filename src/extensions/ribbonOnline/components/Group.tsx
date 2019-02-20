import * as React from 'react';
import * as ReactDom from 'react-dom';
import Styles from './Group.module.scss';

export interface IGroupProps {
    children: any[];
    groupName: string;
}

export class Group extends React.Component<IGroupProps> {
    constructor(props){
        super(props);
    }

    public render() {
        console.log('Group');
        console.log(this.props.children);
        return (
        <div className={Styles.group}>
            {
                
                this.props.children.map((child) => {
                    return child;
              })
            }
        </div>);
    }
}