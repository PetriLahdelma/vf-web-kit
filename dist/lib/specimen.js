export function buildSpecimen(font, axes) {
    const sliders = axes.map((a) => `<label>${a.tag}: <input type="range" min="${a.min}" max="${a.max}" value="${a.min}" data-axis="${a.tag}"></label>`).join('');
    return `<!doctype html>
<html>
<head>
  <meta charset="utf-8" />
  <style>body{font-family:'${font.familyName}',sans-serif;padding:24px}.preview{font-size:48px}</style>
</head>
<body>
  <h1>${font.familyName} Specimen</h1>
  <div>${sliders}</div>
  <div class="preview">Hamburgefontsiv 0123456789</div>
  <script>
    const preview = document.querySelector('.preview');
    document.querySelectorAll('input').forEach((input) => {
      input.addEventListener('input', () => {
        const settings = Array.from(document.querySelectorAll('input'))
          .map(i => "'" + i.dataset.axis + "' " + i.value)
          .join(', ');
        preview.style.fontVariationSettings = settings;
      });
    });
  </script>
</body>
</html>`;
}
