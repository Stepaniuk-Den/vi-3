interface Crisp {
    push: (event: [string, string] | [string, string, unknown]) => void;
    is?: (key: string) => boolean;
  }
  
  declare global {
    interface Window {
      $crisp: Crisp;
      CRISP_WEBSITE_ID?: string;
    }
  }