export class ClientError {
  public status: number
  public message: string

  public constructor(status: number, message: string) {
    this.status = status
    this.message = message
  }
}

//"child" client error class
export class RouteNotFoundError extends ClientError {
  public constructor(route: string) {
    super(404, `route ${route} not found`)
  }
}

//"child" group error class
export class groupNotFoundError extends ClientError {
  public constructor(groupId: string) {
    super(404, `group id:${groupId} was not found`)
  }
}
