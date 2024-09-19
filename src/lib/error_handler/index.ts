import { AxiosError } from "axios";
import { useToast } from "@chakra-ui/react";

type AppError = AxiosError<AxiosErrorResponse> | Error;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function isAxiosError(error: any): error is AxiosError<AxiosErrorResponse> {
  return error && typeof error === "object" && "response" in error;
}
export function extractErrorMessage(error: AppError): string {
  if (isAxiosError(error)) {
    return (
      error.response?.data?.error ||
      error.message ||
      "An unknown error occurred"
    );
  } else if (error instanceof Error) {
    return error.message || "An unknown error occurred";
  } else {
    return "An unknown error occurred";
  }
}

function renderNotification(
  toast: ReturnType<typeof useToast>,
  errorMessage: string
) {
  toast({
    title: "An error has occurred",
    description: errorMessage,
    status: "error",
    duration: 4000,
    isClosable: true,
  });
}

export function useErrorHandler() {
  const toast = useToast();

  return (error: AppError) => {
    const errorMessage = extractErrorMessage(error);
    renderNotification(toast, errorMessage);
  };
}
