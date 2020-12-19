
/***********************************************
  3.4.6.2
  setImmediate, nextTick, setTimeout 의 우선순위
  이벤트 루프에서 nextTick를 우선으로 실행시킨다.
************************************************/
setImmediate(() => {
  console.log('immediate');
});
process.nextTick(() => {
  console.log('nextTick');
});
setTimeout(() => {
  console.log('timeout');
});