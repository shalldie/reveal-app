const storageKey = 'todostorage';

/**
 * 获取列表信息
 * 
 * @export
 * @returns {Array<any>} 列表信息
 */
export function getTodos() {
    let content = localStorage[storageKey] || '[]';
    return JSON.parse(content);
}

/**
 * 保存列表信息到 localStorage
 * 
 * @export
 * @param {Array<any>} list 
 */
export function saveTodos(list) {
    list = list || [];
    let content = JSON.stringify(list);
    localStorage[storageKey] = content;
}