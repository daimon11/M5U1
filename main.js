'use strict';

const ads = document.getElementsByClassName('ads');
ads[0].remove();

const item = document.querySelectorAll('.container .item');
console.log(item);

item[3].after(item[0]);

const itemTwo =
document.querySelectorAll('.container .item_two .props__list .props__item');

const listTwo =
document.querySelectorAll('.container .item_two .props__list');

const listThree =
document.querySelectorAll('.container .item_three .props__list');

const itemFour =
document.querySelectorAll('.container .item_four .props__list .props__item');

const listFive =
document.querySelectorAll('.container .item_five .props__list');

const elFive =
document.querySelector('.container .item_five .content');

const itemSix =
document.querySelectorAll('.container .item_six .props__list .props__item');

const itemTitle =
document.querySelectorAll('.container .content .item__title');

const es6Title = itemTitle[0].innerHTML;

const asynchronousProcessingTitle = itemTitle[4].innerHTML;

listTwo[0].append(itemSix[8], itemSix[9]);
listThree[0].after(listFive[0]);
elFive.append(listThree[0]);
itemFour[2].after(itemTwo[3]);
itemTitle[0].innerHTML = itemTitle[3].innerHTML;
itemTitle[4].innerHTML = es6Title;
itemTitle[3].innerHTML = asynchronousProcessingTitle;
itemTitle[1].innerHTML = 'This и прототипы объектов';
