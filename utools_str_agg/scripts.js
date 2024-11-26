function sortText() {
  try {
    // 获取输入框的内容
    const input = document.getElementById('inputText').value;
    // 将输入内容按行分割成数组
    const lines = input.split('\n');
    // 对数组进行排序
    lines.sort((a, b) => a.localeCompare(b));
    // 将排序后的数组重新组合成字符串
    const sortedText = lines.join('\n');
    // 将排序后的文本显示在输出框
    document.getElementById('outputText').value = sortedText;
  } catch (error) {
    console.error("排序过程中发生错误:", error);
    alert("排序过程中发生错误，请检查输入内容。");
  }
}

async function copyResult() {
  try {
    const outputText = document.getElementById('outputText').value;
    await navigator.clipboard.writeText(outputText);
    alert('结果已复制到剪贴板');
  } catch (error) {
    console.error("复制过程中发生错误:", error);
    alert("复制过程中发生错误，请检查浏览器权限设置。");
  }
}

function distinctText() {
  try {
    // 获取输入框的内容
    const input = document.getElementById('inputText').value;
    // 将输入内容按行分割成数组
    const lines = input.split('\n');
    // 去重并保持原始顺序
    const seen = new Set();
    const uniqueLines = lines.filter(line => !seen.has(line) && seen.add(line));
    // 将去重后的数组重新组合成字符串
    const distinctText = uniqueLines.join('\n');
    // 将去重后的文本显示在输出框
    document.getElementById('outputText').value = distinctText;
  } catch (error) {
    console.error("处理过程中发生错误:", error);
    alert("处理过程中发生错误，请检查输入内容。");
  }
}

function sortTextByComma() {
  try {
    // 获取输入框的内容
    const input = document.getElementById('inputText').value;
    // 将输入内容按逗号分割成数组
    const items = input.split(',').map(item => item.trim());
    // 排序
    const sortedItems = items.sort((a, b) => a.localeCompare(b));
    // 将排序后的数组重新组合成字符串
    const sortedText = sortedItems.join(',');
    // 将排序后的文本显示在输出框
    document.getElementById('outputText').value = sortedText;
  } catch (error) {
    console.error("处理过程中发生错误:", error);
    alert("处理过程中发生错误，请检查输入内容。");
  }
}
function distinctTextByComma() {
  try {
    // 获取输入框的内容
    const input = document.getElementById('inputText').value;
    // 将输入内容按行分割成数组
    const lines = input.split(',');
    // 去重并保持原始顺序
    const seen = new Set();
    const uniqueLines = lines.filter(line => !seen.has(line) && seen.add(line));
    // 将去重后的数组重新组合成字符串
    const distinctText = uniqueLines.join(',');
    // 将去重后的文本显示在输出框
    document.getElementById('outputText').value = distinctText;
  } catch (error) {
    console.error("处理过程中发生错误:", error);
    alert("处理过程中发生错误，请检查输入内容。");
  }
}

async function copyResult() {
  try {
    const outputText = document.getElementById('outputText').value;
    await navigator.clipboard.writeText(outputText);
    alert('结果已复制到剪贴板');
  } catch (error) {
    console.error("复制过程中发生错误:", error);
    alert("复制过程中发生错误，请检查浏览器权限设置。");
  }
}