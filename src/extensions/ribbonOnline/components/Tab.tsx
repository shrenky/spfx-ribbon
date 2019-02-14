import * as React from 'react';
import * as ReactDom from 'react-dom';
import Styles from './Tab.module.scss';

export interface ITabProps {
    activeTab: string;
    key: string;
    label: string;
    onClick?: (label:string)=>void;
}

export interface ITabStates {

}

export class Tab extends React.Component<ITabProps, ITabStates> {
    constructor(props)
    {
        super(props);
    }

    onClick = () => {
        const { label, onClick } = this.props;
        onClick(label);
      }
    
      render() {
        const {
          onClick,
          props: {
            activeTab,
            label,
          },
        } = this;
        
        if (activeTab === label) {
            return (
                <li
                    className={Styles.tablistactive}
                    onClick={this.onClick}
                >
                    {label}
                </li>
            );
        }
        else
        {
            return (
                <li
                    className={Styles.tablistitem}
                    onClick={this.onClick}
                >
                    {label}
                </li>
            );
        }
    
        
      }
}