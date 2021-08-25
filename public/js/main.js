function openRightNav() {
  document.getElementById("nav-right").style.width = "80%";
  document.getElementById("header_msg").style.display = "none";
}

function closeRightNav() {
  document.getElementById("nav-right").style.width = "0%";
  document.getElementById("header_msg").style.display = "block";
  document
    .getElementById("header_msg")
    .classList.add(
      "animate__animated",
      "animate__slideInLeft",
      "animate__slow"
    );
}

function openLeftNav() {
  document.getElementById("nav-left").style.width = "80%";
  document.getElementById("header_msg").style.display = "none";
}

function closeLeftNav() {
  document.getElementById("nav-left").style.width = "0%";
  document.getElementById("header_msg").style.display = "block";
  document
    .getElementById("header_msg")
    .classList.add("animate__animated", "animate__slideInRight");
}
$(document).ready(function () {
  if (screen.width < 992) {
    $("#mesaj").attr("rows", "1");
    $("#reg_com").attr("rows", "1");
    // $(".left-img").insertBefore(".right-text");
    $(".before").insertBefore(".after");
  }

  var offset = 1000;

  var duration = 500;

  $(window).scroll(function () {
    if ($(this).scrollTop() > offset) {
      $(".go-top").fadeIn(duration);
    } else {
      $(".go-top").fadeOut(duration);
    }
  });

  // Scroll to top when button is clicked.
  $(".go-top").click(function (event) {
    event.preventDefault();
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      duration
    );
    return false;
  });
});

function show_video(video_id)
{
    $.ajax({
      url: "/show_video",
      type: "POST",
      data: {
        video_id: video_id,
      },
      headers: {
        "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr("content"),
      },
      success: function (resp) {
        if (resp.code == 200) {
         $('#videoModal1').modal('show');
         $('#response_video').empty();
         var link = resp.link;
         var html = '';
         html += '<iframe src="'+ link +'" frameborder="0"></iframe>';
         $('#response_video').append(html);
        }
      },
      error: function (p1, p2) {
        alertify.error(p1.responseJSON.message);
      },
    });
}