export function isPollOngoing(beginDate: string, endDate: string) {
  const beginDateTimestamp = new Date(beginDate).getTime();
  const endDateTimestamp = new Date(endDate).getTime();
  const now = new Date().getTime();

  return (beginDateTimestamp <= now && now <= endDateTimestamp);
}

export function isPollUpcoming(beginDate: string) {
  const beginDateTimestamp = new Date(beginDate).getTime();
  const now = new Date().getTime();
  console.log(beginDateTimestamp > now)

  return beginDateTimestamp > now;
}

export function isEndAfterBegining(beginDate: string, endDate: string) {
  return new Date(beginDate).getTime() > new Date(endDate).getTime()
}
