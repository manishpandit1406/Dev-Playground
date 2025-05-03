const levels = {
  html: [
    {
      question: "Complete this HTML tag:\n<h1>____</h1>",
      answer: "<h1>Hello World</h1>"
    },
    {
      question: "Create a paragraph with 'Welcome':",
      answer: "<p>Welcome</p>"
    },
    {
      question: "Make a link to Google with text 'Visit':",
      answer: "<a href='https://google.com'>Visit</a>"
    },
    {
      question: "Complete this HTML tag: <img src='____' alt='My Image'>",
      answer: "<img src='image.jpg' alt='My Image'>"
    },
    {
      question: "Complete this HTML tag: <ul><li>____</li></ul>",
      answer: "<ul><li>First item</li></ul>"
    },
     {
      question: "Complete this HTML tag for a <____>Text in bold</____>",
      answer: "<b>Text in bold</b>"
    },
    {
      question: "Complete this HTML tag: <p>This is a <strong>____</strong> text.</p>",
      answer: "<p>This is a <strong>strong</strong> text.</p>"
    },
    {
      question: "Complete this HTML tag:\n<h2>____</h2>",
      answer: "<h2>Subheading</h2>"
    },
    {
      question: "Complete this HTML tag for an unordered list:\n<____>\n  <li>Item</li>\n</ul>",
      answer: "<ul>\n  <li>Item</li>\n</ul>"
    },
     {
      question: "Complete this HTML tag for a line break:\n<____>",
      answer: "<br>"
    },
    {
    question: "Complete this HTML tag for a horizontal rule:\n<____>",
    answer: "<hr>"
    },
     {
    question: "Complete this HTML tag for embedding a video:\n<video src=\"____\" controls></video>",
    answer: "<video src=\"video.mp4\" controls></video>"
  },
  {
    question: "Complete this HTML tag for embedding audio:\n<audio src=\"____\" controls></audio>",
    answer: "<audio src=\"audio.mp3\" controls></audio>"
  },
  {
    question: "Complete this HTML tag to link an external CSS file:\n<link rel=\"stylesheet\" href=\"____\">",
    answer: "<link rel=\"stylesheet\" href=\"style.css\">"
  },
  {
    question: "Complete this HTML tag for a checkbox input:\n<input type=\"____\" id=\"myCheckbox\">",
    answer: "<input type=\"checkbox\" id=\"myCheckbox\">"
  },
  {
    question: "Complete this HTML tag for a radio button input:\n<input type=\"____\" id=\"myRadio\" name=\"myGroup\">",
    answer: "<input type=\"radio\" id=\"myRadio\" name=\"myGroup\">"
  },
  {
    question: "Complete this HTML tag for a submit button:\n<button type=\"____\">Submit</button>",
    answer: "<button type=\"submit\">Submit</button>"
  },
  {
    question: "Complete this HTML tag for a number input:\n<input type=\"____\">",
    answer: "<input type=\"number\">"
  },
   {
    question: "Complete this HTML tag for a date input:\n<input type=\"____\">",
    answer: "<input type=\"date\">"
  },
    {
    question: "Complete this HTML tag for the document type declaration:\n<!____ html>",
    answer: "<!DOCTYPE html>"
  },
  {
    question: "Complete this HTML tag for the root element:\n<____ lang=\"en\">",
    answer: "<html lang=\"en\">"
  },
  {
    question: "Complete this HTML tag for the document's head section:\n<____>\n  <title>My Document</title>\n</head>",
    answer: "<head>\n  <title>My Document</title>\n</head>"
  },
  {
    question: "Complete this HTML tag for the document's body section:\n<____>\n  <p>Content here.</p>\n</body",
    answer: "<body>\n  <p>Content here.</p>\n</body>"
  },
  {
     question: "Complete this HTML tag to group related form elements:\n<____>\n  <legend>Personal Info</legend>\n  \n</fieldset>",
    answer: "<fieldset>\n  <legend>Personal Info</legend>\n  \n</fieldset>"
  },
  {
    question: "Complete this HTML tag for a caption for a fieldset:\n<fieldset>\n  <____>Personal Info</legend>\n  \n</fieldset>",
    answer: "<fieldset>\n  <legend>Personal Info</legend>\n  \n</fieldset>"
  },
   {
    question: "Complete this HTML tag to define a data list for an input field:\n<input type=\"text\" list=\"myList\">\n<____ id=\"myList\">\n  <option value=\"Option A\">\n</datalist>",
    answer: "<datalist id=\"myList\">\n  <option value=\"Option A\">\n</datalist>"
  },
    {
    question: "Complete this HTML tag for the main content of a document:\n<____>\n  \n</main>",
    answer: "<main>\n  \n</main>"
  },
  {
    question: "Complete this HTML tag for a section of a document:\n<____>\n  <h2>Section Title</h2>\n  <p>Section content.</p>\n</section>",
    answer: "<section>\n  <h2>Section Title</h2>\n  <p>Section content.</p>\n</section>"
  },
  {
    question: "Complete this HTML tag for a self-contained composition in a document:\n<____>\n  <h2>Article Title</h2>\n  <p>Article content.</p>\n</article>",
    answer: "<article>\n  <h2>Article Title</h2>\n  <p>Article content.</p>\n</article>"
  },
  {
    question: "Complete this HTML tag for a sidebar or related content:\n<____>\n  <h3>Related Links</h3>\n  <ul>...</ul>\n</aside>",
    answer: "<aside>\n  <h3>Related Links</h3>\n  <ul>...</ul>\n</aside>"
  },
  {
    question: "Complete this HTML tag for the footer of a document or section:\n<____>\n  <p>&copy; 2023 My Website</p>\n</footer>",
    answer: "<footer>\n  <p>&copy; 2023 My Website</p>\n</footer>"
  },
  ],
  css: [
    {
      question: "Make text red:\nh1 { color: ____; }",
      answer: "h1 { color: red; }"
    },
    {
      question: "Set background to black:\nbody { background-color: ____; }",
      answer: "body { background-color: black; }"
    },
    {
      question: "Center text:\nh1 { text-align: ____; }",
      answer: "h1 { text-align: center; }"
    },
    {
      question: "Complete the CSS property for background color:\nbackground-____: blue;",
      answer: "background-color: blue;"
    },
    {
      question: "Complete the CSS property to set text color:\n____: red;",
      answer: "color: red;"
    },
    {
      question: "Complete the CSS property for font size:\nfont-____: 16px;",
      answer: "font-size: 16px;"
    },
    {
      question: "Complete the CSS property for margin:\nmargin-____: 10px;",
      answer: "margin-top: 10px;"
    },
    {
      question: "Complete the CSS property for padding:\npadding-____: 20px;",
      answer: "padding-left: 20px;"
    },
     {
      question: "Complete the CSS property for displaying an element as a block:\ndisplay: ____;",
      answer: "display: block;"
    },
    {
      question: "Complete the CSS property for setting the width:\n____: 100px;",
      answer: "width: 100px;"
    },
    {
      question: "Complete the CSS property for setting the height:\n____: 50px;",
      answer: "height: 50px;"
    },
    {
      question: "Complete the CSS property for adding a border:\nborder: 1px ____ black;",
      answer: "border: 1px solid black;"
    },
    {
     question: "Complete the CSS property for setting the font family:\nfont-family: \"____\", sans-serif;",
      answer: "font-family: \"Arial\", sans-serif;"
    },
    {
    question: "Complete the CSS property for setting the margin-top:\nmargin-____: 15px;",
    answer: "margin-top: 15px;"
    },
    {
      question: "Complete the CSS property for setting the padding-bottom:\npadding-____: 10px;",
      answer: "padding-bottom: 10px;"
    },
    {
      question: "Complete the CSS property to make text italic:\nfont-style: ____;",
      answer: "font-style: italic;"
    },
     {
    question: "Complete the CSS selector for a class named \"my-class\":\n.____ {  /* styles */ }",
    answer: ".my-class {  /* styles */ }"
    },
    {
    question: "Complete the CSS property for setting the background image:\nbackground-image: ____(image.jpg);",
    answer: "background-image: url(image.jpg);"
   },
   {
    question: "Complete the CSS property to make text bold:\nfont-weight: ____;",
    answer: "font-weight: bold;"
  },
  {
    question: "Complete the CSS property for setting the border-radius:\nborder-____: 5px;",
    answer: "border-radius: 5px;"
  },
  {
    question: "Complete the CSS property for float:\nfloat: ____;",
    answer: "float: left;"
  },
    {
    question: "Complete the CSS selector for an element with the id \"myId\":\n____myId {  /* styles */ }",
    answer: "#myId {  /* styles */ }"
  },
   {
    question: "Complete the CSS property for setting the `z-index`:\nz-____: 1;",
    answer: "z-index: 1;"
  },
  {
    question: "Complete the CSS property for `position`:\nposition: ____;",
    answer: "position: relative;"
  },
  {
    question: "Complete the CSS property for `top` position:\ntop: ____px;",
    answer: "top: 10px;"
  },
  {
    question: "Complete the CSS property to hide an element:\ndisplay: ____;",
    answer: "display: none;"
  },
  {
    question: "Complete the CSS property for `opacity`:\nopacity: ____;",
    answer: "opacity: 0.5;"
  },
    {
    question: "Complete the CSS property for `flex-direction`:\nflex-____: row;",
    answer: "flex-direction: row;"
  },
  {
    question: "Complete the CSS property for `justify-content`:\njustify-____: center;",
    answer: "justify-content: center;"
  },
  {
    question: "Complete the CSS property for `align-items`:\nalign-____: center;",
    answer: "align-items: center;"
  },
  {
    question: "Complete the CSS property for `gap` in flexbox/grid:\n____: 10px;",
    answer: "gap: 10px;"
  },
   {
    question: "Complete the CSS property for `grid-template-columns`:\ngrid-____-columns: 1fr 1fr;",
    answer: "grid-template-columns: 1fr 1fr;"
  },
    {
    question: "Complete the CSS property for `flex-wrap` to wrap flex items:\nflex-____: wrap;",
    answer: "flex-wrap: wrap;"
  },
  {
    question: "Complete the CSS property for `align-content` in flexbox (for multiple lines):\nalign-____: space-around;",
    answer: "align-content: space-around;"
  },
   {
    question: "Complete the CSS property for `grid-template-rows`:\ngrid-____-rows: auto auto;",
    answer: "grid-template-rows: auto auto;"
  },
    {
    question: "Complete the CSS selector for the last child of a `ul` element:\nul > li:____-child {  /* styles */ }",
    answer: "ul > li:last-child {  /* styles */ }"
  },
    {
    question: "Complete the CSS property for `text-decoration` to remove underlines from links:\ntext-decoration: ____;",
    answer: "text-decoration: none;"
  },
  {
    question: "Complete the CSS property for `list-style-type` for an unordered list:\nlist-style-____: none;",
    answer: "list-style-type: none;"
  },
  {
    question: "Complete the CSS property for `float` to make an element float to the right:\nfloat: ____;",
    answer: "float: right;"
  },
  {
    question: "Complete the CSS property for `clear` to clear floats:\nclear: ____;",
    answer: "clear: both;"
  },
    {
    question: "Complete the CSS selector for the first child of a `ul` element:\nul > li:____-child {  /* styles */ }",
    answer: "ul > li:first-child {  /* styles */ }"
  },
  ],
  js: [
    {
      question: "Write an alert with 'Hi':",
      answer: "alert('Hi');"
    },
    {
      question: "Declare a variable x = 10:",
      answer: "let x = 10;"
    },
    {
      question: "Write a console log 'Done':",
      answer: "console.log('Done');"
    },
    {
      question: "Complete the JavaScript keyword to declare a variable:\n____ x = 10;",
      answer: "var x = 10;"
    },
    {
      question: "Complete the JavaScript keyword to declare a constant:\n____ PI = 3.14;",
      answer: "const PI = 3.14;"
    },
    {
      question: "Complete the JavaScript operator for addition:\nlet sum = a ____ b;",
      answer: "let sum = a + b;"
    },
    {
      question: "Complete the JavaScript for loop syntax:\nfor (let i = 0; i < 5; ____) {\n  // code\n }",
      answer: "for (let i = 0; i < 5; i++) {\n  // code\n }"
    },
    {
      question: "Complete the JavaScript conditional statement:\nif (____) {\n  // code\n }",
      answer: "if (condition) {\n  // code\n }"
    },
     {
      question: "Complete the JavaScript method to print to the console:\nconsole.____(\"Hello\");",
      answer: "console.log(\"Hello\");"
    },
    {
      question: "Complete the JavaScript method to get an element by its ID:\ndocument.____(\"myElement\");",
      answer: "document.getElementById(\"myElement\");"
    },
    {
      question: "Complete the JavaScript event listener for a button click:\nbutton.____(\"click\", myFunction);",
      answer: "button.addEventListener(\"click\", myFunction);"
    },
    {
      question: "Complete the JavaScript operator for strict equality:\nif (a ____ b)",
      answer: "if (a === b)"
    },
    {
      question: "Complete the JavaScript keyword to define a function:\n____ myFunction() {  // code }",
      answer: "function myFunction() {  // code }"
    },
     {
    question: "Complete the JavaScript operator for inequality:\nif (a ____ b)",
    answer: "if (a != b)"
  },
  {
    question: "Complete the JavaScript method to add an element to the end of an array:\narray.____(newItem);",
    answer: "array.push(newItem);"
  },
  {
    question: "Complete the JavaScript to get the value of an input field:\nlet value = document.getElementById(\"myInput\").____;",
    answer: "let value = document.getElementById(\"myInput\").value;"
  },
  {
    question: "Complete the JavaScript keyword for a loop that iterates over an array:\nfor (let item of ____) { // code }",
    answer: "for (let item of array) { // code }"
  },
  {
    question: "Complete the JavaScript to change the text content of an element:\nelement.____ = \"New Text\";",
    answer: "element.textContent = \"New Text\";"
  },
   {
    question: "Complete the JavaScript operator for logical AND:\nif (condition1 ____ condition2)",
    answer: "if (condition1 && condition2)"
  },
  {
    question: "Complete the JavaScript method to remove the last element from an array:\narray.____();",
    answer: "array.pop();"
  },
  {
    question: "Complete the JavaScript to set the `src` attribute of an image:\nimageElement.____ = \"new-image.jpg\";",
    answer: "imageElement.src = \"new-image.jpg\";"
  },
  {
    question: "Complete the JavaScript keyword for a function with no name:\nlet myFunction = ____ () {  // code };",
    answer: "let myFunction = function () {  // code };"
  },
  {
    question: "Complete the JavaScript to add a class to an element:\nelement.classList.____(\"new-class\");",
    answer: "element.classList.add(\"new-class\");"
  },
   {
    question: "Complete the JavaScript operator for logical OR:\nif (condition1 ____ condition2)",
    answer: "if (condition1 || condition2)"
  },
  {
    question: "Complete the JavaScript method to remove the first element from an array:\narray.____();",
    answer: "array.shift();"
  },
  {
    question: "Complete the JavaScript to get the `href` attribute of an anchor tag:\nlet link = anchorElement.____;",
    answer: "let link = anchorElement.href;"
  },
  {
    question: "Complete the JavaScript for an `else if` condition:\nif (condition1) {  // code\n } ____ if (condition2) {  // code }",
    answer: "if (condition1) {  // code\n } else if (condition2) {  // code }"
  },
  {
    question: "Complete the JavaScript to remove a class from an element:\nelement.classList.____(\"old-class\");",
    answer: "element.classList.remove(\"old-class\");"
  },
   {
    question: "Complete the JavaScript operator for greater than:\nif (a ____ b)",
    answer: "if (a > b)"
  },
  {
    question: "Complete the JavaScript method to add an element to the beginning of an array:\narray.____(newItem);",
    answer: "array.unshift(newItem);"
  },
  {
    question: "Complete the JavaScript to get the `alt` attribute of an image:\nlet altText = imageElement.____;",
    answer: "let altText = imageElement.alt;"
  },
  {
    question: "Complete the JavaScript for a `while` loop:\n____ (condition) {  // code }",
    answer: "while (condition) {  // code }"
  },
  {
    question: "Complete the JavaScript to toggle a class on an element:\nelement.classList.____(\"active\");",
    answer: "element.classList.toggle(\"active\");"
  },
    {
    question: "Complete the JavaScript operator for less than:\nif (a ____ b)",
    answer: "if (a < b)"
  },
  {
    question: "Complete the JavaScript method to find the index of an element in an array:\nlet index = array.____(\"item\");",
    answer: "let index = array.indexOf(\"item\");"
  },
  {
    question: "Complete the JavaScript to set the `id` attribute of an element:\nelement.____ = \"newId\";",
    answer: "element.id = \"newId\";"
  },
  {
    question: "Complete the JavaScript for a `do...while` loop:\ndo {  // code\n } ____ (condition);",
    answer: "do {  // code\n } while (condition);"
  },
  {
    question: "Complete the JavaScript to get the number of elements in an array:\nlet length = array.____;",
    answer: "let length = array.length;"
  },
   {
    question: "Complete the JavaScript operator for greater than or equal to:\nif (a ____ b)",
    answer: "if (a >= b)"
  },
  {
    question: "Complete the JavaScript method to join elements of an array into a string:\nlet str = array.____(\",\");",
    answer: "let str = array.join(\",\");"
  },
  {
    question: "Complete the JavaScript to get the inner HTML of an element:\nlet content = element.____;",
    answer: "let content = element.innerHTML;"
  },
  {
    question: "Complete the JavaScript for a `switch` statement:\nswitch (____) {\n  case 1:\n    // code\n    break;\n }",
    answer: "switch (expression) {\n  case 1:\n    // code\n    break;\n }"
  },
  {
    question: "Complete the JavaScript to prevent the default action of an event:\nevent.____();",
    answer: "event.preventDefault();"
  },
   {
    question: "Complete the JavaScript operator for less than or equal to:\nif (a ____ b)",
    answer: "if (a <= b)"
  },
  {
    question: "Complete the JavaScript method to extract a section of an array:\nlet newArray = array.____(1, 3);",
    answer: "let newArray = array.slice(1, 3);"
  },
  {
    question: "Complete the JavaScript to set the `style` attribute of an element:\nelement.style.____ = \"blue\";",
    answer: "element.style.color = \"blue\";"
  },
  {
    question: "Complete the JavaScript for a `for...in` loop (iterates over object properties):\nfor (let key in ____) {  // code }",
    answer: "for (let key in object) {  // code }"
  },
  {
    question: "Complete the JavaScript to stop the propagation of an event:\nevent.____Propagation();",
    answer: "event.stopPropagation();"
  }
  ]
};

