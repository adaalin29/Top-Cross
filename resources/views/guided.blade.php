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

        <div class="row">
            <div class="col-md-12 text-center">
                <h1 class="blue-text underline_title mt-5">{{__('site.guided-tours')}}</h1>
            </div><!-- /.col-md-12 -->
        </div><!-- /.row -->


        <div class="row mb-3" id="video_with_text">
            <div class="col-lg-7 pr-0 h-100">
                <a class = "guided-video" data-fancybox href="{{$guidedLink->text}}">
                    <img class = "guided-image" src="https://img.youtube.com/vi/N5t0N6vfXIc/0.jpg" class="img-fluid video-home" />
                    <img src="/img/play.svg" alt="" class="play">
                </a>
            </div><!-- end col-md-7-->
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
            <div class="col-lg-5 pl-0 pr-0 h-100">
                <div class="blue_background">
                    <div class="yellow_title mb-5">{{$guidedTitle->text}}</div>
                    <p class="text-white mb-xl-5 mb-lg-4">{!!str_replace("\n","<br>",$guidedDescription->text)!!}</p>
                    <a href="/guided" class="yellow_border_btn">View the tours</a>
                </div>


            </div><!-- end col-md-5-->
        </div> <!-- end row-->

        <div class="row" id="rec_tours_title">
            {{--  <div class="col-md-12 text-center">
                <h1 class="blue-text mt-5 underline_title">{{__('site.recomanded-tours')}}</h1>
            </div><!-- /.col-md-12 -->  --}}
        </div><!-- /.row -->
        {{--  @if($recomandedTrips)
            <div class = "guided-container">
                @foreach($recomandedTrips as $trip)
                <div class="col-md-4 poza">
                    <img src="{{ route('thumb', ['width:700', $trip->sortedImages[0]]) }}"  alt=""/>
                    <div class="div_holder">
                        <a href="/guided-details/{{$trip->slug}}" class="tour-description">{{$trip->name}}</a>
                    </div>
                </div><!-- /.col-md-4 -->
                @endforeach
            </div>
        @endif  --}}
        
        {{--  @if($recomandedTrips)
        <div class="swiper-container rec_tours_swiper">
            <div class="swiper-wrapper">
                @foreach($recomandedTrips as $trip)
                <div class="col-md-4 poza">
                    <img src="{{ route('thumb', ['width:700', $trip->sortedImages[0]]) }}"  alt=""/>
                    <div class="div_holder">
                        <a href="/guided-details/{{$trip->slug}}" class="tour-description">{{$trip->name}}</a>
                    </div>
                </div><!-- /.col-md-4 -->
                @endforeach
            </div>
            <div class="swiper-button-next swiper-button-next-rec"></div>
            <div class="swiper-button-prev swiper-button-prev-rec"></div>
        </div>
        @endif  --}}
        @if($trips)
        <div class="row mt-5" id="pop_tours_title">
            <div class="col-md-12 text-center">
                <h1 class="blue-text underline_title mt-5">{{__('site.popular-trips')}}</h1>
            </div><!-- /.col-md-12 -->
        </div><!-- /.row -->
        <div class = "guided-container">
            @foreach($trips as $trip)
            <div class="col-md-4 poza">
                <img src="{{ route('thumb', ['width:700', $trip->sortedImages[0]]) }}"  alt=""/>
                <div class="div_holder">
                    <a href="/guided-details/{{$trip->slug}}" class="tour-description">{{$trip->name}}</a>
                </div>
            </div><!-- /.col-md-4 -->
            @endforeach
        </div>
        @endif

        
        @if($trips)
        <div class="swiper-container pop_tours_swiper">
            <div class="swiper-wrapper">

                @foreach($trips as $trip)
                <div class="swiper-slide">
                    <div class = "col-md-4 poza swiper-slide-poza">
                        <img src="{{ route('thumb', ['width:700', $trip->sortedImages[0]]) }}"  alt=""/>
                        <div class="div_holder">
                            <a href="/guided-details/{{$trip->slug}}" class="tour-description">{{$trip->name}}</a>
                        </div>
                    </div>
                </div><!-- /.col-md-4 -->
                @endforeach
                
            </div>
            <div class="swiper-button-next swiper-button-next-pop"></div>
            <div class="swiper-button-prev swiper-button-prev-pop"></div>
        </div>
        @endif

        <div class="row mt-5">
            <div class="col-md-12 text-center">
                <h1 class="blue-text mt-5 mb-5">{{__('site.interested')}}</h1>
            </div><!-- /.col-md-12 -->
        </div><!-- /.row -->
        <form class = "send-request send-request-margin" action='{{ action("CourseController@send_request") }}' method="post">
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
                        <input type="number" class="form-control" name="phone">
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
                            {{--  @foreach($recomandedTrips as $trip)
                            <option value = {{$trip->name}}>{{$trip->name}}</option>
                            @endforeach  --}}
                            @foreach($trips as $trip)
                            <option value = {{$trip->name}}>{{$trip->name}}</option>
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
        slidesPerView: 2,
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