# Kaedn Rhys | Creative Portfolio

A responsive, three-page personal filmmaking portfolio ready for **GitHub Pages**. No build tools or paid hosting required.

## Pages
- `index.html` — Portfolio, including System Reboot and Global Martial Arts
- `about.html` — About Me
- `contact.html` — Contact, with an integrated form

**Navigation behavior:** Every link that goes to another HTML page or external website is set to open a **new tab** (`target="_blank"`). The jump to the work section stays on the current page.

## Publish on GitHub Pages
1. Sign in to GitHub and select **New repository**. Name it something like `creative-portfolio` and make it **Public**.
2. Upload **all of the files in this folder**, including the `assets` folder, to the root of the repository. Do not upload just the ZIP file.
3. Select **Settings → Pages** in the repository.
4. Under **Build and deployment**, select **Deploy from a branch**, then choose **main** and **/(root)**. Save.
5. Once GitHub completes deployment, your website URL will typically be `https://YOUR_USERNAME.github.io/creative-portfolio/`.

If you prefer a URL without the repository name, create a repository named `YOUR_USERNAME.github.io` instead.

## Important: Make the contact form work
The contact page already has a properly styled HTML form. To receive messages:
1. Open `contact.html` in any text editor.
2. Find `https://formsubmit.co/YOUR_EMAIL@example.com`.
3. Replace `YOUR_EMAIL@example.com` with **the email address that should receive submissions**. Keep `https://formsubmit.co/` before it.
4. Upload the edited file to GitHub.
5. Send a **test message** through the published website and follow FormSubmit's first-time activation instructions delivered to your email address.

FormSubmit is a third-party form service. Visitors do **not** see a Google Form embed, and the form inputs are part of your own page. FormSubmit may display a CAPTCHA or confirmation page, and it receives data entered into the form. Review the service's terms/privacy policy before using it. The site's JavaScript deliberately prevents submission until you configure the email address.

## Customize your content
- **Project videos:** The project artwork is original CSS-only placeholder styling, not video thumbnails. When your films are ready, add an external video link inside the relevant `<div class="project-links">` in `index.html` using:

  `<a class="inline-link" href="https://YOUR_VIDEO_URL" target="_blank" rel="noopener noreferrer">Watch film ↗</a>`

  You can remove `<span class="subtle-note">Video link coming soon</span>` once you add the first project's video link.
- **Your picture:** The `about.html` portrait is a placeholder. Replace `<div class="portrait-placeholder"> ... </div>` with `<img class="about-photo" src="assets/portrait.jpg" alt="Portrait of Kaedn Rhys">` and put the photo in `assets/`. Add this to `assets/styles.css`: `.about-photo{display:block;width:100%;height:590px;object-fit:cover}`.
- **About text:** Update the paragraphs in `about.html` to reflect how you want to introduce yourself.
- **Résumé:** If desired, add a PDF to `assets/` and link to it with `target="_blank"` from the About page.
- **More work:** Duplicate a `<article class="project-card"> ... </article>` in `index.html` and edit its contents to add additional projects.
- **Colors:** Change `--bg`, `--text`, and `--accent` in `assets/styles.css`.

## Testing locally
Open `index.html` in a web browser. No development server is required for these three pages. Always test the **published** contact form after activation.

## Notes
- The website uses Google Fonts and therefore loads those font styles over the network. It has system-font fallbacks.
- This package does not contain your video files, personal photo, email address, or résumé because they were not provided.
- No analytics or tracking scripts are included.
