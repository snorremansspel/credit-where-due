// Credit Where Due — behaviour
// Hover (or focus) a file to reveal the woman; click to open her story.
// On touch screens, the first tap reveals and the second tap opens.

(function () {
  const gallery = document.getElementById("gallery");
  const dialog = document.getElementById("story");
  const body = document.getElementById("story-body");
  const closeBtn = document.getElementById("story-close");
  const prevBtn = document.getElementById("story-prev");
  const nextBtn = document.getElementById("story-next");
  const hint = document.querySelector("[data-hint]");

  const isTouch = window.matchMedia("(hover: none)").matches;
  if (isTouch) {
    document.documentElement.classList.add("touch");
    hint.textContent = "Tap a portrait to see who did the work. Tap again to read her story.";
  }

  let current = -1;
  let lastTrigger = null;

  function portrait(person, cls) {
    if (person.photo) {
      const img = document.createElement("img");
      img.className = cls;
      img.src = person.photo;
      img.alt = person.name;
      img.loading = "lazy";
      img.decoding = "async";
      img.addEventListener("error", () => img.replaceWith(noPhoto(person, cls)));
      return img;
    }
    return noPhoto(person, cls);
  }

  function noPhoto(person, cls) {
    const div = document.createElement("div");
    div.className = "no-photo " + cls;
    div.setAttribute("role", "img");
    div.setAttribute("aria-label", person.name + ", no photograph on file");
    div.innerHTML =
      '<p class="no-photo-name"></p><p class="no-photo-note">No photograph on file</p>';
    div.querySelector(".no-photo-name").textContent = person.name;
    return div;
  }

  function buildFile(pair, index) {
    const btn = document.createElement("button");
    btn.className = "file";
    btn.type = "button";
    btn.dataset.index = index;
    btn.setAttribute(
      "aria-label",
      pair.him.name + ". Reveal: " + pair.her.name + ". Open her story."
    );

    const frame = document.createElement("div");
    frame.className = "file-frame";
    frame.append(portrait(pair.him, "him"), portrait(pair.her, "her"));

    const caption = document.createElement("div");
    caption.className = "file-caption";
    caption.innerHTML =
      '<p class="file-field"></p>' +
      '<p class="file-him"></p>' +
      '<p class="file-her"></p>' +
      '<p class="file-tap">Tap again to read her story</p>';
    caption.querySelector(".file-field").textContent = pair.field;
    caption.querySelector(".file-him").textContent = pair.him.name;
    caption.querySelector(".file-her").textContent = pair.her.name;

    btn.append(frame, caption);

    if (isTouch) {
      btn.addEventListener("click", () => {
        if (btn.classList.contains("is-revealed")) {
          open(index, btn);
        } else {
          gallery.querySelectorAll(".file.is-revealed").forEach((f) => f.classList.remove("is-revealed"));
          btn.classList.add("is-revealed");
        }
      });
    } else {
      btn.addEventListener("mouseenter", () => btn.classList.add("is-revealed"));
      btn.addEventListener("mouseleave", () => btn.classList.remove("is-revealed"));
      btn.addEventListener("focus", () => btn.classList.add("is-revealed"));
      btn.addEventListener("blur", () => btn.classList.remove("is-revealed"));
      btn.addEventListener("click", () => open(index, btn));
    }
    return btn;
  }

  function renderStory(pair) {
    body.innerHTML = "";

    const her = document.createElement("article");
    her.className = "story-her";
    her.innerHTML =
      '<p class="story-field"></p>' +
      '<h2 class="story-name" id="story-name"></h2>' +
      '<p class="story-meta"></p>' +
      '<div class="story-portrait"></div>' +
      '<p class="story-lede"></p>' +
      '<div class="story-text"></div>' +
      '<ul class="story-sources"></ul>';
    her.querySelector(".story-field").textContent = pair.field;
    her.querySelector(".story-name").textContent = pair.her.name;
    her.querySelector(".story-meta").textContent = pair.her.years + ". " + pair.her.role + ".";
    her.querySelector(".story-portrait").append(portrait(pair.her, "her"));
    her.querySelector(".story-lede").textContent = pair.her.lede;
    const text = her.querySelector(".story-text");
    pair.her.story.forEach((para) => {
      const p = document.createElement("p");
      p.textContent = para;
      text.append(p);
    });
    const sources = her.querySelector(".story-sources");
    (pair.her.sources || []).forEach((s) => {
      const li = document.createElement("li");
      const a = document.createElement("a");
      a.href = s.url;
      a.textContent = s.label;
      a.target = "_blank";
      a.rel = "noopener";
      li.append("Source: ", a);
      sources.append(li);
    });

    const him = document.createElement("aside");
    him.className = "story-him";
    him.innerHTML =
      '<p class="story-him-label">The man who got the credit</p>' +
      '<div class="story-portrait"></div>' +
      '<h3 class="story-him-name"></h3>' +
      '<p class="story-him-meta"></p>' +
      '<p class="story-him-credit"></p>';
    him.querySelector(".story-portrait").append(portrait(pair.him, "him"));
    him.querySelector(".story-him-name").textContent = pair.him.name;
    him.querySelector(".story-him-meta").textContent = pair.him.years + ". " + pair.him.role + ".";
    him.querySelector(".story-him-credit").textContent = pair.him.credit;

    body.append(her, him);
  }

  function open(index, trigger) {
    current = index;
    if (trigger) lastTrigger = trigger;
    renderStory(PAIRS[index]);
    if (!dialog.open) dialog.showModal();
    dialog.querySelector(".story-shell").scrollTop = 0;
    history.replaceState(null, "", "#" + PAIRS[index].id);
    closeBtn.focus();
  }

  function close() {
    dialog.close();
  }

  dialog.addEventListener("close", () => {
    history.replaceState(null, "", location.pathname + location.search);
    if (lastTrigger) {
      lastTrigger.classList.remove("is-revealed");
      lastTrigger.focus({ preventScroll: true });
      lastTrigger.classList.remove("is-revealed");
    }
  });

  closeBtn.addEventListener("click", close);
  prevBtn.addEventListener("click", () => open((current - 1 + PAIRS.length) % PAIRS.length));
  nextBtn.addEventListener("click", () => open((current + 1) % PAIRS.length));

  dialog.addEventListener("click", (e) => {
    if (e.target === dialog) close();
  });
  dialog.addEventListener("keydown", (e) => {
    if (e.key === "ArrowRight") nextBtn.click();
    if (e.key === "ArrowLeft") prevBtn.click();
  });

  PAIRS.forEach((pair, i) => gallery.append(buildFile(pair, i)));

  // Deep link: index.html#clarke-turing opens that story directly.
  const wanted = location.hash.slice(1);
  const start = PAIRS.findIndex((p) => p.id === wanted);
  if (start >= 0) open(start, gallery.children[start]);
})();
