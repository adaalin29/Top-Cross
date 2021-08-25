@extends('parts.template')
@php($large_header = false)
@section('title', 'Page Title')

@section('content')
<div id="offroad_details_page">
    <a href="#" class="go-top">
        <img src="/img/up_to_top.svg" alt="">
    </a>
    <div class="my_container">
        <div class="row" id="introduction">
            <div class="col-md-12 text-center">
                <h1 class="blue-text underline_title mt-5">{{$course->name}}</h1>
            </div><!-- /.col-md-12 -->
        </div><!-- /.row -->
        <div class="row">
            <div class="col-md-3"></div>
            <div class="col-md-6 text-center">
                <p>{!!str_replace("\n","<br>",$course->short_description)!!}</p>
            </div>
            <div class="col-md-3"></div>
        </div>

        <div class="row align-items-center mt-5 left-right">
            <div class="col-lg-6">
                <img src="{{ route('thumb', ['width:700', $course->image1]) }}" alt="" class="img-fluid">
            </div>
            <div class="col-lg-6 pl-3 pl-lg-5">
                <p class="mb-5  mt-3 mt-lg-0">{!!str_replace("\n","<br>",$course->description1)!!}</p>

            </div>
        </div>
        @if($course->image2 && $course->description2)
        <div class="row align-items-center mt-5 left-right inversam-elemente-mobil">
            <div class="col-lg-6 pr-3 pr-lg-5 text-left text-lg-right right-text">
                <p class="mb-5  mt-3 mt-lg-0">{!!str_replace("\n","<br>",$course->description2)!!} </p>

            </div>
            <div class="col-lg-6">
                <img src="{{ route('thumb', ['width:700', $course->image2]) }}" alt="" class="img-fluid left-img">
            </div>
        </div>
        @endif
        @if($course->file)
            <a href = "{{asset('storage/'.$course->file)}}" class = "more-informations">{{__('site.more-informations')}}<a>
        @endif
        @if(count($images)>0)
        <div class="row">
            <div class="col-lg-12">
                <h1 class="text-center blue-text underline_title mt-5 pt-5">{{__('site.photo-gallery')}}</h1>
            </div>
        </div>

        <div class = "swiper-images-container-da">
            <div class="swiper-container photo-swiper">
                <div class="swiper-wrapper">
                    @foreach($images[0] as $image)
                    <div class="swiper-slide">
                        <a data-fancybox="gallery" href="{{ route('thumb', ['width:300', $image]) }}">
                            <img src="{{ route('thumb', ['width:1920', $image]) }}">
                        </a>
                    </div>
                    @endforeach
                </div>
            </div>
            <div class="swiper-button-next swiper-photo-next"></div>
            <div class="swiper-button-prev swiper-photo-prev"></div>
        </div>
        @endif
        @if(count($videos)>0)
        <div class="row">
            <div class="col-lg-12">
                <h1 class="text-center blue-text underline_title mt-5 pt-5">{{__('site.video-gallery')}}</h1>
            </div>
        </div>
        <div class = "swiper-images-container-da">
            <div class="swiper-container video-swiper">
                <div class="swiper-wrapper">
                    @foreach($videos as $video)
                    <div class="swiper-slide">
                        <a class = "video-item" data-fancybox href="{{$video}}">
                            <img class = "video-image" src="https://img.youtube.com/vi/N5t0N6vfXIc/0.jpg" />
                            <img src="/img/play.svg" alt="" class="play">
                        </a>
                    </div>
                    @endforeach
                </div>
            </div>
            <div class="swiper-button-next swiper-video-next"></div>
            <div class="swiper-button-prev swiper-video-prev"></div>
        </div>
        @endif
        <!-- Modal -->
        <div class="modal fade" id="videoModal1" tabindex="-1" role="dialog" aria-labelledby="videoModal"
            aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <iframe src="https://www.youtube.com/embed/N5t0N6vfXIc" frameborder="0"></iframe>
                    </div>

                </div>
            </div>
        </div>
        <div class="modal fade" id="videoModal2" tabindex="-1" role="dialog" aria-labelledby="videoModal"
            aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <iframe src="https://www.youtube.com/embed/N5t0N6vfXIc" frameborder="0"></iframe>
                    </div>

                </div>
            </div>
        </div>
        <div class="row mt-5">
            <div class="col-md-12 text-center">
                <h1 class="blue-text mt-5 mb-5">{{__('site.interested')}}</h1>
            </div><!-- /.col-md-12 -->
        </div><!-- /.row -->
        <form class = "send-request" action='{{ action("CourseController@send_request") }}' method="post">
            {{ csrf_field() }}
            <div class="row">
                <div class="col-lg-6">
                    <div class="form-group">
                        <label for="nume">{{__('site.name')}}</label>
                        <input type="text" class="form-control" name="name">
                    </div>
                    <div class="form-group">
                        <label for="email">Email</label>
                        <input type="email" class="form-control" name="email">
                    </div>
                    <div class="form-group">
                        <label for="city">{{__('site.area')}}</label>
                        <input type="text" class="form-control" name="city">
                    </div>

                </div>
                <div class="col-lg-6">
                    <div class="form-group">
                        <label for="telefon">{{__('site.phone')}}</label>
                        <input type="text" class="form-control" name="phone">
                    </div>
                    <div class="row">
                        <div class="col-lg-6">
                            <div class="form-group">
                                <label for="start_datepicker">{{__('site.startind-date')}}</label>
                                <input type='text' class="form-control datepicker-here custom-datepicker"
                                    name = "start_date" id="start_datepicker" data-position="bottom right" data-language='en' />
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="form-group">
                                <label for="end_datepicker">{{__('site.ending-date')}}</label>

                                <input type='text' class="form-control datepicker-here custom-datepicker"
                                name = "end_date" id="end_datepicker" data-position="bottom right" data-language='en' />
                            </div>
                        </div>
                    </div><!-- end row-->
                    <div class="form-group">
                        <label for="tour_type">{{__('site.tour-type')}}</label>
                        <select class="form-control" name="tour_type">
                            @foreach($tourCourses as $course)
                            <option value = {{$course->name}}>{{$course->name}}</option>
                            @endforeach
                        </select>
                    </div>


                </div> <!-- end col-lg-6-->
            </div> <!-- end row-->
            <div class="row">
                <div class="col-lg-12">
                    <div class="form-group">
                        <label for="mesaj">{{__('site.message')}}</label>
                        <textarea class="form-control" name="message" rows="3"></textarea>
                    </div>
                </div>
            </div>
            <div class="row mt-5">
                <div class="col-lg-8">
                    <div class="d-block">
                        <input type="checkbox" name="terms" class="rounded-checkbox" />
                        <p class="mb-0 form-acord">{{__('site.agree')}}<a href="/policy">{{__('site.footer-privacy')}}</a></p>
                    </div> <!-- end div d-block -->
                </div> <!-- end col-md-6 -->
                <div class="col-lg-4">
                    <button class="blue_border_btn float-xl-right float-lg-left mb-5 send-request-button">{{__('site.send-message')}}</button>
                </div> <!-- end col-md-6 -->
            </div> <!-- end row -->
        </form>
        @if(count($courses)>0)
        <div class="row mt-5">
            <div class="col-md-12 text-center">
                <h1 class="blue-text underline_title">{{__('site.other')}}</h1>
            </div><!-- /.col-md-12 -->
        </div><!-- /.row -->
        <div class="row" id="other_tours">
            @foreach($courses as $course)
            <div class="col-md-4 poza">
                <img src="{{ route('thumb', ['width:700', $course->image1]) }}" alt="image1" />
                <div class="div_holder">
                    <a href="/course-detail/{{$course->slug}}" class="tour-description">{{$course->name}}</a>
                </div>
            </div><!-- /.col-md-4 -->
            @endforeach

        </div><!-- /.row -->
        <div class="swiper-container other_tours_swiper">
            <div class="swiper-wrapper">
                @foreach($courses as $course)
                <div class="swiper-slide">
                    <img src="{{ route('thumb', ['width:700', $course->image1]) }}" class="img-fluid" alt="" />
                    <div class="div_holder">
                        <a href="/course-detail/{{$course->slug}}" class="tour-description">{{$course->name}}</a>
                    </div>
                </div>
                @endforeach
            </div>
            <div class="swiper-button-next swiper-button-next-other"></div>
            <div class="swiper-button-prev swiper-button-prev-other"></div>
        </div>
        @endif
    </div>
