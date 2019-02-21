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
        <li className={Styles.group}>
            <span>
                <span className={Styles.groupBody}>
                    {
                        this.props.children.map((child) => {
                            return child;
                        })
                    }
                </span>
                
                <span className={Styles.groupTitle}>{this.props.groupName}</span>
            </span>
            <span className={Styles.groupSeperator}></span>
        </li>);
    }
}