@extends('parts.template')
@php($large_header = false)
@section('title', 'Page Title')

@section('content')
<div id="guided_details_page">
    <a href="#" class="go-top">
        <img src="/img/up_to_top.svg" alt="">
    </a>
    <div class="my_container" id="introduction">
        <div class="row">
            <div class="col-lg-12">
                <h1 class="text-center blue-text underline_title mt-5">{{$trip->name}}</h1>
            </div>
        </div>
        <div class="row">
            <div class="col-lg-3"></div>
            <div class="col-lg-6">
                <p class="text-center">{!!str_replace("\n","<br>",$trip->short_description)!!}</div>
            <div class="col-lg-3"></div>
        </div>
        <div class="row mt-5 mb-5">
            <div class="col-lg-2"></div>
            <div class="col-lg-8">
                <div class="d-flex justify-content-between">
                    <div class="tour_detail">
                        <h1>{{$trip->distance}}</h1>
                        <p>{{__('site.distance')}}</p>
                    </div>
                    <div class="tour_detail">
                        <h1>{{$trip->dificulty}}/5</h1>
                        <p>{{__('site.dificulty')}}</p>
                    </div>
                    <div class="tour_detail">
                        <h1>{{$trip->days}}</h1>
                        <p>{{__('site.days')}}</p>
                    </div>
                    <div class="tour_detail">
                        <h1>{{$trip->mini_group}}</h1>
                        <p>{{__('site.mini')}}</p>
                    </div>
                </div>
            </div>
            <div class="col-lg-2"></div>
        </div>
    </div>
    <div class="full_image overflow-hidden mb-5 mb-lg-0">
        @if($trip->map)
            <iframe src="{{$trip->map}}" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
        @endif
        <img src="{{ route('thumb', ['width:1920', $trip->map]) }}" alt="" class="img-fluid">
      
        <div class="my_container">
            {{--  <div class="row mt-0 mt-lg-5">
                <div class="col-lg-6 pr8">
                    <h1 class="blue-text">{{$trip->title1}}</h1>
                    <p>{!!str_replace("\n","<br>",$trip->description1)!!}</p>
                </div>
                <div class="col-lg-6 pr8">
                    <h1 class="blue-text">{{$trip->title2}}</h1>
                    <p>{!!str_replace("\n","<br>",$trip->description2)!!}</p>

                </div>
            </div>
            <div class="row mt-0 mt-lg-5">
                <div class="col-lg-6 pr8">
                    <h1 class="blue-text">{{$trip->title3}}</h1>
                    <p>{!!str_replace("\n","<br>",$trip->description3)!!}</p>
                </div>
                <div class="col-lg-6 pr8">
                    <h1 class="blue-text">{{$trip->title4}}</h1>
                    <p>{!!str_replace("\n","<br>",$trip->description4)!!}</p>

                </div>  --}}
                <div class = "trip-description">
                    {!!$trip->description!!}
                </div>

                @if($trip->file)
                    <a href = "{{asset('storage/'.$trip->file)}}" class = "more-informations" style = "margin-bottom:20px;">{{__('site.more-informations')}}<a>
                @endif
           @if(count($trip->sortedImages))
            <div class="swiper-container photo-swiper">
                <div class="swiper-wrapper">
                    @foreach($trip->sortedImages as $image)
                    <div class="swiper-slide">
                        <a data-fancybox="gallery" href="{{ route('thumb', ['width:1920', $image]) }}">
                            <img src="{{ route('thumb', ['width:400', $image]) }}">
                        </a>
                    </div>
                    @endforeach
                </div>
            </div>
           @endif

           @if(count($videos))
            <div class="row">
                <div class="col-lg-12">
                    <h1 class="text-center blue-text underline_title mt-5 pt-5">{{__('site.video-gallery')}}</h1>
                </div>
            </div>

            <div class="swiper-container video-swiper">
                <div class="swiper-wrapper">
                    @foreach($videos as $video)
                    <div class="swiper-slide">
                        <a class = "trip-video" data-fancybox href="{{$video}}">
                            <img class = "trip-image" src="https://img.youtube.com/vi/N5t0N6vfXIc/0.jpg" />
                            <img src="/img/play.svg" alt="" class="play">
                        </a>
                    </div>
                    @endforeach
                </div>
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
                                @foreach($formTrips as $trip)
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
            <div class="row mt-5">
                <div class="col-lg-12 text-center">
                    <h1 class="blue-text underline_title">{{__('site.other-tours')}}</h1>
                </div><!-- /.col-lg-12 -->
            </div><!-- /.row -->
            @if($otherTrips)
            <div class="row" id="other_tours">
                @foreach($otherTrips as $trip)
                <div class="col-md-4 poza">
                    <img src="{{ route('thumb', ['width:700', $trip->sortedImages[0]]) }}"  alt=""/>
                    <div class="div_holder">
                        <a href="/guided-details/{{$trip->slug}}" class="tour-description">{{$trip->name}}</a>
                    </div>
                </div><!-- /.col-md-4 -->
                @endforeach
                
            </div><!-- /.row -->
            @endif
            @if($otherTrips)
            <div class="swiper-container other_tours_swiper">
                <div class="swiper-wrapper">
                    @foreach($otherTrips as $trip)
                    <div class="swiper-slide">
                        <img src="{{ route('thumb', ['width:700', $trip->sortedImages[0]]) }}" class="img-fluid" alt="" />
                        <div class="div_holder">
                            <a href="/guided-details/{{$trip->slug}}" class="tour-description">{{$trip->name}}</a>
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
                $('.trip-video').each(function(index){
                    $link =  $(this).attr('href');
                    var video_id = $link.split('v=')[1];
                    var ampersandPosition = video_id.indexOf('&');
                    if(ampersandPosition != -1) {
                    video_id = video_id.substring(0, ampersandPosition);
                    }
                    var thumbnail = "http://img.youtube.com/vi/"+video_id+"/hqdefault.jpg";
                    $(this).find('.trip-image').attr('src',thumbnail);
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
                // 480:{
                //     slidesPerView: 2,
                // },

            }
        });
        var swiper2 = new Swiper('.swiper-container.video-swiper', {
            slidesPerView: 2,
            spaceBetween: 20,
            loop: true,
            centeredSlides: true,
            grabCursor: true,
            breakpoints: {

                1024: {
                    slidesPerView: 2,
                    centeredSlides: false,
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