</div>
@endsection

@push('scripts')
<script>
    Notiflix.Block.Init({messageColor:"#ffffff",backgroundColor:"rgba(0,0,0,0.715)",svgColor:"#ffffff",});
    document.addEventListener("DOMContentLoaded", function () {
      $.ajaxSetup({
  
        headers: {
          'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content'),
        }
      });
      var $formContact = $('.send-request');
      $('.send-request-button').on('click', function (event) {
        event.preventDefault();
        $.ajax({
          method: 'POST',
          url: '{{ action("CourseController@send_request") }}',
          data: $formContact.serializeArray(),
          context: this,
          async: true,
          cache: false,
          dataType: 'json'
        }).done(function (res) {
          console.log(res);
          if (res.success == true) {
            Notiflix.Notify.Success(res.successMessage);
            setTimeout(function () {
              window.location.reload();
            
            }, 1500);
          } else {
            var eroare = res.error;
          for (var i = 0; i < eroare.length; i++) {
            eroare[i] = eroare[i] + "\n";
            Notiflix.Notify.Failure(eroare[i]);
          }
          }
        });
        return;
      });
  
    });
</script>
<script>
$(document).ready(function () {
        $('.video-item').each(function(index){
            $link =  $(this).attr('href');
            var video_id = $link.split('v=')[1];
            var ampersandPosition = video_id.indexOf('&');
            if(ampersandPosition != -1) {
            video_id = video_id.substring(0, ampersandPosition);
            }
            var thumbnail = "http://img.youtube.com/vi/"+video_id+"/hqdefault.jpg";
            $(this).find('.video-image').attr('src',thumbnail);
        });
})
</script>

<script>
    var swiper = new Swiper('.swiper-container.photo-swiper', {
        slidesPerView: 2,
        spaceBetween: 20,
        loop: true,
        centeredSlides: true,
        grabCursor: true,
        navigation: {
            nextEl: '.swiper-photo-next',
            prevEl: '.swiper-photo-prev',
        },
        breakpoints: {
            1366: {
                slidesPerView: 5,
            },
            1024: {
                slidesPerView: 4,
            },
            768: {
                slidesPerView: 2,
            },
        }
    });
    var swiper2 = new Swiper('.swiper-container.video-swiper', {
        slidesPerView: 1,
        spaceBetween: 20,
        navigation: {
            nextEl: '.swiper-video-next',
            prevEl: '.swiper-video-prev',
        },
        // loop: true,
        grabCursor: true,
        breakpoints: {

            1024: {
                slidesPerView: 3,
                centeredSlides: false,

            },
            768: {
                slidesPerView: 2,

            },
            480: {
                slidesPerView: 2,
            },
        }
    });
    var swiper3 = new Swiper('.swiper-container.other_tours_swiper', {
        slidesPerView: 1,
        spaceBetween: 30,
        slidesPerGroup: 1,
        loop: false,
        navigation: {
            nextEl: '.swiper-button-next-other',
            prevEl: '.swiper-button-prev-other',
        },
    });
</script>
@endpush