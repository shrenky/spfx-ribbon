import * as React from 'react';

export interface IButtonProps {
    buttonNamt: string;
    image: string;
    onClick: ()=>void;
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
            <div>
                
            </div>
        );
    }
}