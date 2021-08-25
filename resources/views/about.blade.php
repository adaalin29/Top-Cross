@extends('parts.template')
@php($large_header = false)
@section('title', 'Page Title')

@section('content')
<?php


$aboutTitle = App\Http\Controllers\HomeController::getData('about-title');
$aboutTitle1 = App\Http\Controllers\HomeController::getData('about-title1');
$aboutDescription1 = App\Http\Controllers\HomeController::getData('about-description1');
$aboutImage1 = App\Http\Controllers\HomeController::getData('about-image1');
$aboutDescription2 = App\Http\Controllers\HomeController::getData('about-description2');
$aboutImage2 = App\Http\Controllers\HomeController::getData('about-image2');
$aboutBold = App\Http\Controllers\HomeController::getData('about-bold');

?>
<div id="about_us_page">
    <a href="#" class="go-top">
        <img src="/img/up_to_top.svg" alt="">
    </a>
    <div class="my_container">

        <div class="row">
            <div class="col-lg-12 text-center">
                <h1 class="blue-text underline_title mt-5">{{$aboutTitle->text}}</h1>
            </div><!-- /.col-lg-12  -->
        </div><!-- /.row -->



        <div class="row mt-5 align-items-center">
            <div class="col-lg-5">
                <div class="box_holder text-left text-lg-right">
                    <h6 class="left">{{$aboutTitle1->text}}</h6>
                    <p class="left">{!!str_replace("\n","<br>",$aboutDescription1->text)!!}</p>
                </div><!-- /.box-holder -->
            </div><!-- /.col-lg-5 -->

            <div class="col-lg-1"></div>

            <div class="col-lg-5">
                <div class="image_holder">
                    <img src="{{ route('thumb', ['width:1920', $aboutImage1->images[0]]) }}" alt="" class="img-fluid" />
                </div><!-- /.image_holder -->
            </div><!-- /.col-lg-5 -->

            <div class="col-lg-1"></div>

        </div><!-- /.row -->
    </div><!-- /.container -->

    {{--  @if($testimonials)
    <section id="testimonials" class="mt-5">
        <div class="my_container">
            <div class="row">
                <div class="col-md-12 text-center">
                    <a href="/testimonials">
                        <h1 class="blue-text underline_title">{{__('site.testimonials')}}</h1>
                    </a>

                </div>
            </div>
            <div class="swiper-container testimoniale_swiper">
                <div class="swiper-wrapper">
                    @foreach($testimonials as $testimonial)
                    <div class="swiper-slide">
                        <div class="d-flex flex-column align-items-center">
                            <img src="{{ route('thumb', ['width:300', $testimonial->image]) }}" alt="">
                            <h5>{{$testimonial->name}}</h5>
                            <p>{{$testimonial->informations}}</p>
                        </div>
                    </div>
                    @endforeach
                </div>
                <div class="swiper-button-next swiper-button-next-test"></div>
                <div class="swiper-button-prev swiper-button-prev-test"></div>
            </div>
        </div>
    </section>
    @endif  --}}

    <div class="my_container mt-5">
        <div class="row align-items-center">
            <div class="col-lg-5">
                <div class="image_holder">
                    <img src="{{ route('thumb', ['width:1920', $aboutImage2->images[0]]) }}" alt="" class="img-fluid" />
                </div><!-- /.image_holder -->
            </div><!-- /.col-lg-5 -->
            <div class="col-lg-1"></div>
            <div class="col-lg-5">
                <div class="box_holder text-left">
                    <p class="mt-3 mt-lg-0">{!!str_replace("\n","<br>",$aboutDescription2->text)!!}</p>
                    <h5>{{$aboutBold->text}}</h5>

                </div><!-- /.box-holder -->
            </div><!-- /.col-lg-5 -->
            <div class="col-lg-1"></div>
        </div><!-- /.row -->
    </div><!-- /.container -->

    @if($teams)
    <section id="team" class="mt-5 pt-5">
        <div class="my_container">
            <div class="row">
                <div class="col-md-12 text-center">
                    <h1 class="blue-text underline_title">{{__('site.our-team')}}</h1>

                </div>
            </div>
            <div class="swiper-container team_swiper">
                <div class="swiper-wrapper">
                    @foreach($teams as $key=>$team)
                    <div class="swiper-slide">
                        <div class="d-flex flex-column align-items-center">
                            <img src="{{ route('thumb', ['width:300', $team->image]) }}" alt="">
                            <h5>{{$team->name}}</h5>
                            @if($team->informations)
                                <p class="team-informations">{{$team->informations}}</p>
                            @endif
                            @if($team->description)
                            <a href="" class="team_more_details_button" data-toggle="modal"
                                data-target="#details_modal-{{$key}}">{{__('site.more-details')}}</a>
                            @endif
                        </div>
                    </div>
                    @endforeach
                </div>
                <div class="swiper-button-next swiper-button-next-team"></div>
                <div class="swiper-button-prev swiper-button-prev-team"></div>
            </div>
        </div>
    </section>
    @foreach($teams as $key=>$team)
        @if($team->description)
        <div class="modal fade" id="details_modal-{{$key}}" tabindex="-1" aria-labelledby="details_modal_label" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header">

                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">{{__('site.close')}}</button>
                    </div>
                    <div class="modal-body">
                        <div class="text-center">
                            <img src="{{ route('thumb', ['width:300', $team->image]) }}" alt="">
                        </div>

                        <h3>{{$team->name}}</h3>
                        <p>{!!str_replace("\n","<br>",$team->description)!!}</p>
                    </div>
                </div>
            </div>
        </div>
        @endif
    @endforeach
    @endif




    <div class="my_container">
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

    <form id="newsletter_section" class = "newsletter-form" action='{{ action("ContactController@newsltetter_register") }}' method="post">
        {{ csrf_field() }}
        <div class="overlay"></div>
        <div class="container">
            <div class="row">
                <div class="col-lg-3"></div>
                <div class="col-lg-6 text-center d-flex flex-column">
                    <h1 class="text-white">{{__('site.newsletter')}}</h1>
                    <p class="text-white">
                    {{config('settings.subscribe_text')}}
                    </p>
                    <input type='text' class="form-control" name = "email" placeholder="{{__('site.newsletter-email')}}" />
                    <div class="d-block mt-3">
                        <input type="checkbox" name = "terms" class="rounded-checkbox" />
                        <label for="newsletter_acord" class="mb-0 form-acord">{{__('site.agree')}}<a href="/terms">{{__('site.footer-privacy')}}</a></label>
                    </div> <!-- end div d-block -->
                    <button class="subscribe_btn align-self-center send-newsletter">{{__('site.newsletter-subscribe')}}</button>
                </div> <!--  end col-md-8-->
                <div class="col-lg-3"></div>
            </div> <!--  end row-->
        </div> <!--  end container-->
    </form> <!--  end section newsletter-->

