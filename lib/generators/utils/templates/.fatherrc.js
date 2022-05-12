export default {
    entry: 'src/index.ts',
    file: 'index.js',
    cjs: { type: 'babel', lazy: true },
    esm: { type: 'babel' },
    umd: {},
};
