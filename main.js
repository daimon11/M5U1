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
listTwo[0].append(itemSix[8], itemSix[9]);
listThree[0].after(listFive[0]);
console.log(listThree);
elFive.append(listThree[0]);


itemFour[2].after(itemTwo[3]);
