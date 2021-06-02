import {useEffect, useRef} from 'react';
import {useTodoService} from '../service';

const TODOLIST_STORAGE_KEY = 'TODOLIST_STORAGE_KEY';

export function syncMemo2Storage() {
    const todo = useTodoService();
    const mounted = useRef(false);

    // 从 storage 更新到内存
    useEffect(() => {
        const listContent = localStorage.getItem(TODOLIST_STORAGE_KEY) || '[]';
        todo.setState({
            list: JSON.parse(listContent)
        });
    }, []);

    // 内存数据变动，更新到 storage
    useEffect(() => {
        if (!mounted.current) {
            mounted.current = true;
            return;
        }

        localStorage.setItem(TODOLIST_STORAGE_KEY, JSON.stringify(todo.state.list));
    }, [todo.state.list]);
}
