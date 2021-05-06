import {useEffect, useState} from 'react';

const target = new EventTarget();
const STORAGE_INVOKE_EVENT = 'STORAGE_INVOKE_EVENT';

export function useStorage<T extends string | null>(key: string, defaultValue: string) {
    const [value, setValue] = useState<T>((localStorage.getItem(key) || defaultValue) as T);

    function updateStorage(newValue: T) {
        const curStorageValue = localStorage.getItem(key);
        if (curStorageValue !== newValue) {
            localStorage.setItem(key, newValue as string);
            target.dispatchEvent(
                new CustomEvent(STORAGE_INVOKE_EVENT, {
                    detail: {
                        key
                    }
                })
            );
        }

        setValue(newValue);
    }

    useEffect(() => {
        function listener(detail: any) {
            if (detail.key !== key) {
                return;
            }
            const newValue = localStorage.getItem(key);
            updateStorage(newValue as T);
        }

        target.addEventListener(STORAGE_INVOKE_EVENT, listener);
        return () => target.removeEventListener(STORAGE_INVOKE_EVENT, listener);
    });

    return [value, updateStorage] as [T, (newValue: T) => void];
}
