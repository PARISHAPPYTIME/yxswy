window.onerror = function(message, source, lineno, colno, error) {
  // 错误信息，源文件，行号
  console.log(message + '\n' + source + '\n' + lineno);
  // 禁止浏览器打印标准的错误信息
  return true;
}
