const ERROR_MESSAGES = {
  default: "Something went Wrong !",
  create: "Product is not saved",
  500: "Internal server Error",
};

export class ErrorHandler {
  constructor(status, code = "" , message) {

    if(message == ""){
      if(ERROR_MESSAGES[code] ){
        message = ERROR_MESSAGES[code]
      }else {
        message = ERROR_MESSAGES["default"]
      }
    }
        
    return { status , code , message  }
  }
}
