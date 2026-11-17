# Credit Where Due

Nine British women whose Second World War work was remembered under a man's name.
The page shows the men first. Hover over a portrait and the woman who did the work
appears; click to read her story, with a short note on the man who got the credit.

Plain HTML, CSS and JavaScript. No build step, no dependencies to install.

## Files

| File | What it is |
| --- | --- |
| `index.html` | The page skeleton and the intro text |
| `style.css` | All styling |
| `app.js` | Hover, tap and story-dialog behaviour |
| `data.js` | **The content.** All nine pairs, their stories, photo links and sources |
| `img/` | Put your own photographs here if you want to replace the linked ones |

## Editing the content

Everything you will want to change is in `data.js`. Each entry looks like this:

```js
{
  id: "clarke-turing",            // used in the URL, e.g. index.html#clarke-turing
  field: "Codebreaking, Bletchley Park",
  him: { name, years, role, photo, credit },   // credit = short paragraph about him
  her: { name, years, role, photo, lede, story: [ ...paragraphs ], sources: [ {label, url} ] }
}
```

To add a pair, copy one block and paste it inside the `PAIRS` array.
To remove one, delete its block. The grid adjusts itself.

## Photographs

The `photo` fields currently link straight to Wikipedia and Wikimedia Commons.
That works, but for a project you hand in it is safer to download each image into
`img/` and point `photo` at the file, e.g. `photo: "img/joan-clarke.jpg"`.

Things to check before you hand it in:

- Everyone now has a photograph. If you ever remove one, set `photo: ""` and the site
  shows a "No photograph on file" frame instead.
- **R. V. Jones** currently uses a group photograph from Commons (he is the man on the left).
  Replace it with a solo portrait if you find one.
- Three images come from English Wikipedia under *fair use* rather than a free licence
  (Joan Clarke, Joan Curran, Stanley Hooker). That is generally fine for a non-commercial
  student project, but credit the source, and check your university's rules.

## Publishing on GitHub Pages (free)

1. Create a new repository on GitHub, for example `credit-where-due`. Make it **public**
   (GitHub Pages is free only for public repositories on a free account).
2. Upload these files to the root of the repository: `index.html`, `style.css`, `app.js`,
   `data.js`, `README.md` and the `img/` folder. You can drag and drop them on the GitHub
   website ("Add file" > "Upload files"), or use git:

   ```bash
   git init
   git add .
   git commit -m "Credit Where Due"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/credit-where-due.git
   git push -u origin main
   ```

3. On GitHub, open the repository's **Settings** > **Pages**.
4. Under "Build and deployment", set **Source** to "Deploy from a branch",
   choose the `main` branch and the `/ (root)` folder, and save.
5. After a minute or two the site is live at
   `https://YOUR-USERNAME.github.io/credit-where-due/`.

Every time you push a change, the site updates itself.

## Testing locally

Open `index.html` directly in a browser, or run a tiny server from this folder:

```bash
python3 -m http.server 8000
```

and open http://localhost:8000.

## Sources

Each story lists its sources at the bottom. The main ones are the Wikipedia articles
for each person, obituaries in The Guardian and The Telegraph, and the Imperial War
Museums and Bletchley Park Trust websites. Check the facts against them before you
hand the project in; the texts here were written as a starting point, not as a final essay.
