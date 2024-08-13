export interface I_HttpResponse<T> {
  message: string;
  status: boolean;
  status_code: number;
  error_code: string;
  data: T | null;
}

export interface I_HttpResponseError {
  message: string;
  status: boolean;
  status_code: number;
  error_code: string;
  error: Error;
}
