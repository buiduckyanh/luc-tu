const images = [
  {
    src: "00.JPEG",
    title: "mute.mp3",
    caption: "mute.mp3",
    details: "Details 00a",
  },
  {
    src: "01.JPEG",
    title: "01.mp3",
    caption: "01-cap.mp3",
    details: "Details 1",
  },
  {
    src: "02.JPEG",
    title: "02.mp3",
    caption: "02-cap.mp3",
    details: "Details 2",
  },
  {
    src: "03.JPEG",
    title: "03.mp3",
    caption: "03-cap.mp3",
    details: "Details 3",
  },
  {
    src: "04.JPEG",
    title: "04.mp3",
    caption: "04-cap.mp3",
    details: "Details 4",
  },
  {
    src: "05.JPEG",
    title: "05.mp3",
    caption: "mute.mp3",
    details: "Details 5",
  },
  {
    src: "06.JPEG",
    title: "06.mp3",
    caption: "06-cap.mp3",
    details: "Details 6a",
  },
  {
    src: "07.JPEG",
    title: "07.mp3",
    caption: "07-cap.mp3",
    details: "Details 7a",
  },
  {
    src: "08.JPEG",
    title: "08.mp3",
    caption: "08-cap.mp3",
    details: "Details 8",
  },
  {
    src: "09.JPEG",
    title: "09.mp3",
    caption: "09-cap.mp3",
    details: "Details 9",
  },
  {
    src: "10.JPEG",
    title: "10.mp3",
    caption: "10-cap.mp3",
    details: "Details 10",
  },
  {
    src: "11.JPEG",
    title: "11.mp3",
    caption: "11-cap.mp3",
    details: "Details 11",
  },
  {
    src: "12.JPEG",
    title: "12.mp3",
    caption: "12-cap.mp3",
    details: "Details 12",
  },
  {
    src: "13.JPEG",
    title: "13.mp3",
    caption: "13-cap.mp3",
    details: "Details 13",
  },
  {
    src: "14a.JPEG",
    title: "14a.mp3",
    caption: "14a-cap.mp3",
    details: "Details 14",
  },
  {
    src: "14b.JPEG",
    title: "14b.mp3",
    caption: "14b-cap.mp3",
    details: "Details 14",
  },
  {
    src: "14c.JPEG",
    title: "14c.mp3",
    caption: "14c-cap.mp3",
    details: "Details 14",
  },
  {
    src: "15.JPEG",
    title: "15.mp3",
    caption: "15-cap.mp3",
    details: "Details 15",
  },
  {
    src: "16.JPEG",
    title: "16.mp3",
    caption: "16-cap.mp3",
    details: "Details 16",
  },
  {
    src: "17.JPEG",
    title: "17.mp3",
    caption: "17-cap.mp3",
    details: "Details 17",
  },
  {
    src: "18.JPEG",
    title: "18.mp3",
    caption: "18-cap.mp3",
    details: "Details 18",
  },
  {
    src: "19.JPEG",
    title: "19.mp3",
    caption: "19-cap.mp3",
    details: "Details 19",
  },
  {
    src: "20a.JPEG",
    title: "20a.mp3",
    caption: "20a-cap.mp3",
    details: "Details 20",
  },
  {
    src: "20b.JPEG",
    title: "20b.mp3",
    caption: "20b-cap.mp3",
    details: "Details 20",
  },
  {
    src: "20c.JPEG",
    title: "20c.mp3",
    caption: "20c-cap.mp3",
    details: "Details 20",
  },
  {
    src: "21.JPEG",
    title: "21.mp3",
    caption: "21-cap.mp3",
    details: "Details 21",
  },
  {
    src: "22.JPEG",
    title: "22.mp3",
    caption: "22-cap.mp3",
    details: "Details 22",
  },
  {
    src: "23.JPEG",
    title: "23.mp3",
    caption: "23-cap.mp3",
    details: "Details 23",
  },
  {
    src: "24.JPEG",
    title: "24.mp3",
    caption: "24-cap.mp3",
    details: "Details 24",
  },
  {
    src: "25.JPEG",
    title: "25.mp3",
    caption: "25-cap.mp3",
    details: "Details 25",
  },
  {
    src: "26.JPEG",
    title: "26.mp3",
    caption: "26-cap.mp3",
    details: "Details 26",
  },
  {
    src: "27.JPEG",
    title: "27.mp3",
    caption: "27-cap.mp3",
    details: "Details 27",
  },
  {
    src: "28.JPEG",
    title: "28.mp3",
    caption: "28-cap.mp3",
    details: "Details 28",
  },
  {
    src: "29.JPEG",
    title: "29.mp3",
    caption: "29-cap.mp3",
    details: "Details 29",
  },
  {
    src: "30.JPEG",
    title: "30.mp3",
    caption: "30-cap.mp3",
    details: "Details 30",
  },
  {
    src: "31.JPEG",
    title: "31.mp3",
    caption: "31-cap.mp3",
    details: "Details 31",
  },
  {
    src: "00.JPEG",
    title: "00.mp3",
    caption: "00.mp3",
    details: "Details 00",
  },
];

