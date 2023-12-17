function getTextWidth(text, font, letterSpacing, wordSpacing) {
  // 创建一个隐藏的canvas元素
  var canvas = document.createElement('canvas');
  var context = canvas.getContext('2d');

  // 设置字体
  context.font = font;

  // 将文本分解为单词和空格
  var words = text.split(' ');
  var spaces = text.match(/\s/g);

  // 计算每个单词的实际宽度
  var wordWidths = words.map(function(word) {
    return context.measureText(word).width + letterSpacing * (word.length - 1);
  });

  // 计算所有单词和空格的总宽度
  var totalWidth = wordWidths.reduce(function(sum, width) {
    return sum + width;
  }, 0);

  if (spaces) {
    totalWidth += spaces.length * wordSpacing;
  }

  return totalWidth;
}


function getTextWidth(text, font, letterSpacing, wordSpacing) {
  // 创建一个隐藏的span元素
  var span = document.createElement('span');
  span.style.position = 'absolute';
  span.style.left = '-9999px';
  span.style.whiteSpace = 'nowrap'; // 防止换行

  // 设置字体和间距样式
  span.style.font = font;
  span.style.letterSpacing = letterSpacing + 'px';
  span.style.wordSpacing = wordSpacing + 'px';

  // 将文本添加到span元素中
  span.textContent = text;

  // 将span元素添加到文档中
  document.body.appendChild(span);

  // 计算并获取文本宽度
  var width = span.offsetWidth;

  // 从文档中移除span元素
  document.body.removeChild(span);

  return width;
}


function getTextWidth(text, font, letterSpacing, wordSpacing) {
  // 创建一个临时的span元素
  var span = document.createElement('span');
  span.style.position = 'absolute';
  span.style.left = '-9999px';
  span.style.whiteSpace = 'nowrap'; // 防止换行

  // 设置字体和间距样式
  span.style.font = font;
  span.style.letterSpacing = letterSpacing + 'px';
  span.style.wordSpacing = wordSpacing + 'px';

  // 创建一个范围和文档片段
  var range = document.createRange();
  var fragment = range.createContextualFragment(text);

  // 将文档片段添加到span元素中
  span.appendChild(fragment);

  // 计算并获取文本宽度
  var width = span.offsetWidth;

  // 清空span元素的内容
  span.textContent = '';

  return width;
}
