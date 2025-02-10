export const HTML_TYPES = [
  "text/html",
  "application/xhtml",
  "application/xhtml+xml",
];
export const WAIT_UNTIL_OPTS = [
  "load",
  "domcontentloaded",
  "networkidle0",
  "networkidle2",
];

export const SERVICE_WORKER_OPTS = [
  "disabled",
  "disabled-if-profile",
  "enabled",
] as const;

export type ServiceWorkerOpt = (typeof SERVICE_WORKER_OPTS)[number];

export const DETECT_SITEMAP = "<detect>";

export const EXTRACT_TEXT_TYPES = ["to-pages", "to-warc", "final-to-warc"];

export const BEHAVIOR_LOG_FUNC = "__bx_log";
export const ADD_LINK_FUNC = "__bx_addLink";
export const FETCH_FUNC = "__bx_fetch";

export const MAX_DEPTH = 1000000;
export const DEFAULT_MAX_RETRIES = 2;

export const FETCH_HEADERS_TIMEOUT_SECS = 30;
export const PAGE_OP_TIMEOUT_SECS = 5;
export const SITEMAP_INITIAL_FETCH_TIMEOUT_SECS = 30;

export type ExtractSelector = {
  selector: string;
  extract: string;
  isAttribute: boolean;
};

export const DEFAULT_SELECTORS: ExtractSelector[] = [
  {
    selector: "a[href]",
    extract: "href",
    isAttribute: false,
  },
];

export const BEHAVIOR_TYPES = [
  "autoplay",
  "autofetch",
  "autoscroll",
  "autoclick",
  "siteSpecific",
];

export const DISPLAY = ":99";

export enum ExitCodes {
  Success = 0,
  GenericError = 1,
  Failed = 9,
  OutOfSpace = 3,
  BrowserCrashed = 10,
  Cancelled = 11,
  FailedLimit = 12,
  Interrupted = 13,
  SizeLimit = 14,
  TimeLimit = 15,
  DiskUtilization = 16,
  Fatal = 17,
  ProxyError = 21,
}

export enum InterruptReason {
  SizeLimit = 1,
  TimeLimit = 2,
  FailedLimit = 3,
  DiskUtilization = 4,
  BrowserCrashed = 5,
  Cancelled = 6,
}
