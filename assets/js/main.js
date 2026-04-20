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
