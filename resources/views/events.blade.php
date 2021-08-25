@extends('parts.template')
@php($large_header = false)
@section('title', 'Page Title')

@section('content')
<?php
$guidedTitle = App\Http\Controllers\HomeController::getData('guided-tour-title');
$guidedDescription = App\Http\Controllers\HomeController::getData('guided-tour-description');
$guidedLink = App\Http\Controllers\HomeController::getData('guided-tour-link');

?>
<div id="guided_page">
    <a href="#" class="go-top">
        <img src="/img/up_to_top.svg" alt="">
    </a>
    <div class="my_container">
        @if($events)
        <div class="my_container">
            <div class="row">
                <div class="col-lg-12 text-center">
                    <h1 class="blue-text underline_title mt-5">{{__('site.events')}}</h1>
                </div><!-- /.col-lg-12  -->
            </div><!-- /.row -->
            @foreach($events as $key=>$event)
            <div class = "event-item @if($key%2==1) event-item-reverse @endif">
                <div class = "event-left">
                    <p class = "left">{{$event->description}}</p>
                </div>
                <div class = "event-right">
                    <img src = "{{ route('thumb', ['width:1920', $event->image]) }}" class = "full-width">
                </div>
            </div>
            @endforeach
        </div>
        @endif
        <div class="row">
            <div class="col-lg-12">
                <a href="/gallery">
                    <h1 class="text-center blue-text underline_title mt-5 pt-5 mai-scoatem-din-margina">{{__('site.photo-gallery')}}</h1>
                </a>

            </div>
        </div>
        @if($images)
        <div class = "swiper-images-container-da">
            <div class="swiper-container photo-swiper">
                <div class="swiper-wrapper">
                    @foreach($images as $image)
                    <div class="swiper-slide">
                        <a data-fancybox="gallery" href="{{ route('thumb', ['width:1920', $image]) }}">
                        <img src="{{ route('thumb', ['width:300', $image]) }}">
                        </a>
                    </div>
                    @endforeach
                </div>
            </div>
            <div class="swiper-button-next swiper-photo-next"></div>
            <div class="swiper-button-prev swiper-photo-prev"></div>
        </div>
        @endif
        <div class="row mt-5">
            <div class="col-md-12 text-center">
                <h1 class="blue-text mt-5 mb-5" style = "margin-bottom:20px!important">{{__('site.request-offer')}}</h1>
                <p class = "request-offer-text">{{__('site.request-contact')}}</p>
            </div><!-- /.col-md-12 -->
        </div><!-- /.row -->
        <form class = "send-request" action='{{ action("EventsController@request_event") }}' method="post">
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
                        <label for="city">{{__('site.person-number')}}</label>
                        <input type="text" class="form-control" name="persons">
                    </div>

                </div>
                <div class="col-lg-6">
                    <div class="form-group">
                        <label for="telefon">{{__('site.phone')}}</label>
                        <input type="number" class="form-control" name="phone">
                    </div>
                    <div class="form-group">
                        <label for="start_datepicker">{{__('site.date')}}</label>
                        <input type='text' class="form-control datepicker-here custom-datepicker"
                            name = "date" id="start_datepicker" data-position="bottom right" data-language='en' />
                    </div>
                    <div class="form-group">
                        <label for="telefon">{{__('site.bike-company')}}</label>
                        <input type="text" class="form-control" name="company">
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
    </div>
    <div class="my_container" style = "margin-bottom: 20px">
        <div class="row" id="info_container">
            <div class="col-lg-4 px-0">
                <div class="bg-blue py-3 h-100 d-flex flex-lg-column justify-content-around align-items-center"
                    id="info1" style="border-radius: 10px 0px 0px 10px;">
                    <img src="img/moto.svg" alt="" class="px-3">
                    <div class="info_descriere">{{__('site.information1')}}</div>
                </div>
            </div>
            <div class="col-lg-4 px-0">
                <div
                    class="bg-yellow py-3 h-100 d-flex flex-lg-column justify-content-between justify-content-lg-around align-items-center">
                    <img src="img/gps.svg" alt="" class="px-3">
                    <div class="info_descriere blue-text ">{{__('site.information2')}}</div>
                </div>
            </div>
            <div class="col-lg-4 px-0">
                <div class="bg-blue py-3 h-100 d-flex flex-lg-column justify-content-around align-items-center"
                    id="info3" style="border-radius: 0px 10px 10px 0px;">
                    <img src="img/phone.svg" alt="" class="px-3">
                    <div class="info_descriere">{{__('site.information3')}}</div>
                </div>
            </div>
        </div> <!-- end row-->
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
          url: '{{ action("EventsController@request_event") }}',
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
    var swiper = new Swiper('.swiper-container.photo-swiper', {
        slidesPerView: 2,
        spaceBetween: 20,
        navigation: {
            nextEl: '.swiper-photo-next',
            prevEl: '.swiper-photo-prev',
        },
        loop: true,
        centeredSlides: true,
        grabCursor: true,
        breakpoints: {
            1366: {
                slidesPerView: 5,
            },
            1024: {
                slidesPerView: 4,
            },
            768: {
                slidesPerView: 3,
            },
        }
    });
    $(document).ready(function () {
            $('.guided-video').each(function(index){
                $link =  $(this).attr('href');
                var video_id = $link.split('v=')[1];
                var ampersandPosition = video_id.indexOf('&');
                if(ampersandPosition != -1) {
                video_id = video_id.substring(0, ampersandPosition);
                }
                var thumbnail = "http://img.youtube.com/vi/"+video_id+"/hqdefault.jpg";
                $(this).find('.guided-image').attr('src',thumbnail);
            });
    })
</script>
<script>
    var swiper = new Swiper('.swiper-container.pop_tours_swiper', {
        slidesPerView: 1,
        spaceBetween: 30,
        slidesPerGroup: 1,
        loop: false,
        navigation: {
            nextEl: '.swiper-button-next-pop',
            prevEl: '.swiper-button-prev-pop',
        },
    });
    var swiper2 = new Swiper('.swiper-container.rec_tours_swiper', {
        slidesPerView: 1,
        spaceBetween: 30,
        slidesPerGroup: 1,
        loop: false,
        navigation: {
            nextEl: '.swiper-button-next-rec',
            prevEl: '.swiper-button-prev-rec',
        },
    });
    $('#start_datepicker').datepicker({
        language: 'en',
        autoClose: 'true'
    })
    $('#end_datepicker').datepicker({
        language: 'en',
        autoClose: 'true'
    })
</script>
@endpush