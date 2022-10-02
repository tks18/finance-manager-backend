declare module 'http' {
  interface IncomingHttpHeaders {
    'x-session-token'?: string;
  }
}