let currentMode = '';
let currentLevel = 0;
let score = 0;

// Load saved progress from localStorage if available
function loadSavedProgress() {
  const savedMode = localStorage.getItem('currentMode');
  const savedLevel = parseInt(localStorage.getItem('currentLevel'), 10);
  const savedScore = parseInt(localStorage.getItem('score'), 10);

  if (savedMode && savedLevel >= 0 && savedLevel < levels[savedMode].length) {
    currentMode = savedMode;
    currentLevel = savedLevel;
    score = savedScore || 0;
  }
}

// Save progress to localStorage
function saveProgress() {
  localStorage.setItem('currentMode', currentMode);
  localStorage.setItem('currentLevel', currentLevel);
  localStorage.setItem('score', score);
}

function startGame(mode) {
  currentMode = mode;
  currentLevel = 0;
  score = 0;
  localStorage.removeItem('currentMode');  // Reset saved progress when starting a new mode
  document.getElementById('game-area').classList.remove('hidden');
  document.getElementById('total-levels').textContent = levels[mode].length;
  loadLevel();
}

function loadLevel() {
  const level = levels[currentMode][currentLevel];
  document.getElementById('question').textContent = level.question;
  document.getElementById('answer').value = '';
  document.getElementById('feedback').textContent = '';
  document.getElementById('level-title').textContent = `Level ${currentLevel + 1}`;
  document.getElementById('current-level').textContent = currentLevel + 1;
  document.getElementById('score').textContent = `Score: ${score}`;

  if (currentMode === 'html') {
    document.getElementById('live-preview').style.display = 'block';
  } else {
    document.getElementById('live-preview').style.display = 'none';
  }
}

