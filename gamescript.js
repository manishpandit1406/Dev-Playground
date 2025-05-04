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
  {
    question: "Complete this HTML tag for embedding an external webpage:\n<iframe ____=\"https://www.example.com\"></iframe>",
    answer: "<iframe src=\"https://www.example.com\"></iframe>"
  },
  {
    question: "What is the purpose of the `<base>` tag in HTML, and where is it typically used?",
    answer: "Specifies a base URL for all relative URLs in a document.  It's used within the `<head>` element."
  },
  {
    question: "Complete this HTML tag for grouping options in a dropdown:\n<select>\n  <____ label=\"Group 1\">\n    <option>Option 1</option>\n    <option>Option 2</option>\n  </____>\n</select>",
    answer: "<select>\n  <optgroup label=\"Group 1\">\n    <option>Option 1</option>\n    <option>Option 2</option>\n  </optgroup>\n</select>"
  },
  {
    question: "What is the HTML tag used to define a hyperlink?",
    answer: "The `<a>` tag (anchor tag)."
  },
  {
    question: "Complete this HTML tag for indicating an abbreviation:\n<abbr ____=\"Hypertext Markup Language\">HTML</abbr>",
    answer: "<abbr title=\"Hypertext Markup Language\">HTML</abbr>"
  },
  {
    question: "Complete this HTML tag to embed a video:\n<video ____ controls></video>",
    answer: "<video src controls></video>"
  },
  {
    question: "What attribute is used to specify the character encoding of an HTML document?",
    answer: "charset"
  },
  {
    question: "Fill in the blank for an HTML element that represents a standalone piece of content:\n<____>\n  <p>This is an article.</p>\n</____>",
    answer: "<article>\n  <p>This is an article.</p>\n</article>"
  },
  {
    question: "What HTML tag is used to define a set of navigation links?",
    answer: "The `<nav>` tag."
  },
  {
    question: "Complete this HTML tag for a footer section:\n<____>\n  <p>Footer content</p>\n</____>",
    answer: "<footer>\n  <p>Footer content</p>\n</footer>"
  },
   {
    question: "Complete this HTML tag for embedding audio:\n<audio ____ controls></audio>",
    answer: "<audio src controls></audio>"
  },
  {
    question: "What attribute in the `form` tag specifies where to send the form data?",
    answer: "action"
  },
  {
    question: "Fill in the blank for an HTML element that represents a header for a section:\n<____>\n  <h1>Heading</h1>\n</____>",
    answer: "<header>\n  <h1>Heading</h1>\n</header>"
  },
  {
    question: "What HTML tag is used to define a sidebar?",
    answer: "The `<aside>` tag"
  },
  {
    question: "Complete this HTML tag for a figure with a caption:\n<figure>\n  <img>\n  <____>Caption</figcaption>\n</figure>",
    answer: "<figure>\n  <img>\n  <figcaption>Caption</figcaption>\n</figure>"
  },
  {
    question: "Complete this HTML tag for a data list:\n<label for=\"browser\">Choose a browser from this list:</label>\n<input list=\"browsers\" name=\"browser\" id=\"browser\">\n<____ id=\"browsers\">\n  <option value=\"Chrome\">\n  <option value=\"Firefox\">\n</datalist>",
    answer: "<label for=\"browser\">Choose a browser from this list:</label>\n<input list=\"browsers\" name=\"browser\" id=\"browser\">\n<datalist id=\"browsers\">\n  <option value=\"Chrome\">\n  <option value=\"Firefox\">\n</datalist>"
  },
  {
    question: "What attribute is used to specify that an input field must be filled out?",
    answer: "required"
  },
  {
    question: "Fill in the blank for an HTML element that represents the main content of a document:\n<____>\n  <p>Main content here</p>\n</____>",
    answer: "<main>\n  <p>Main content here</p>\n</main>"
  },
  {
    question: "What HTML tag is used to define a section of content that is related to the main content?",
    answer: "The `<aside>` tag."
  },
  {
    question: "Complete this HTML tag for marking up a quotation:\n<____ cite=\"https://www.example.com\">\n  <p>This is a quotation.</p>\n</____>",
    answer: "<blockquote cite=\"https://www.example.com\">\n  <p>This is a quotation.</p>\n</blockquote>"
  },
  {
    question: "Complete this HTML tag for defining a section in a form:\n<____>\n</____>",
    answer: "<section>\n</section>"
  },
  {
    question: "What attribute is used to specify the type of media resource linked by the <link> tag?",
    answer: "media"
  },
  {
    question: "Fill in the blank for an HTML element that represents a dialog box or window:\n<____>\n</____>",
    answer: "<dialog>\n</dialog>"
  },
  {
    question: "What HTML tag is used to define the result of a calculation?",
    answer: "The `<output>` tag"
  },
  {
    question: "Complete this HTML tag for specifying multiple possible resources for an image:\n<picture>\n  <source media=\"(min-width: 650px)\" srcset=\"large.jpg\">\n  <source media=\"(min-width: 465px)\" srcset=\"medium.jpg\">\n  <img src=\"small.jpg\">\n</picture>",
    answer: "<picture>\n  <source media=\"(min-width: 650px)\" srcset=\"large.jpg\">\n  <source media=\"(min-width: 465px)\" srcset=\"large.jpg\">\n  <img src=\"small.jpg\">\n</picture>"
  },
  {
    question: "Complete this HTML tag for interactive content:\n<____>\n</____>",
    answer: "<details>\n</details>"
  },
  {
    question: "What attribute on a script tag tells the browser to execute it as soon as it is downloaded?",
    answer: "async"
  },
  {
    question: "Fill in the blank for an HTML element that represents the result of a user action:\n<____>\n</____>",
    answer: "<output>\n</output>"
  },
  {
    question: "What HTML tag is used to define a mathematical formula?",
    answer: "The `<math>` tag"
  },
  {
    question: "Complete this HTML tag for embedded vector graphics:\n<____>\n</____>",
    answer: "<svg>\n</svg>"
  },
  {
        question: "Complete this HTML tag for document metadata:\n<____>\n</____>",
        answer: "<meta>\n</meta>"
    },
    {
        question: "What attribute is used to specify the relationship between the current document and the linked resource?",
        answer: "rel"
    },
    {
        question: "Fill in the blank for an HTML element that represents a generic container with no special meaning:\n<____>\n</____>",
        answer: "<div>\n</div>"
    },
    {
        question: "What HTML tag is used to define a caption for a table?",
        answer: "<caption>"
    },
    {
        question: "Complete this HTML tag for interactive content, that the user can open and close:\n<____>\n</____>",
        answer: "<details>\n</details>"
    },
    {
    question: "Complete this HTML tag for grouping form elements:\n<____>\n</____>",
    answer: "<fieldset>\n</fieldset>"
  },
  {
    question: "What attribute is used to specify a regular expression for validating an input field?",
    answer: "pattern"
  },
  {
    question: "Fill in the blank for an HTML element that represents a section of a page that links to other pages:\n<____>\n</____>",
    answer: "<nav>\n</nav>"
  },
  {
    question: "What HTML tag is used to define a description list?",
    answer: "The `<dl>` tag"
  },
  {
    question: "Complete this HTML tag for indicating program output:\n<____>\n</____>",
    answer: "<samp>\n</samp>"
  },
  {
    question: "Complete this HTML tag for defining a section in a form:\n<____>\n</____>",
    answer: "<section>\n</section>"
  }
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
      question: "Complete the CSS property for top margin:\nmargin-____: 10px;",
      answer: "margin-top: 10px;"
    },
    {
      question: "Complete the CSS property for left padding:\npadding-____: 20px;",
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
  {
    question: "Fill in the blank to select all even-numbered rows in a table:\ntr:____ { background-color: #f2f2f2; }",
    answer: "tr:nth-child(even) { background-color: #f2f2f2; }"
  },
  {
    question: "What CSS property is used to control the spacing between lines of text?",
    answer: "line-height"
  },
  {
    question: "Complete the CSS to make an element semi-transparent:\nopacity: ____;",
    answer: "opacity: 0.5;"
  },
  {
    question: "Which CSS property is used to add rounded corners to an element?",
    answer: "border-radius"
  },
  {
    question: "Fill in the blank to make the text bold:\nfont-____: bold;",
    answer: "font-weight: bold;"
  },
  {
    question: "What CSS property is used to make text italic?",
    answer: "font-style"
  },
  {
    question: "Fill in the blank to center an element horizontally using Flexbox:\ndisplay: flex;\njustify-content: ____;",
    answer: "display: flex;\njustify-content: center;"
  },
  {
    question: "What CSS property controls the order of flex items within a flex container?",
    answer: "order"
  },
  {
    question: "Complete the CSS to select the first child of an element:\n____:first-child { }",
    answer: "*:first-child { }"
  },
  {
    question: "What CSS property is used to create a multi-column layout?",
    answer: "column-count"
  },
  {
    question: "What CSS property is used to add a shadow to text?",
    answer: "text-shadow"
  },
  {
    question: "Fill in the blank to position an element relative to its normal position:\nposition: ____;",
    answer: "position: relative;"
  },
  {
    question: "What CSS property is used to control the spacing between characters?",
    answer: "letter-spacing"
  },
  {
    question: "Complete the CSS to select all paragraphs that are direct children of a div:\ndiv > ____ { }",
    answer: "div > p { }"
  },
  {
    question: "What CSS property is used to change the cursor style when hovering over an element?",
    answer: "cursor"
  },
  {
    question: "What CSS property is used to add a drop shadow to an element?",
    answer: "box-shadow"
  },
  {
    question: "Fill in the blank to position an element relative to its nearest positioned ancestor:\nposition: ____;",
    answer: "position: absolute;"
  },
  {
    question: "What CSS property is used to control the spacing between words?",
    answer: "word-spacing"
  },
  {
    question: "Complete the CSS to select the last child of an element:\n____:last-child { }",
    answer: "*:last-child { }"
  },
  {
    question: "What CSS property is used to make an element fixed relative to the viewport?",
    answer: "position: fixed;"
  },
  {
    question: "What CSS property is used to control the stacking order of positioned elements?",
    answer: "z-index"
  },
  {
    question: "Fill in the blank to position an element so it scrolls with its nearest scrolling ancestor:\nposition: ____;",
    answer: "position: sticky;"
  },
  {
    question: "What CSS property is used to define the size of the font in em units?",
    answer: "font-size"
  },
  {
    question: "Complete the CSS to select an element and all its following siblings:\n____ ~ * { }",
    answer: "h1 ~ * { }"
  },
  {
    question: "What CSS property is used to define flexible lengths relative to the viewport's width?",
    answer: "vw"
  },
  {
    question: "What CSS property is used to define the transition between two states of an element?",
    answer: "transition"
  },
  {
    question: "Fill in the blank to position an element using coordinates relative to its containing element:\nposition: ____;",
    answer: "position: absolute;"
  },
  {
    question: "What CSS property is used to control how an element is positioned within a grid layout?",
    answer: "grid-area"
  },
  {
    question: "Complete the CSS to select the checked state of a checkbox input:\ninput[type=\"checkbox\"]:____ { }",
    answer: "input[type=\"checkbox\"]:checked { }"
  },
  {
    question: "What CSS property is used to define the initial size of a grid column?",
    answer: "grid-template-columns"
  },
  {
    question: "What CSS property is used to define a grid layout?",
    answer: "display: grid"
  },
  {
    question: "Fill in the blank to make an element's content unselectable:\nuser-select: ____;",
    answer: "user-select: none;"
  },
  {
    question: "What CSS property is used to define the alignment of grid items within a grid container?",
    answer: "align-items"
  },
  {
    question: "Complete the CSS to select the root element of the document:\n____ { }",
    answer: ":root { }"
  },
  {
    question: "What CSS property is used to define a shape for clipping an element?",
    answer: "clip-path"
  },
    {
        question: "What CSS property is used to define the flow and alignment of content within a flexbox container?",
        answer: "flex-flow"
    },
    {
        question: "Fill in the blank to set the position of a background image within its element:\nbackground-position: ____;",
        answer: "background-position: center;"
    },
    {
        question: "What CSS property is used to define the distribution of space between and around content items along the cross-axis of a flexbox layout?",
        answer: "align-content"
    },
    {
        question: "Complete the CSS to select an element if it is the only child of its parent:\n____:only-child { }",
        answer: "*:only-child { }"
    },
    {
        question: "What CSS property is used to define the shape used to outline the element?",
        answer: "outline-shape"
    },
    {
        question: "Complete the CSS property for `display: flex;` to wrap flex items:",
        answer: "flex-wrap: wrap;"
    },
    {
        question: "Complete the CSS property for `align-content` in flexbox (for multiple lines):",
        answer: "align-content: space-around;"
    },
    {
        question: "Complete the CSS property for `grid-gap` (deprecated, replaced by `gap`):",
        answer: "grid-gap: 10px;"
    },
    {
        question: "Complete the CSS property for `grid-template-rows`:",
        answer: "grid-template-rows: auto auto;"
    },
    {
        question: "Complete the CSS selector for the last child of a `ul` element:",
        answer: "ul > li:last-child { }"
    },
    {
        question: "Complete the CSS selector for the first child of a `div` element:",
        answer: "div > :first-child { }"
    }
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
  },
  {
    question: "Complete this JavaScript code to select an element by its ID:\nconst element = document.____('myId');",
    answer: "const element = document.getElementById('myId');"
  },
  {
    question: "What JavaScript method is used to add a new element to the end of an array?",
    answer: "push()"
  },
  {
    question: "Fill in the blank to create a function in JavaScript:\n____ myFunction() { }",
    answer: "function myFunction() { }"
  },
  {
    question: "What JavaScript method is used to remove the first element from an array?",
    answer: "shift()"
  },
  {
    question: "Complete this JavaScript code to add an event listener:\nelement.addEventListener('click', ____);",
    answer: "element.addEventListener('click', myFunction);  (where myFunction is a function)"
  },
  {
    question: "Complete this JavaScript code to change the text content of an element:\nelement.textContent = ____;",
    answer: "element.textContent = 'New Text';"
  },
  {
    question: "What JavaScript method is used to find the index of an item in an array?",
    answer: "indexOf()"
  },
  {
    question: "Fill in the blank to create a JavaScript object:\nconst myObject = { key: 'value' };",
    answer: "const myObject = { key: 'value' };"
  },
  {
    question: "What JavaScript method is used to convert a JSON string to a JavaScript object?",
    answer: "JSON.parse()"
  },
   {
    question: "Complete this JavaScript code to get the value of an input field:\nconst value = document.getElementById('myInput').____;",
    answer: "const value = document.getElementById('myInput').value;"
  },
  {
    question: "Complete this JavaScript code to create a new HTML element:\nconst newElement = document.____('div');",
    answer: "const newElement = document.createElement('div');"
  },
  {
    question: "What JavaScript method is used to remove an element from the DOM?",
    answer: "remove()"
  },
  {
    question: "Fill in the blank to create a JavaScript class:\n____ MyClass {  }",
    answer: "class MyClass {  }"
  },
  {
    question: "What JavaScript method is used to execute a function after a specified delay?",
    answer: "setTimeout()"
  },
  {
    question: "Complete this JavaScript code to prevent the default action of an event:\nevent.____();",
    answer: "event.preventDefault();"
  },
  {
    question: "Complete this JavaScript code to add a class to an element:\nelement.classList.____('myClass');",
    answer: "element.classList.add('myClass');"
  },
  {
    question: "What JavaScript method is used to check if an array includes a certain value?",
    answer: "includes()"
  },
  {
    question: "Fill in the blank to create a JavaScript promise:\nconst myPromise = new ____((resolve, reject) => { });",
    answer: "const myPromise = new Promise((resolve, reject) => { });"
  },
  {
    question: "What JavaScript method is used to retrieve data from a server?",
    answer: "fetch()"
  },
  {
    question: "Complete this JavaScript code to redirect to a new page:\nwindow.location.____ = 'https://www.example.com';",
    answer: "window.location.href = 'https://www.example.com';"
  },
  {
    question: "Complete this JavaScript code to remove a class from an element:\nelement.classList.____('myClass');",
    answer: "element.classList.remove('myClass');"
  },
  {
    question: "What JavaScript method is used to create a shallow copy of an array?",
    answer: "slice()"
  },
  {
    question: "Fill in the blank to create an asynchronous function in JavaScript:\n____ asyncFunction() { }",
    answer: "async asyncFunction() { }"
  },
  {
    question: "What JavaScript method is used to set a cookie?",
    answer: "document.cookie = 'cookieName=cookieValue';"
  },
  {
    question: "Complete this JavaScript code to stop an event from propagating:\nevent.____();",
    answer: "event.stopPropagation();"
  },
  {
    question: "Complete this JavaScript code to get the current date and time:\nconst now = new ____();",
    answer: "const now = new Date();"
  },
  {
    question: "What JavaScript method is used to merge two or more arrays?",
    answer: "concat()"
  },
  {
    question: "Fill in the blank to create a generator function in JavaScript:\n____ function* myGenerator() { }",
    answer: "function* myGenerator() { }"
  },
  {
    question: "What JavaScript method is used to add an event listener that only fires once?",
    answer: "element.addEventListener('click', myFunction, { once: true });"
  },
  {
    question: "Complete this JavaScript code to decode a URI component:\nconst decoded = decodeURIComponent(____);",
    answer: "const decoded = decodeURIComponent(encodedURI);"
  },
  {
    question: "Complete this JavaScript code to create a new, empty object with no prototype:\nconst obj = Object.____(null);",
    answer: "const obj = Object.create(null);"
  },
  {
    question: "What JavaScript method is used to iterate over the properties of an object?",
    answer: "for...in loop"
  },
  {
    question: "Fill in the blank to create a new Symbol:\nconst mySymbol = ____ Symbol('mySymbol');",
    answer: "const mySymbol = Symbol('mySymbol');"
  },
  {
    question: "What JavaScript method is used to get the prototype of an object?",
    answer: "Object.getPrototypeOf()"
  },
  {
    question: "Complete this JavaScript code to define a getter method in a class:\nget ____() {  }",
    answer: "get myProperty() {  }"
  },
  {
        question: "Complete this JavaScript code to create a new error object:\nconst error = new ____('Something went wrong!');",
        answer: "const error = new Error('Something went wrong!');"
    },
    {
        question: "What JavaScript method is used to remove the last element from an array and returns that element?",
        answer: "pop()"
    },
    {
        question: "Fill in the blank to create a weak map in JavaScript:\nconst weakMap = new ____();",
        answer: "const weakMap = new WeakMap();"
    },
    {
        question: "What JavaScript method is used to check if a key exists in a WeakMap object?",
        answer: "weakMap.has(key)"
    },
    {
        question: "Complete this JavaScript code to define a setter method in a class:\nset ____(value) {  }",
        answer: "set myProperty(value) {  }"
    },

  ]
};

