export function formatDate(isoString) {
  return new Date(isoString).toLocaleDateString("ko-KR", {
    timeZone: "Asia/Seoul", // 한국 시간 기준
  });
}
