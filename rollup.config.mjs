import image from '@rollup/plugin-image';

import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';


export default {
    input: 'index.js',
    output: {
        file: 'bundle.js',
        format: 'iife', // или 'umd', в зависимости от ваших нужд
        name: 'MyBundle'
    },
    plugins: [
        resolve(), // Позволяет Rollup находить модули в node_modules
        commonjs(), // Конвертирует CommonJS в ES модули
        image() // Позволяет импортировать изображения
    ]
};
