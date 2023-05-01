import dalMySQL from '../Utils/dalMySQL'

// CREATE PRODUCTION GROUP TABLE IF NOT EXISTS
const createProductionTable = () => {
  const SQLcommand = `
    CREATE TABLE IF NOT EXISTS meetings.production (
        groupKey INT NOT NULL AUTO_INCREMENT,
        groupName VARCHAR(90) NOT NULL UNIQUE,
        PRIMARY KEY (groupKey));`
  dalMySQL.execute(SQLcommand)
}

// CREATE MEETINGS GROUP TABLE IF NOT EXISTS
const createMeetingsTable = () => {
  const SQLcommand = `
      CREATE TABLE IF NOT EXISTS meetings.meetingTable(
        meetingKey INT NOT NULL AUTO_INCREMENT,
        groupKey INT NOT NULL,
        startTimeDate VARCHAR(45) NOT NULL,
        finishTimeDate VARCHAR(45) NOT NULL,
        meetingInfo VARCHAR(190) NOT NULL,
        meetingRoom VARCHAR(45) NOT NULL,
        PRIMARY KEY (meetingKey),
        FOREIGN KEY (groupKey) REFERENCES meetings.production(groupKey)
        );`
  dalMySQL.execute(SQLcommand)
}

export default {
  createProductionTable,
  createMeetingsTable,
}
