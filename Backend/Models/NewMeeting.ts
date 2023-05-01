export class NewMeeting {
  public groupKey: number
  public startTimeDate: string
  public finishTimeDate: string
  public meetingInfo: string
  public meetingRoom: string
  constructor(
    groupKey: number,
    startTimeDate: string,
    finishTimeDate: string,
    meetingInfo: string,
    meetingRoom: string,
  ) {
    this.groupKey = groupKey
    this.startTimeDate = startTimeDate
    this.finishTimeDate = finishTimeDate
    this.meetingInfo = meetingInfo
    this.meetingRoom = meetingRoom
  }
}
