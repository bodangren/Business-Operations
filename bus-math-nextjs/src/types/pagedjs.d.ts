declare module 'pagedjs' {
  export class Previewer {
    constructor();
    preview(content: HTMLElement): Promise<{ flow: unknown; stylesheets: unknown }>;
  }
}
