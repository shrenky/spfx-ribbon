import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Tab, ITabProps } from './Tab';
import Styles from './Tab.module.scss';

export interface ITabsProps {
    children: any[]
}

export interface ITabsStates {
    activeTab: string
}

export class Tabs extends React.Component<ITabsProps, ITabsStates> {
    constructor(props)
    {
        super(props);
        this.state = {
            activeTab: this.props.children[0].props.label
        };
    }

    onClickTabItem = (tab) => {
        this.setState({ activeTab: tab });
      }

    public render() {
        const { children } = this.props;
        const { activeTab } = this.state;
        return (
          <div className="tabs">
            <ol className={Styles["tab-list"]}>
              {children.map((child) => {
                const { label } = child.props;
    
                return (
                  <Tab
                    activeTab={activeTab}
                    key={label}
                    label={label}
                    onClick={this.onClickTabItem.bind(this)}
                  />
                );
              })}
            </ol>
            <div className="tab-content">
              {children.map((child) => {
                if (child.props.label !== activeTab) return undefined;
                return child.props.children;
              })}
            </div>
          </div>
        );
    }
}