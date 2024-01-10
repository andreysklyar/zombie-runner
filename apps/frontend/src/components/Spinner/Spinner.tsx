import React, { FunctionComponent } from 'react';
import classNames from 'classnames';

interface Props {
    color?: string
}

// TODO: add colors
const Spinner: FunctionComponent<Props> = ({color}) => {
    return (
        <div className='text-center'>
            <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    )
}

export default Spinner;