</div>

@push('scripts')
<script>
    Notiflix.Block.Init({messageColor:"#ffffff",backgroundColor:"rgba(0,0,0,0.715)",svgColor:"#ffffff",});
    document.addEventListener("DOMContentLoaded", function () {
      $.ajaxSetup({
  
        headers: {
          'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content'),
        }
      });
      var $formContact = $('.newsletter-form');
      $('.send-newsletter').on('click', function (event) {
        event.preventDefault();
        $.ajax({
          method: 'POST',
          url: '{{ action("ContactController@newsltetter_register") }}',
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
    var swiper4 = new Swiper('.swiper-container.testimoniale_swiper', {
        slidesPerView: 1,
        // spaceBetween: 30,
        slidesPerGroup: 1,
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next-test',
            prevEl: '.swiper-button-prev-test',
        },
        breakpoints: {
            1024: {
                slidesPerView: 3,
                slidesPerGroup: 3,
            },
            769: {
                slidesPerView: 2,
                slidesPerGroup: 2,
            },

        }
    });
    var swiper5 = new Swiper('.swiper-container.team_swiper', {
        slidesPerView: 1,
        spaceBetween: 30,
        slidesPerGroup: 1,
        loop: false,
        navigation: {
            nextEl: '.swiper-button-next-team',
            prevEl: '.swiper-button-prev-team',
        },
        breakpoints: {
            1024: {
                slidesPerView: 4,
                spaceBetween: 30,
                slidesPerGroup: 3,
            },
            769: {
                slidesPerView: 2,
                slidesPerGroup: 2,
            },
        }
    });

    function redirect_testimonials() {
        location.href = "/testimonials";
    }
</script>
@endpush
@endsection