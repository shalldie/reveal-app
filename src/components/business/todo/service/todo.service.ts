import {ETodoType} from '~/common/enums';
import {ServiceBase, createServiceCtx} from '~/common/service';
import {syncMemo2Storage} from '../uses';

class TodoServiceState {
    name = 'tom';
    age = 12;
    list = [] as {name: string; type: typeof ETodoType.idsEnum}[];
}

class TodoService extends ServiceBase<TodoServiceState> {
    state = new TodoServiceState();

    initialize() {
        syncMemo2Storage();
    }

    addItem(name: string) {
        this.setState({
            list: [...this.state.list, {name, type: ETodoType.UNDONE}],
            name: '',
            age: 12
        });
    }

    delItem(item: {name: string; type: typeof ETodoType.idsEnum}) {
        const list = this.state.list.filter(n => n !== item);
        this.setState({list});
    }

    toggleItem(item: {name: string; type: typeof ETodoType.idsEnum}) {
        item.type = item.type === ETodoType.DONE ? ETodoType.UNDONE : ETodoType.DONE;
        this.setState({
            list: [...this.state.list]
        });
    }
}

export const {
    //
    withContext: withTodoContext,
    useService: useTodoService
} = createServiceCtx(TodoService);
