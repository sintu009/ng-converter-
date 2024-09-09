function convertHTML() {
 const inputHTML = document.getElementById('htmlInput').value;

  let convertedHTML = inputHTML.replace(/style="(.*?)"/g, (match, styles) => {
     const styleObject = styles.split(';').reduce((acc, rule) => {
         if (rule.trim()) {
             let [key, value] = rule.split(':');
             key = key.trim();
             value = value.trim();
             acc.push(`'${key}': '${value}'`);
         }
         return acc;
     }, []).join(', ');

     return `ng-style="{${styleObject}}"`;
 });

  convertedHTML = convertedHTML.replace(/onclick="(.*?)"/g, 'ng-click="$1"')
                              .replace(/onchange="(.*?)"/g, 'ng-change="$1"')
                              .replace(/onmouseover="(.*?)"/g, 'ng-mouseover="$1"')
                              .replace(/onmouseout="(.*?)"/g, 'ng-mouseout="$1"')
                              .replace(/onsubmit="(.*?)"/g, 'ng-submit="$1"');

  convertedHTML = convertedHTML.replace(/<script>/g, '<ng-script>').replace(/<\/script>/g, '</ng-script>');

  document.getElementById('convertedOutput').value = convertedHTML;
}

 function copyToClipboard() {
 const convertedText = document.getElementById('convertedOutput');
 convertedText.select();
 document.execCommand('copy');
 alert('Converted text copied to clipboard!');
}
