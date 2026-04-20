# FeaXDrive Project Page

A lightweight GitHub Pages starter repository for the paper:

**FeaXDrive: Feasibility-aware Trajectory-Centric Diffusion Planning for End-to-End Autonomous Driving**

## Repository structure

```text
.
├── .nojekyll
├── README.md
├── index.html
├── assets
│   ├── css
│   │   └── style.css
│   ├── images
│   ├── js
│   │   └── main.js
│   └── pdf
│       ├── FeaXDrive.pdf
│       ├── FeaXDrive_Architecture.pdf
│       ├── curvature_violation.pdf
│       └── drivable_area_violation.pdf
└── static
    ├── main.tex
    └── refs.bib
```

## How to publish to GitHub Pages

1. Create a new GitHub repository.
2. Upload all files in this folder to the repository root.
3. Go to **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select the **main** branch and **/(root)** folder.
6. Save and wait for GitHub Pages to publish the site.

## What to customize first

- Replace the placeholder code link in `index.html`:
  - `https://github.com/yourname/feaxdrive`
- Update the BibTeX entry if the paper gets an arXiv link, venue, or DOI.
- Add extra buttons if you want links for arXiv, video, poster, or dataset.

## Notes

- `.nojekyll` is included so GitHub Pages serves the repository as a plain static site.
- The page already includes the paper PDF, figures, and qualitative comparisons from your uploaded materials.
