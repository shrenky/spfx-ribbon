import * as React from 'react';
import * as ReactDom from 'react-dom';

export interface ITabProps {
    activeTab: string;
    key: string;
    label: string;
    onClick: (label:string)=>void;
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
    
        let className = 'tab-list-item';
    
        if (activeTab === label) {
          className += ' tab-list-active';
        }
    
        return (
          <li
            className={className}
            onClick={onClick}
          >
            {label}
          </li>
        );
      }
}