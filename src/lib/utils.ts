export function UUID() {
  let dt = new Date().getTime();
  const uuid = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
    /[xy]/g,
    function (c) {
      const r = (dt + Math.random() * 16) % 16 | 0;
      dt = Math.floor(dt / 16);
      return (c === "x" ? r : (r & 0x3) | 0x8).toString(16);
    }
  );
  return uuid;
}
export function timeAgo(timeString: string) {
  const currentTime = new Date();
  const time = new Date(timeString);
  const timeDiff = Math.abs(currentTime - time);
  const seconds = Math.floor(timeDiff / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(seconds / 3600);
  const days = Math.floor(seconds / (3600 * 24));

  if (seconds < 60) {
    return `few seconds ago`;
  } else if (minutes < 60) {
    return `${minutes} minute${minutes === 1 ? "" : "s"} ago`;
  } else if (hours < 24) {
    return `${hours} hour${hours === 1 ? "" : "s"} ago`;
  } else if (days < 7) {
    return `${days} day${days === 1 ? "" : "s"} ago`;
  } else {
    return time.toLocaleDateString(); // Show full date if older than a week
  }
}
