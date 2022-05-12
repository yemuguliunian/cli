/*
 * @Author: yemu
 * @Date: 2021-06-25 21:56:46
 * @LastEditTime: 2021-06-26 14:57:13
 * @LastEditors: yemu
 * @Description: react 组件库
 */
const BasicGenerator = require('../../BasicGenerator.js');

class Generator extends BasicGenerator {
    writing() {
        this.writeFiles({
            filterFiles: f => {
                return true;
            },
        });
    }
}

module.exports = Generator;