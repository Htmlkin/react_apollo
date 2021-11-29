import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { Store } from './stotre/index';
import App from '../src/components/app';
import './firebase';

const animItems = document.getElementsByClassName('anim_p');

console.log(animItems);

// const timeout = 3000;

// if (animItems.length > 0) {
//     window.addEventListener('scroll', animOnScroll);
//     function animOnScroll() {
//         for (let i = 0; i < animItems.length; i++) {
//             const animItem = animItems[i];
//             const animItemHeight = animItem.offsetHeight;
//             const animItemOffset = offset(animItem).top;
//             const animStart = 4;

//             let animItemPoint = window.innerHeight - animItemHeight / animStart;
//             if (animItemHeight > window.innerHeight) {
//                 animItemPoint =
//                     window.innerHeight - window.innerHeight / animStart;
//             }

//             if (
//                 document.pageYOffset > animItemOffset - animItemPoint &&
//                 document.pageYOffset < animItemOffset + animItemHeight
//             ) {
//                 animItem.classList.add('_active_p');
//             } else {
//                 animItem.classList.remove('_active_p');
//             }
//         }
//     }
//     function offset(el) {
//         const rect = el.getBoundingClientRect(),
//             scrollLeft =
//                 window.pageXOffset || document.documentElement.scrollLeft,
//             scrollTop =
//                 window.pageYOffset || document.documentElement.scrollTop;
//         return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
//     }

//     setTimeout(() => {
//         animOnScroll();
//     }, timeout);
// }

const app = (
    <>
        <BrowserRouter>
            <Provider store={store}>
                <App />
            </Provider>
        </BrowserRouter>
    </>
);
ReactDOM.render(app, document.getElementById('wrapper'));
