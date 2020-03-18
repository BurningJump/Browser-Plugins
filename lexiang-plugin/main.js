
  setTimeout(function () {
    function playVideo() {
      let video = document.getElementsByTagName('video')
      if (!video) return
      if (video.length === 1) {
        video[0].muted = true
        if (video[0].ended) {
          //视频播放完
          return
        }
        if (video[0].paused) {
          document.getElementsByClassName('vjs-button-icon')[0].click()
        }
      }
    }
    function finishCheck() {
      let status = document.getElementsByClassName('status')
      let classArr = document.getElementsByClassName('v-align-middle name single-line')
      let classNum = classArr.length
      let isFinished = false
      if (status && status.length > 0 && status.length === classNum) {
        isFinished = true
      }
      if (isFinished) {
        clearInterval(t1)
        alert('本课程已学完！')
        return
      }
      playVideo()
      let countdown = document.getElementsByClassName('clock clock-fixed')[0]
      if (countdown) {
        if (countdown.innerText.indexOf('下一课') > -1) {
          for (let i = 0; i < classNum; i++) {
            if (!status[i] || status[i].innerText.indexOf('已学') < 0) {
              classArr[i].click()
              break
            }
          }
        } else if (countdown.innerText.indexOf('已学完本课程') > -1) {
          clearInterval(t1)
          alert('本课程已学完！')
        }
      }
    }
    var t1 = setInterval(finishCheck, 1000);
  }, 500)
