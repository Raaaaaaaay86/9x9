const grid = document.getElementById('grid');

for (let numberTitle = 2; numberTitle < 10; numberTitle++) {
  let template = `
  <div class="multiplication">
    <div>
      <div class="numberTitle">
        ${numberTitle}
      </div>
      #left
    </div>

    <div>
      #right
    </div>
  </div>`;

  const leftTemplate = [];
  for (let left = 1; left < 4; left++) {
    leftTemplate.push(`<p>${numberTitle}×${left}＝${numberTitle * left}</p>`)
  }
  const combinedLeftHtml = leftTemplate.join('');
  template = template.replace('#left', combinedLeftHtml);

  const rightTemplate = [];
  for (let right = 4; right < 10; right++) {
    rightTemplate.push(`<p>${numberTitle}×${right}＝${numberTitle * right}</p>`)
  }
  const combinedRightHtml = rightTemplate.join('');
  template = template.replace('#right', combinedRightHtml)

  grid.insertAdjacentHTML('beforeend', template);
}