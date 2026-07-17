const fs = require('fs');
const https = require('https');

const urls = [
  { url: 'https://fse.jegtheme.com/artifice/services/', route: '/services' },
  { url: 'https://fse.jegtheme.com/artifice/pages/projects/', route: '/projects' },
  { url: 'https://fse.jegtheme.com/artifice/pages/faq/', route: '/faq' },
  { url: 'https://fse.jegtheme.com/artifice/blog/', route: '/blog' },
  { url: 'https://fse.jegtheme.com/artifice/contact/', route: '/contact' }
];

async function fetchHtml(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return fetchHtml(res.headers.location).then(resolve).catch(reject);
      }
      let data = '';
      res.on('data', d => data += d);
      res.on('end', () => resolve(data));
      res.on('error', reject);
    });
  });
}

async function fetchCss(url, savePath) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      let data = '';
      res.on('data', d => data += d);
      res.on('end', () => {
        fs.writeFileSync(savePath, data);
        resolve();
      });
      res.on('error', reject);
    });
  });
}

(async () => {
  let appJsx = fs.readFileSync('src/App.jsx', 'utf8');
  let indexCss = fs.readFileSync('src/index.css', 'utf8');
  let importsToAdd = '';
  
  for (const page of urls) {
    try {
      console.log('Fetching', page.url);
      const html = await fetchHtml(page.url);
      
      const cssMatch = html.match(/<link rel='stylesheet' id='gutenverse-generated-content-css' href='\/\/(fse\.jegtheme\.com\/artifice\/wp-content\/uploads\/sites\/120\/gutenverse\/css\/gutenverse-content-\d+-[^\.]+)\.css/);
      if (cssMatch) {
        const cssUrl = 'https://' + cssMatch[1] + '.css';
        const fileName = cssUrl.split('/').pop();
        const localPath = 'public/wp-content/uploads/sites/120/gutenverse/css/' + fileName;
        await fetchCss(cssUrl, localPath);
        console.log('Saved CSS:', fileName);
        
        const importUrl = '/wp-content/uploads/sites/120/gutenverse/css/' + fileName;
        if (!indexCss.includes(importUrl)) {
          importsToAdd += '@import url(\'' + importUrl + '\');\n';
        }
      }
      
      const bodyMatch = html.match(/<body class=\"([^\"]+page-id-\d+[^\"]*)\"/);
      if (bodyMatch) {
        const classes = bodyMatch[1];
        const pageIdMatch = classes.match(/page-id-\d+/);
        if (pageIdMatch) {
          const pageId = pageIdMatch[0];
          console.log('Found page ID:', pageId, 'for', page.route);
          if (!appJsx.includes(pageId) && !appJsx.includes(page.route + "'") ) {
              appJsx = appJsx.replace('} else if (location.pathname === \'/about-us\') {', 
                `} else if (location.pathname === '${page.route}') {\n    pageClasses += " ${pageId}";\n  } else if (location.pathname === '/about-us') {`
              );
          }
        }
      }
    } catch (e) {
      console.error(e);
    }
  }
  
  if (importsToAdd) {
    indexCss = importsToAdd + indexCss;
    fs.writeFileSync('src/index.css', indexCss);
    console.log('Updated index.css');
  }
  
  fs.writeFileSync('src/App.jsx', appJsx);
  console.log('Updated App.jsx');
})();