function checkAnswer() {
  const userCode = document.getElementById('answer').value.trim();
  const correct = levels[currentMode][currentLevel].answer.trim();

  if (userCode === correct) {
    document.getElementById('feedback').textContent = '✅ Correct!';
    if (currentMode === 'html') {
      document.getElementById('live-preview').innerHTML = userCode;
    }
    score += 2;  // Add 2 points for completing a level
    saveProgress();  // Save progress after every correct answer

    currentLevel++;
    if (currentLevel < levels[currentMode].length) {
      setTimeout(loadLevel, 1500);
    } else {
      document.getElementById('feedback').textContent = '🎉 Game completed!';
      document.getElementById('retry-button').classList.remove('hidden');
    }
  } else {
    document.getElementById('feedback').textContent = '❌ Try again!';
  }
}

function retryLevel() {
  // Reset the level and allow the user to retry
  document.getElementById('answer').value = '';
  document.getElementById('feedback').textContent = '';
  document.getElementById('retry-button').classList.add('hidden');
}

function resetGame() {
  // Clear localStorage and reset all variables
  localStorage.clear();
  score = 0;
  currentLevel = 0;
  document.getElementById('score').textContent = `Score: ${score}`;
  document.getElementById('game-area').classList.add('hidden');
  document.querySelector('.mode-selector').style.display = 'block';
}

// Check for saved progress when the page loads
window.onload = function() {
  loadSavedProgress();
  if (currentMode && currentLevel < levels[currentMode].length) {
    document.getElementById('game-area').classList.remove('hidden');
    loadLevel();
  }
}
