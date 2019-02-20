import * as React from 'react';
import Styles from './Button.module.scss';

export interface IButtonProps {
    buttonName: string;
    //image: string;
    //onClick: ()=>void;
}

export interface IButtonStates {
    disabled: boolean;
}

export class Button extends React.Component<IButtonProps, IButtonStates> {
    constructor(props) {
        super(props);
    }

    public render() {
        return (
            <div className={Styles.button}>
                {this.props.buttonName}
            </div>
        );
    }
}