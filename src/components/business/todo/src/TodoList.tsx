import {useMemo} from 'react';
import {ETodoType} from '~/common/enums';
import {useTodoService} from '../service';
import {List, Typography} from 'antd';
import {DeleteOutlined} from '@ant-design/icons';

export function TodoList(props: {type: typeof ETodoType.idsEnum}) {
    const todo = useTodoService();

    const list = useMemo(() => {
        return todo.state.list.filter(item => props.type === ETodoType.ALL || item.type === props.type);
    }, [todo.state.list, props.type]);

    return (
        <div className="todo-list">
            <List
                size="large"
                bordered
                dataSource={list}
                renderItem={item => (
                    <List.Item>
                        <Typography.Text
                            className="todo-item-txt"
                            onClick={() => todo.toggleItem(item)}
                            {...(item.type === ETodoType.DONE ? {delete: true, type: 'danger'} : {})}
                        >
                            {item.name}
                        </Typography.Text>
                        <DeleteOutlined onClick={() => todo.delItem(item)} />
                    </List.Item>
                )}
            />
        </div>
    );
}
