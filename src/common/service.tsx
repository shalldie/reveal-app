import {createContext, useContext, useRef, useState} from 'react';

export class ServiceBase<S = {}> {
    public state: S = {} as any;
    setState!: React.Dispatch<React.SetStateAction<Partial<S>>>;

    // setState!: (state: Partial<this['state']>) => void;

    // setState!: React.Dispatch<React.SetStateAction<Partial<this['state']>>>;

    // setState!: (
    //     state: Partial<this['state']>
    // ) => void | ((payload: (preState: Partial<this['state']>) => Partial<this['state']>) => void);
    // setState!: Partial<this['state']>;
}

export function createServiceCtx<S extends ServiceBase>(Service: new () => S, Context = createContext<S>(null as any)) {
    function withContext<T>(Child: React.ComponentType<T>) {
        return (props: T) => {
            const sr = useRef<S>(null as any);
            if (!sr.current) {
                sr.current = new Service();
            }

            const [state, setState] = useState(sr.current.state);
            sr.current.state = state;
            sr.current.setState = (payload: Function | Object) => {
                if (typeof payload === 'function') {
                    const result = payload(state);
                    setState({
                        ...state,
                        ...result
                    });
                    return;
                }

                setState({
                    ...state,
                    ...payload
                });
            };

            return (
                <Context.Provider value={sr.current}>
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
