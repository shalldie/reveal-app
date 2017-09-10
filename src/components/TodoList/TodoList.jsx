import React, { Component } from 'react';
import './TodoList.css';
// eslint-disable-next-line
import { getTodos, saveTodos } from './storage';

import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

// 组件
import { Col, Row, Input, Icon, Tabs, Alert, Button, Tooltip } from 'antd';

window.NProgress = NProgress;

class TodoList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            list: getTodos()
        };

        this.handleToggleState = this.handleToggleState.bind(this);
        this.handleDelItem = this.handleDelItem.bind(this);
        this.renderList = this.renderList.bind(this);
        this.handleAddTodo = this.handleAddTodo.bind(this);
    }

    componentWillUpdate() {
        saveTodos(this.state.list);
        NProgress.start();
        NProgress.done();
    }

    handleToggleState(timeStamp) {
        let list = this.state.list;
        let item = list.filter(n => n.timeStamp === timeStamp)[0];
        item.done = !item.done;
        this.setState({
            list: list
        });
    }

    handleDelItem(timeStamp) {
        let list = this.state.list;
        list = list.filter(n => n.timeStamp !== timeStamp);
        this.setState({
            list: list
        });
    }

    renderList(list) {
        return list.map((item, key) => {
            let alertType = item.done ? 'success' : 'info';
            let tipMsg = item.done ? '标记为未完成' : '标记为已完成';
            let ctlIcon = item.done ? 'smile' : 'meh-o';

            return (
                <div className="alert-row" key={key}>
                    <Row>
                        <Col span={19}>
                            <Alert message={item.txt} type={alertType} showIcon />
                        </Col>
                        <Col span={4} offset={1}>
                            <Button.Group className="control-group">
                                <Tooltip title={tipMsg}>
                                    <Button onClick={() => this.handleToggleState(item.timeStamp)} type="primary" size="large" icon={ctlIcon} />
                                </Tooltip>
                                <Tooltip title="删除">
                                    <Button onClick={() => this.handleDelItem(item.timeStamp)} type="primary" size="large" icon="delete" />
                                </Tooltip>
                            </Button.Group>
                        </Col>
                    </Row>
                </div>);
        });
    }

    handleAddTodo() {
        let ele = this.refs.addBox.refs.input;
        let txt = ele.value;
        let list = this.state.list;
        list.push({
            timeStamp: new Date().getTime(),
            txt: txt,
            done: false
        });
        this.setState({
            list: list
        });
        ele.value = '';
    }

    render() {
        let list = this.state.list;
        let todoList = list.filter(n => !n.done);
        let doneList = list.filter(n => n.done);
        return (
            <div className="todo-list">
                <Row>
                    <Col span={20} offset={2}>
                        <Input ref="addBox" placeholder="添加要做的事情..." onPressEnter={this.handleAddTodo} />
                        <Icon className="icon-save" type="save" />
                    </Col>
                </Row>
                <Row>
                    <Col span={20} offset={2}>
                        <Tabs>
                            <Tabs.TabPane tab={<span><Icon type="solution" />所有</span>} key={0}>
                                {this.renderList(list)}
                            </Tabs.TabPane>
                            <Tabs.TabPane tab={<span><Icon type="exclamation-circle-o" />未完成</span>} key={1}>
                                {this.renderList(todoList)}
                            </Tabs.TabPane>
                            <Tabs.TabPane tab={<span><Icon type="check" />已完成</span>} key={2}>
                                {this.renderList(doneList)}
                            </Tabs.TabPane>
                        </Tabs>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default TodoList;