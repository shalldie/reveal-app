import React, { Component } from 'react';
import './TodoList.css';
// eslint-disable-next-line
import { getTodos, saveTodos } from './storage';

import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

// 组件
import { Col, Row, Input, Icon, Tabs, Alert } from 'antd';

const TabPane = Tabs.TabPane;
window.NProgress = NProgress;

class TodoList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            list: getTodos()
        };

        this.renderList = this.renderList.bind(this);
        this.handleAddTodo = this.handleAddTodo.bind(this);
    }

    componentDidMount() {
        console.log(1)
        NProgress.start();
        setTimeout(function () {
            NProgress.done();
        }, 2000);
    }

    renderList(list) {
        return list.map((item, key) => (
            <div className="alert-row" key={key}>
                <Alert message={item.txt} type={item.done ? 'success' : 'info'} showIcon />
            </div>)
        );
    }

    handleAddTodo() {
        let ele = this.refs.addBox.refs.input;
        window.ele = ele;
        let txt = ele.value;
        let list = this.state.list;
        list.push({
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
                            <TabPane tab={<span><Icon type="solution" />All</span>} key={0}>
                                {this.renderList(list)}
                            </TabPane>
                            <TabPane tab={<span><Icon type="exclamation-circle-o" />Todo</span>} key={1}>
                                {this.renderList(todoList)}
                            </TabPane>
                            <TabPane tab={<span><Icon type="check" />Done</span>} key={2}>
                                {this.renderList(doneList)}
                            </TabPane>
                        </Tabs>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default TodoList;