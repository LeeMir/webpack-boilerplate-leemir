import MainService from './mainService.js';
import Svg from './assets/images/test.svg';

window.addEventListener('DOMContentLoaded', ()=> {
  const targetEl = document.querySelector('#log');

  const service = new MainService({targetEl})
  const datalist = [1,2,3,4,[5,6,[7]]];
  const subHtml = service.init(datalist);


  targetEl.innerHTML += `
    <div class='sample-img'></div>
    <h1>hello world</h1>
    datalist is ${subHtml}
    <p style='font-weight: bold'>bold</p>
    <p style='font-weight: normal'>normal</p>
    <img class='sample-svg' src=${Svg} />
  `;
})