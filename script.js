function runCode() {
    const html = document.getElementById("htmlCode").value;
    const css = `<style>${document.getElementById("cssCode").value}</style>`;
    const js = `<script>${document.getElementById("jsCode").value}<\/script>`;
    const output = document.getElementById("output");
  
    output.srcdoc = html + css + js;
  }
  
  function saveProject() {
    const projectName = localStorage.getItem("editProjectName");
  
    const html = document.getElementById("htmlCode").value;
    const css = document.getElementById("cssCode").value;
    const js = document.getElementById("jsCode").value;
  
    const project = { html, css, js };
  
    let name = projectName;
    if (!name) {
      name = prompt("Enter project name:");
      if (!name) return alert("⚠️ Project name required.");
    }
  
    try {
      localStorage.setItem(name, JSON.stringify(project));
      localStorage.setItem("editProject", JSON.stringify(project));
      localStorage.setItem("editProjectName", name);
      alert(`✅ Project saved: ${name}`);
    } catch (e) {
      alert("❌ Failed to save project: " + e.message);
    }
  }
  
  
  function downloadZip() {
    const html = document.getElementById("htmlCode").value;
    const css = document.getElementById("cssCode").value;
    const js = document.getElementById("jsCode").value;
  
    if (!html && !css && !js) {
      alert("❌ Cannot download empty project.");
      return;
    }
  
    const zip = new JSZip();
    zip.file("index.html", html || "");
    zip.file("style.css", css || "");
    zip.file("script.js", js || "");
  
    zip.generateAsync({ type: "blob" }).then(function (content) {
      const a = document.createElement("a");
      a.href = URL.createObjectURL(content);
      a.download = "project.zip";
      a.style.display = "none";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    }).catch((err) => {
      alert("❌ ZIP creation failed: " + err.message);
    });
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


window.onload = function () {
    const projectRaw = localStorage.getItem("editProject");
    const projectName = localStorage.getItem("editProjectName");
  
    if (projectRaw && projectName) {
      try {
        const project = JSON.parse(projectRaw);
        document.getElementById("htmlCode").value = project.html || "";
        document.getElementById("cssCode").value = project.css || "";
        document.getElementById("jsCode").value = project.js || "";
        document.getElementById("projectNameDisplay").innerText = `📂 ${projectName.toUpperCase()}`;
      } catch (err) {
        console.error("❌ Failed to load project:", err);
      }
    }
  };
  
  // Clear edit project session  
  

  function clearEditSession() {
    localStorage.removeItem("editProject");
    localStorage.removeItem("editProjectName");
  }
  

  function startNewProject() {
    localStorage.removeItem("editProject");
    localStorage.removeItem("editProjectName");
    document.getElementById("htmlCode").value = "";
    document.getElementById("cssCode").value = "";
    document.getElementById("jsCode").value = "";
    document.getElementById("projectNameDisplay").innerText = " ";
  }
  
  function openProject() {
    const projectNames = [];

    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      // Skip editor metadata keys
      if (key === "editProject" || key === "editProjectName") continue;
      projectNames.push(key);
    }

    if (projectNames.length === 0) {
      alert("⚠️ No saved projects found.");
      return;
    }

    const name = prompt(
      "Enter the project name to open:\n\n" + projectNames.join("\n")
    );

    if (!name || !localStorage.getItem(name)) {
      alert("❌ Project not found.");
      return;
    }

    const projectRaw = localStorage.getItem(name);
    try {
      const project = JSON.parse(projectRaw);
      document.getElementById("htmlCode").value = project.html || "";
      document.getElementById("cssCode").value = project.css || "";
      document.getElementById("jsCode").value = project.js || "";
      document.getElementById("projectNameDisplay").innerText =
        "📂 " + name.toUpperCase();

      // Save edit session for persistence
      localStorage.setItem("editProject", projectRaw);
      localStorage.setItem("editProjectName", name);
    } catch (e) {
      alert("❌ Failed to load project.");
    }
  }


  function loadMultipleFiles() {
    const files = document.getElementById("multiFileInput").files;
    let html = "", css = "", js = "";

    for (let file of files) {
      const reader = new FileReader();

      reader.onload = function (e) {
        const content = e.target.result;

        if (file.name.endsWith(".html")) html = content;
        else if (file.name.endsWith(".css")) css = content;
        else if (file.name.endsWith(".js")) js = content;

        // Once all files loaded, populate editors
        if (file === files[files.length - 1]) {
          document.getElementById("htmlCode").value = html;
          document.getElementById("cssCode").value = css;
          document.getElementById("jsCode").value = js;

          const projectName = prompt("Enter a name to save this project:", "multi-file-project");
          if (projectName) {
            const project = { html, css, js };
            localStorage.setItem(projectName, JSON.stringify(project));
            localStorage.setItem("editProject", JSON.stringify(project));
            localStorage.setItem("editProjectName", projectName);
            document.getElementById("projectNameDisplay").innerText = "📂 " + projectName.toUpperCase();
            alert("✅ Project loaded and saved!");
          }
        }
      };

      reader.readAsText(file);
    }
  }


