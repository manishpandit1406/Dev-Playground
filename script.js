function runCode() {
    const html = document.getElementById("htmlCode").value;
    const css = `<style>${document.getElementById("cssCode").value}</style>`;
    const js = `<script>${document.getElementById("jsCode").value}<\/script>`;
    const output = document.getElementById("output");
  
    output.srcdoc = html + css + js;
  }
  
  function saveProject() {
  const html = document.getElementById("htmlCode").value;
  const css = document.getElementById("cssCode").value;
  const js = document.getElementById("jsCode").value;

  const name = prompt("Enter a name for your project:");
  if (!name) return;

  const project = { html, css, js };
  localStorage.setItem(name, JSON.stringify(project));

  // 💾 Also download as ZIP
  const zip = new JSZip();
  zip.file("index.html", html);
  zip.file("style.css", css);
  zip.file("script.js", js);

  zip.generateAsync({ type: "blob" }).then((content) => {
    const a = document.createElement("a");
    a.href = URL.createObjectURL(content);
    a.download = `${name}.zip`;
    a.click();
  });

  alert("Project saved and downloaded as ZIP!");
  loadProjects?.(); // Optional: reload project list if on main page
}

  
  function loadProjects() {
    const projectList = document.getElementById("projectList");
    projectList.innerHTML = "";
  
    for (let i = 0; i < localStorage.length; i++) {
      const name = localStorage.key(i);
      const li = document.createElement("li");
      li.textContent = name;
      li.onclick = () => loadProject(name);
      projectList.appendChild(li);
    }
  }
  
  function loadProject(name) {
    const project = JSON.parse(localStorage.getItem(name));
    if (!project) return;
  
    document.getElementById("htmlCode").value = project.html;
    document.getElementById("cssCode").value = project.css;
    document.getElementById("jsCode").value = project.js;
    runCode();
  }
  
  window.onload = function () {
    loadProjects();
  
    // Only load boilerplate if editors are empty
    if (
      !document.getElementById("htmlCode").value &&
      !document.getElementById("cssCode").value &&
      !document.getElementById("jsCode").value
    ) {
      loadBoilerplate();
    }
  };

  document.getElementById("htmlCode").addEventListener("keydown", function (e) {
    const textarea = this;
    
    if (e.key === "Enter") {
      const cursorPos = textarea.selectionStart;
      const value = textarea.value;
      const before = value.substring(0, cursorPos);
      const after = value.substring(cursorPos);
  
      // Check if "!" is the last character before Enter
      if (before.trim().endsWith("!")) {
        e.preventDefault(); // Stop default Enter behavior
  
        const boilerplate = `<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
  </head>
  <body>
    
  </body>
  </html>`;
  
        // Replace the "!" with boilerplate
        const newValue = before.trim().slice(0, -1) + boilerplate + after;
        textarea.value = newValue;
  
        // Move cursor inside <body>
        const bodyIndex = newValue.indexOf("<body>") + 7;
        textarea.selectionStart = textarea.selectionEnd = bodyIndex;
      }
    }
  });
  
  // Automatically run code whenever there is a change in HTML, CSS, or JS
document.getElementById("htmlCode").addEventListener("input", runCode);
document.getElementById("cssCode").addEventListener("input", runCode);
document.getElementById("jsCode").addEventListener("input", runCode);

// Automatically run code on page load
window.onload = function () {
  loadProjects();

  // Only load boilerplate if editors are empty
  if (
    !document.getElementById("htmlCode").value &&
    !document.getElementById("cssCode").value &&
    !document.getElementById("jsCode").value
  ) {
    loadBoilerplate();
  }

  // Run code immediately after loading the page if any code is pre-filled
  runCode();
};


