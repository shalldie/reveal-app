import {ETodoType} from '~/common/enums';
import {ServiceBase, ServiceDecorator, createServiceCtx} from '~/common/service';
import {syncMemo2Storage} from './uses';

@ServiceDecorator
class TodoService extends ServiceBase {
    state = {
        name: 'tom',
        age: 12,
        list: [] as {name: string; type: typeof ETodoType.idsEnum}[]
    };

    initialize() {
        syncMemo2Storage();
    }

    addItem(name: string) {
        this.setState({
            list: [...this.state.list, {name, type: ETodoType.UNDONE}]
        });
    }

    delItem(item: TodoService['state']['list'][number]) {
        const list = this.state.list.filter(n => n !== item);
        this.setState({list});
    }

    toggleItem(item: TodoService['state']['list'][number]) {
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