document.addEventListener("DOMContentLoaded", function () {
  let currentIndex = 0;
  let currentTitleAudio = null;
  let currentCaptionAudio = null;
  let captionRepeatTimeout = null;
  let titleNextPlayTimeout = null;
  let firstTimeRunning = true;

  function clearCaptionRepeatTimeout() {
    // Hủy bất kỳ lệnh setTimeout nào đang tồn tại
    if (captionRepeatTimeout) {
      console.log("clear caption Repeat Timeout");
      clearTimeout(captionRepeatTimeout);
      captionRepeatTimeout = null;
    }
    if (titleNextPlayTimeout) {
      console.log("clear caption Repeat Timeout");
      clearTimeout(titleNextPlayTimeout);
      titleNextPlayTimeout = null;
    }
  }

  function updateImage(index) {
    // Dừng âm thanh hiện tại nếu có
    clearCaptionRepeatTimeout();
    if (currentCaptionAudio) {
      currentCaptionAudio.pause();
      currentCaptionAudio.currentTime = 0; // Quay lại đầu file âm thanh
    }
    // Load du lieu cua tam hinh hien tai
    const image = images[index];
    document.getElementById("current-image").src = "/res/images/" + image.src;
    playAudio("/res/audios/" + image.title, "/res/audios/" + image.caption);
  }

  function playAudio(titleAudioSrc, captionAudioSrc) {
    // Dừng và đặt lại các âm thanh hiện tại nếu chúng đang phát
    if (currentTitleAudio) {
      currentTitleAudio.pause();
      currentTitleAudio.currentTime = 0;
    }

    if (currentCaptionAudio) {
      currentCaptionAudio.pause();
      currentCaptionAudio.currentTime = 0;
    }

    clearCaptionRepeatTimeout();

    let titleAudioIsNull = false;
    let captionAudioIsNull = false;

    currentTitleAudio = new Audio(titleAudioSrc);
    currentCaptionAudio = new Audio(captionAudioSrc);

    currentTitleAudio.onerror = (e) => {
      titleAudioIsNull = true;
      console.error("Failed to load title audio: ", titleAudioSrc, e);
      currentTitleAudio = new Audio("/res/audios/mute.mp3");
    };
    currentCaptionAudio.onerror = (e) => {
      captionAudioIsNull = true;
      console.error("Failed to load caption audio: ", captionAudioSrc, e);
      currentCaptionAudio = new Audio("/res/audios/mute.mp3");
    };

    let delayAfterTitle = 1000;
    let delayBetweenCaptions = 500;

    if (!firstTimeRunning) {
      if (!titleAudioIsNull) currentTitleAudio.play();
      if (!captionAudioIsNull)
        currentTitleAudio.onended = () => {
          titleNextPlayTimeout = setTimeout(() => {
            playCaptionInLoop(delayBetweenCaptions);
          }, delayAfterTitle);
        };
    }
    else firstTimeRunning = false;
  }

  function playCaptionInLoop(delayBetweenCaptions) {
    currentCaptionAudio.play();
    currentCaptionAudio.onended = () => {
      captionRepeatTimeout = setTimeout(() => {
        currentCaptionAudio.currentTime = 0;
        currentCaptionAudio.play();
      }, delayBetweenCaptions);
    };
  }

  // Các hàm playAudio và playCaptionInLoop sẽ lấy giá trị từ các span thay vì input

  document.getElementById("prev-button").addEventListener("click", function () {
    if (currentIndex > 0) {
      currentIndex--;
      updateImage(currentIndex);
    }
  });

  document.getElementById("next-button").addEventListener("click", function () {
    if (currentIndex < images.length - 1) {
      currentIndex++;
      updateImage(currentIndex);
    }
  });

  document
    .getElementById("image-container")
    .addEventListener("click", function () {
      if (currentIndex < images.length - 1) {
        currentIndex++;
        updateImage(currentIndex);
      }
    });

  document
    .getElementById("play-pause-button")
    .addEventListener("click", function () {
      if (currentCaptionAudio && currentCaptionAudio.paused) {
        currentCaptionAudio.play();
      } else if (currentCaptionAudio && !currentCaptionAudio.paused) {
        currentCaptionAudio.pause();
        currentCaptionAudio.currentTime = 0;
        clearCaptionRepeatTimeout();
      }
    });

  updateImage(0);
});
