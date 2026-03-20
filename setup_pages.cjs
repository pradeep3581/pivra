const fs = require('fs');
const path = require('path');

const pagesDir = path.join(__dirname, 'src', 'pages');
if (!fs.existsSync(pagesDir)) {
  fs.mkdirSync(pagesDir, { recursive: true });
}

const pages = [
  'Home', 'Services', 'About', 'Portfolio', 'Pricing', 
  'Contact', 'Checkout', 'LegalLayout', 'Privacy', 
  'Terms', 'Refund', 'Shipping', 'NotFound'
];

pages.forEach(p => {
  const content = `import React from 'react';\n\nexport default function ${p}() {\n  return (\n    <div className="section container">\n      <h1>${p}</h1>\n      <p>Content for ${p} goes here.</p>\n    </div>\n  );\n}\n`;
  const filePath = path.join(pagesDir, `${p}.jsx`);
  if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, content);
  }
});

console.log('Pages scaffolded successfully.');
