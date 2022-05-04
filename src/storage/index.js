/**
 * Storage封装
 */
const STORAGE_KEY = 'mall';

export default {
    // 存储值
    // {user:{userName:'jack',age:30,sex:1}
    // key: userName value:jack  module_name:user
    setItem(key, value, module_name) {
        if (module_name) {
            let val = this.getItem(module_name);
            val[key] = value;
            this.setItem(module_name, val);
        } else {
            let val = this.getStorage();
            val[key] = value;
            window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(val));
        }
    },

    // 获取某一个模块下面的属性user下面的userName
    // {user:{userName:'jack',age:30,sex:1}} 以这个数据为例
    // getItem(userName,user) 表示获取user模块下的userName属性，也就是jack
    getItem(key, module_name) {
        if (module_name) {
            // 由于存在模块名user，进行递归，递归时key为user，因此由于return this.getStorage()[key];
            // 可以得到val = {userName:'jack',age:30,sex:1}
            let val = this.getItem(module_name);
            if (val) {
                // 返回val[userName] = jack
                return val[key];
            }
        }
        return this.getStorage()[key];
    },

    // 获取整个数据
    getStorage() {
        return JSON.parse(window.sessionStorage.getItem(STORAGE_KEY) || '{}');
    },

    // clear，清空某一个值
    clear(key, module_name) {
        let val = this.getStorage();
        if (module_name) {
            if (!val[module_name]) return;
            delete val[module_name][key];
        } else {
            delete val[key];
        }
        window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(val));
    },
};
