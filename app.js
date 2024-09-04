window._wq = window._wq || [];
_wq.push({
  id: "lu63no3obg",
  onReady: function(video) {
    video.bind("timechange", function(t) {
      if (t >= 10) {
        document.getElementById("CTA-Button").style.display = "block";
      }
    });
  }
});