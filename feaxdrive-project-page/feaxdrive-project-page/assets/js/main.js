const cases = {
  1: {
    baseline: 'assets/images/case1_baseline.png',
    ours: 'assets/images/case1_feaxdrive.png',
    caption:
      'Case 1: FeaXDrive produces a more feasible trajectory with better geometric regularity and improved drivable-area consistency.'
  },
  2: {
    baseline: 'assets/images/case2_baseline.png',
    ours: 'assets/images/case2_feaxdrive.png',
    caption:
      'Case 2: Compared with the baseline, FeaXDrive better aligns the planned path with local road geometry under a challenging scene.'
  },
  3: {
    baseline: 'assets/images/case3_baseline.png',
    ours: 'assets/images/case3_feaxdrive.png',
    caption:
      'Case 3: FeaXDrive yields a cleaner and more drivable trajectory in a difficult scenario with stronger feasibility preservation.'
  }
};

const baselineImage = document.getElementById('baseline-image');
const oursImage = document.getElementById('feaxdrive-image');
const caseCaption = document.getElementById('case-caption');
const tabs = document.querySelectorAll('.tab');

function setCase(caseId) {
  const data = cases[caseId];
  if (!data) return;
  baselineImage.src = data.baseline;
  oursImage.src = data.ours;
  caseCaption.textContent = data.caption;
  tabs.forEach((tab) => {
    const active = tab.dataset.case === String(caseId);
    tab.classList.toggle('is-active', active);
    tab.setAttribute('aria-selected', active ? 'true' : 'false');
  });
}

tabs.forEach((tab) => {
  tab.addEventListener('click', () => setCase(tab.dataset.case));
});

const copyButton = document.getElementById('copy-bibtex');
const bibtexBlock = document.getElementById('bibtex-block');

if (copyButton && bibtexBlock) {
  copyButton.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(bibtexBlock.textContent);
      copyButton.textContent = 'Copied';
      setTimeout(() => {
        copyButton.textContent = 'Copy BibTeX';
      }, 1500);
    } catch (error) {
      copyButton.textContent = 'Copy failed';
      setTimeout(() => {
        copyButton.textContent = 'Copy BibTeX';
      }, 1500);
    }
  });
}
