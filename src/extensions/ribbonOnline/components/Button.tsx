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
            <span className={Styles.button}>
                <span className={Styles.imageContainer32}>
                    <div className={Styles.buttonImage32}></div>
                </span>
                <span className={Styles.buttonName}>
                    {this.props.buttonName}
                </span>
                
            </span>
        );
    }
}