let currentMode = '';
let currentLevel = 0;
let score = 0;

// Load saved progress for a mode
function loadProgress(mode) {
  const savedData = JSON.parse(localStorage.getItem(`progress_${mode}`));
  if (savedData) {
    return {
      level: savedData.level,
      score: savedData.score
    };
  }
  return { level: 0, score: 0 };
}

// Save progress for a mode
function saveProgress(mode, level, score) {
  localStorage.setItem(`progress_${mode}`, JSON.stringify({
    level: level,
    score: score
  }));
}

function startGame(mode) {
  currentMode = mode;
  const progress = loadProgress(mode);
  currentLevel = progress.level;
  score = progress.score;

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

    score += 2;
    currentLevel++;
    saveProgress(currentMode, currentLevel, score);

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
  document.getElementById('answer').value = '';
  document.getElementById('feedback').textContent = '';
  document.getElementById('retry-button').classList.add('hidden');
}

function resetGame() {
  ['html', 'css', 'js'].forEach(mode => localStorage.removeItem(`progress_${mode}`));
  currentMode = '';
  currentLevel = 0;
  score = 0;
  document.getElementById('game-area').classList.add('hidden');
  document.querySelector('.mode-selector').style.display = 'block';
}


window.onload = function() {
  document.querySelectorAll('.mode-selector button').forEach(btn => {
    btn.addEventListener('click', () => {
      const mode = btn.getAttribute('onclick').match(/startGame\('(\w+)'\)/)[1];
      startGame(mode);
    });
  });
};


document.getElementById('year').textContent = new Date().getFullYear();