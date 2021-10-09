import './main.css'
import './pexels-photo-4783902.jpeg'
import pintMe from './point'

export function hellowebpack() {
    // 将图像添加到我们现有的div中

    var element = document.createElement('div');

    element.innerHTML = 'Hello World'
    // element.classList.add('hello');

    // var myIcon = new Image();
    // myIcon.src = Icon;
    // element.appendChild(myIcon);

    var btn = document.createElement('button');
    btn.innerHTML = 'Click me and check the console!';
    btn.onclick = pintMe;
    element.appendChild(btn);

    return element
}
