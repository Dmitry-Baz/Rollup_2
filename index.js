import myImage from './images/modern.jpg';
import commonjs from '@rollup/plugin-commonjs';

const imgElement = document.createElement('img');
imgElement.src = myImage; // Используем импортированное изображение
imgElement.alt = 'Modern Image'; // Добавьте атрибут alt для лучшей доступности
document.body.appendChild(imgElement);

console.log(myImage);
console.log('Hello World!, Hello JavaScript!');

export default {
    plugins: [commonjs()]
};