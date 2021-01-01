const chart = document.getElementById('chart');

for (let multiplicand = 2; multiplicand < 10; multiplicand++) {
  let template = `
  <div class="chartChild">
    <div>
      <div class="multiplicand">
        ${multiplicand}
      </div>
      #left
    </div>

    <div>
      #right
    </div>
  </div>`;

  let leftHTML = '';
  let rightHTML = '';

  for (let i = 1; i < 10; i += 1 ) {
    if (i < 4) {
      // 左半部: 乘數 1 ~ 3
      leftHTML += `<p>${multiplicand}×${i}＝${multiplicand * i}</p>`;
    } else {
      // 右半部: 乘數 4 ~ 9
      rightHTML += `<p>${multiplicand}×${i}＝${multiplicand * i}</p>`;
    }
  }

  // 將各半部的算式貼上錨點，完成一欄組件
  template = template.replace('#left', leftHTML);
  template = template.replace('#right', rightHTML);

  // append 到 chart 的最後一個 child 後
  chart.insertAdjacentHTML('beforeend', template);
}