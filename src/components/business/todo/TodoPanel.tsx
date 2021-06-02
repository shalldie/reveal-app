import {Tabs} from 'antd';
import {useHistory, useParams} from 'react-router';
import {ETodoType} from '~/common/enums';
import {TodoAddItem} from './src/TodoAddItem';
import {useTodoService, withTodoContext} from './service';
import {TodoList} from './src/TodoList';

const TabPanel = Tabs.TabPane;

export const TodoPanel = withTodoContext(() => {
    const {type} = useParams<{type: string}>();
    const history = useHistory();
    const todo = useTodoService();
    todo.initialize();

    const toggleTab = (todoType: typeof ETodoType.idsEnum) => {
        if (type === todoType) {
            return;
        }
        history.replace(`/todo/${todoType}`);
    };

    return (
        <div className="todo-panel">
            <Tabs activeKey={type} onChange={toggleTab}>
                {ETodoType.toArray().map(item => (
                    <TabPanel tab={item.label} key={item.id}>
                        <TodoList type={type} />
                    </TabPanel>
                ))}
            </Tabs>
            <TodoAddItem />
        </div>
    );
});
