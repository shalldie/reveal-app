import React from 'react';
import classNames from 'classnames';

// export const withClassName<T> = (extraClassName: string) => (BaseComponent: React.ComponentType<T>) => {
//     const WrappedComponent = ({className = '', ...props}) => (
//         <BaseComponent {...props} className={classNames(className, extraClassName)} />
//     );

//     return WrappedComponent;
// };

export function withClassName<T extends {className?: string}>(
    extraClassName: string,
    BaseComponent: React.ComponentType<T>
) {
    const WrappedComponent = (props: T) => (
        <BaseComponent {...props} className={classNames(props.className, extraClassName)} />
    );

    return WrappedComponent;
}
