// This function will NEVER return anything
function throwErrors(statusCode: number): never {
  if (statusCode >= 400 && statusCode <= 499) {
    throw  Error("Request Error");
  }

  throw  Error("Something wrong happened.");
}

export {
  throwErrors
}