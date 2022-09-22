declare module 'http' {
  interface IncomingHttpHeaders {
    'x-secret-pass'?: string;
  }
}
