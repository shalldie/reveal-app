import enumxFactory from './enumFactory';

export const ETodoType = enumxFactory({
    ALL: {id: 'all', label: '全部'},
    DONE: {id: 'done', label: '已完成'},
    UNDONE: {id: 'undone', label: '未完成'}
});
