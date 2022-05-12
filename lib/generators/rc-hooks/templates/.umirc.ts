import { defineConfig } from 'dumi';

export default defineConfig({
    title: '@babe0806/hooks',
    favicon: './favicon.ico',
    logo: './favicon.ico',
    outputPath: 'docs-dist',
    base: '/vhooks',
    publicPath: '/vhooks/',
    exportStatic: {},
    extraBabelPlugins: [['import', { libraryName: 'antd', style: 'css' }, 'antd']],
});
