import { ZodError } from "zod";
import { IErrorsString } from "./interfaces";

export const convertZodErrors = (error: ZodError): IErrorsString => {
  return error.issues.reduce((acc: { [key: string]: string }, issue) => {
    acc[issue.path[0]] = issue.message;
    return acc;
  }, {});
};
