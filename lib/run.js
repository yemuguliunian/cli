const fs = require('fs');
const path = require('path');
const chalk = require('chalk');
const mkdirp = require('mkdirp');
const inquirer = require('inquirer');
const clipboardy = require('clipboardy');

const generators = fs
    .readdirSync(`${__dirname}/generators`)
    .filter(f => !f.startsWith('.'))
    .map(f => {
        // 遍历generators下的文件夹名
        // @return 	inquirer choices 列表选项
        // @数据格式  [{value : 'apple', name : 'Apple'}]
        return {
            name: f,
            value: f,
            short: f,
        };
    });

// 复制到剪切板
const runGenerator = async (generatorPath, { name = '', cwd = process.cwd() }) => {
    return new Promise(resolve => {
        if (name) {
            mkdirp.sync(name);
            cwd = path.join(cwd, name);
        }

        const Generator = require(generatorPath);
        const generator = new Generator({
            name,
            env: {
                cwd,
            },
            resolved: require.resolve(generatorPath),
        });

        return generator.run(() => {
            if (name) {
                clipboardy.writeSync(`cd ${name}`);
                console.log('📋 Copied to clipboard, just use Ctrl+V');
            }
            console.log('✨ File Generate Done');
            resolve(true);
        });
    });
};

const run = async config => {
    if (generators.length == 1) {
        return runGenerator(`./generators/${generators[0].value}`, config);
    } else {
        return inquirer
            .prompt([
                {
                    name: 'type',
                    message: 'Select the boilerplate type',
                    type: 'list',
                    choices: generators,
                    default: 'umi'
                },
            ])
            .then(answers => {
                return runGenerator(`./generators/${answers.type}`, config);
            })
            .catch(e => {
                console.error(chalk.red(`> Generate failed`), e);
                process.exit(1);
            });
    }
};

module.exports = run;
