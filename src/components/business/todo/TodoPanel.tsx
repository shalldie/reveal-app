import {Tabs} from 'antd';
import {useHistory, useParams} from 'react-router';
import {ETodoType} from '~/common/enums';
import {Counter} from './Counter';

const TabPanel = Tabs.TabPane;

export function TodoPanel() {
    const {type} = useParams<{type: string}>();
    const history = useHistory();

    const toggleTab = (todoType: typeof ETodoType.idsEnum) => {
        if (type === todoType) {
            return;
        }
        history.replace(`/todo/${todoType}`);
    };

    return (
        <div className="todo-panel">
            <Counter />
            <Tabs activeKey={type} onChange={toggleTab}>
                {ETodoType.toArray().map(item => (
                    <TabPanel tab={item.label} key={item.id}>
                        this is {item.label}
                    </TabPanel>
                ))}
            </Tabs>
        </div>
    );
}
