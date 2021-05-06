import {Breadcrumb} from 'antd';
import {useParams} from 'react-router';
import {Link} from 'react-router-dom';
import {ETodoType} from '~/common/enums';
import {TodoPanel} from '~/components/business/todo';
import '~business/todo/todo.scss';

export function Todo() {
    const {type} = useParams<{type: typeof ETodoType.idsEnum}>();

    return (
        <div className="page-todo">
            <Breadcrumb>
                <Breadcrumb.Item>
                    <Link to={`/todo/${ETodoType.ALL}`}>todo</Link>
                </Breadcrumb.Item>
                <Breadcrumb.Item>{ETodoType.getLabelById(type)}</Breadcrumb.Item>
            </Breadcrumb>
            <div className="page">
                <TodoPanel />
            </div>
        </div>
    );
}
