//item 01
mainH1.className = 'title';

//item 02
let allH3 = document.getElementsByTagName('h3');
for (let h3 of allH3) h3.className = 'description';

//item 03
divMainContent.removeChild(divLeftContent);

//item 04
divRightContent.style.margin = '0 auto';

// item 05
divChildMainContent.style['backgroundColor'] = 'green';

// item 06
for (let i = 0; i < 2; i += 1) olElement1.removeChild(olElement1.lastChild);
