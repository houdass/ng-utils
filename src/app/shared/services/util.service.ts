import { Injectable } from '@angular/core';

export class UtilService {
  constructor() {}

  generateHTML(htmlContent: string) {
    return `\`\`\`html
${htmlContent}
\`\`\``;
  }
}
