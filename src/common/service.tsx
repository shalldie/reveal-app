import {createContext, useContext, useState} from 'react';

export class ServiceBase {
    public state = {};
    setState!: React.Dispatch<React.SetStateAction<any>>;
}

export function ServiceDecorator<T extends {new (...args: any[]): {}}>(constructor: T) {
    return class extends constructor {
        constructor(...args: any[]) {
            super(...args);

            // eslint-disable-next-line
            const [state, setState] = useState(this['state']);
            this['state'] = state;
            this['setState'] = (payload: any) => {
                setState({
                    ...state,
                    ...payload
                });
            };
        }
    };
}

export function createServiceCtx<S extends ServiceBase>(Service: new () => S, Context = createContext<S>(null as any)) {
    function withContext<T>(Child: React.ComponentType<T>) {
        return (props: T) => {
            const s = new Service();

            return (
                <Context.Provider value={s}>
                    <Child {...props} />
                </Context.Provider>
            );
        };
    }

    function useService() {
        return useContext(Context);
    }

    return {
        withContext,
        useService,
        context: Context
    };
}
