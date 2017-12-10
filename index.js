function getFirstSelector(selector) {
  var result = document.querySelector(selector);
  return result;
}

function nestedTarget() {
  var result = document.getElementById('nested').querySelector('div.target');
  return result;
}

function increaseRankBy(n) {
  var list = document.getElementById('app').querySelectorAll('ul.ranked-list li');
  for (var i = 0; i < list.length; i++) {
    var newNum = parseInt(list[i].innerHTML) + n;
    list[i].innerHTML = newNum;
  }
}

function deepestChild() {
  var list = document.getElementById('grand-node').querySelectorAll('div');
  var result;
  for (var i = 0; i < list.length; i++) {
    result = list[i];
  }
  return result;
}