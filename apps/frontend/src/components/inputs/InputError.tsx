import React from 'react';
import classNames from 'classnames'
import { FieldError } from 'react-hook-form';


interface InputErrorProps {
    error?: string | undefined;
}

const InputError: React.FunctionComponent<InputErrorProps> = ({error}: InputErrorProps) => {
    if (!error) {
        return null;
    }

    return (
        <div className="error">
            <span className="error" style={{color:"red"}}>{error}</span>
        </div>
    );
};

export default InputError;
