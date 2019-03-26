export interface ResponseBody<T, S = {}> {
  data: T;
  metadata?: S;
}
