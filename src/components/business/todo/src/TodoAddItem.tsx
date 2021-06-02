import {Button, Modal, Form, Input} from 'antd';
import {useState} from 'react';
import {useTodoService} from '../service';

class TodoItemForm {
    todoName = '';
}

export function TodoAddItem() {
    const todo = useTodoService();
    const [form] = Form.useForm<TodoItemForm>();
    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = async () => {
        await form.validateFields();
        todo.addItem(form.getFieldsValue().todoName);
        closeModal();
    };

    const closeModal = () => {
        setIsModalVisible(false);
    };

    return (
        <>
            <Button className="btn-add" onClick={showModal}>
                添加
            </Button>
            <Modal
                title="Basic Modal"
                visible={isModalVisible}
                onOk={handleOk}
                onCancel={closeModal}
                destroyOnClose={true}
            >
                <Form form={form} initialValues={new TodoItemForm()} preserve={false}>
                    <Form.Item name="todoName" rules={[{required: true}]}>
                        <Input placeholder="Enter new todo." />
                    </Form.Item>
                </Form>
            </Modal>
        </>
    );
}
