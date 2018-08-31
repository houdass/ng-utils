import { Injectable } from '@angular/core';

export class UtilService {
  constructor() {}

  html(htmlContent: string): string {
    return `\`\`\`html
${htmlContent}
\`\`\``;
  }

  typescript(tsContent: string): string {
    return `\`\`\`typescript
${tsContent}
\`\`\``;
  }
}
