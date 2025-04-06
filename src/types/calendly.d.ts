
interface CalendlyInitOptions {
  url: string;
  parentElement: HTMLElement | null;
  prefill?: object;
  utm?: object;
}

interface Calendly {
  initInlineWidget: (options: CalendlyInitOptions) => void;
}

interface Window {
  Calendly?: Calendly;
}
