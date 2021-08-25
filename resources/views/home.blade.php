@extends('parts.template')
@php($large_header = true)
@section('title', 'Page Title')

@section('content')
<?php


$aboutTitle = App\Http\Controllers\HomeController::getData('index-about-title');
$aboutDescription = App\Http\Controllers\HomeController::getData('index-about-description');

$guidedTitle = App\Http\Controllers\HomeController::getData('guided-tour-title');
$guidedDescription = App\Http\Controllers\HomeController::getData('guided-tour-description');
$guidedLink = App\Http\Controllers\HomeController::getData('guided-tour-link');

$indexMotocycleTitle = App\Http\Controllers\HomeController::getData('index-motocycle-course-title');
$indexMotocycleDescription = App\Http\Controllers\HomeController::getData('index-motocycle-course-description');
$indexMotocycleImage = App\Http\Controllers\HomeController::getData('index-motocycle-course-image');

$indexVoucherTitle = App\Http\Controllers\HomeController::getData('index-voucher-title');
$indexVoucherDescription = App\Http\Controllers\HomeController::getData('index-voucher-description');

?>
<div id="homepage">
    <a href="#" class="go-top animate__animated animate__shakeY">
        <img src="/img/up_to_top.svg" alt="">
    </a>
    <div class="my_container">
        <div class="rent-section d-flex align-items-center">
            <div class="d-flex flex-column">
                <div class="title">{{__('site.rent')}}</div>
                <div class="subtitle">{{__('site.select')}}</div>
            </div> <!-- end div d-flex -->
            <div class="position-relative">
                <input type='text' class="datepicker-here custom-datepicker" id="start_datepicker"
                    data-position="right top" data-language='en' placeholder="{{__('site.rent-start')}}" />
            </div> <!--  end div pos relative -->
            <div class="position-relative">
                <input type='text' class="datepicker-here custom-datepicker" id="end_datepicker"
                    data-position="right top" data-language='en' placeholder="{{__('site.rent-end')}}" />
            </div> <!--  end div pos relative -->
            <a class="custom-button" id = "search_bike_header">{{__('site.search-bike')}}</a> <!--  end custom-button-->
        </div> <!-- end rent-section-->
        <div class="row">
            <div class="col-md-12 text-center mt-5 mt-lg-5 pt-lg-5">
                <h1 class="blue-text underline_title">{{$aboutTitle->text}}</h1>

            </div>
        </div>
    </div> <!-- end my-container-->
    <section id="about_homepage">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <p class="text-center">{!!str_replace("\n","<br>",$aboutDescription->text)!!}</p>

                </div>
            </div> <!-- end row -->

        </div>

        <div class="my_container mt-5">
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
                        <a href="/guided" class="yellow_border_btn">{{__('site.view-tours')}}</a>
                    </div>


                </div><!-- end col-md-5-->
            </div> <!-- end row-->

            <!-- Add Navigation -->

            @if($trips)
            <div class="swiper-button-prev swiper-button-prev2" id="prev-desktop"></div>
            <div class="swiper-container s2">
            <div class="swiper-button-prev swiper-button-prev2" id="prev-mobile"></div>
                <div class="swiper-wrapper">
                    @foreach($trips as $trip)
                    <div class="swiper-slide" style="background-image:url('{{ route('thumb', ['width:700', $trip->sortedImages[0]]) }}')">
                        <a href="/guided-details/{{$trip->slug}}" class="tour-description">{{$trip->name}}</a>
                    </div>
                    @endforeach
                </div>
                <div class="swiper-button-next swiper-button-next2" id="next-mobile"></div>
            </div>
            <div class="swiper-button-next swiper-button-next2" id="next-desktop"></div>
            @endif

        </div> <!-- end my container-->

    </section>
    @if($bikes)
    <section id="rent_bike_homepage">
        <div data-aos="fade-up" data-aos-easing="ease-out-cubic" data-aos-duration="1500">
            <div class="my_container">
                <div class="row">
                    <div class="col-md-12 text-center mt-4 margin-bottom-modified-bike">
                        <h1 class="blue-text underline_title">{{__('site.rent')}}</h1>


                    </div> <!--  end col-md-12-->
                </div> <!--  end row-->

                <div class="swiper-container s3 mb-5">
                    <div class="swiper-wrapper">
                        @foreach($bikes as $bike)
                        <div class="swiper-slide">
                            <div class="d-flex align-items-center justify-content-between flex-wrap">
                                <img src="{{ route('thumb', ['width:700', $bike->image]) }}" alt="motorcycle" class="img-fluid swiper-moto-img">
                                <div class="d-flex flex-column product-description">
                                    <h3 class="blue-text blue-text-center">{{$bike->name}}</h3>
                                    @if($bike->tags)
                                    <div class="d-flex tag-list">
                                        @foreach($bike->tags as $tag)
                                        <div class="tag" style="background-color:{{$tag->color}}">{{$tag->tag}}</div>
                                        @endforeach
                                    </div>
                                    @endif
                                    <div class="bike-description">{!!Str::limit(str_replace("\n","<br>",$bike->description),200,'...')!!}</div>
                                    <a href = "rent" class="blue_border_btn">{{__('site.seach-availability')}}</a>
                                    <div class="swiper-button-next swiper-button-next3"></div>
                                    <div class="swiper-button-prev swiper-button-prev3"></div>
                                </div> <!--  end product-description-->
                            </div> <!--  end div d-flex-->
                        </div> <!--  end swiper-slide-->
                        @endforeach
                    </div> <!--  end swiper-wrapper-->
                </div> <!--  end swiper-container-->



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



            </div> <!--  end my-container-->
        </div>
    </section> <!--  end section rent bike-->
    @endif
    <section id="offers_home" class="mt-5">
        <div class="my_container">
            <div class="row px-0" id="offers_desktop">
                <div class="col-md-6 pr-5">
                    <h1 class="blue-text">{{$indexVoucherTitle->text}}</h1>
                    <p class = "voucher-text-height">{!!str_replace("\n","<br>",$indexVoucherDescription->text)!!}</p>
                    @if($voucher)
                    <div class="card_cadou">
                        <h1>{{$voucher->name}}</h1>
                        <div class="inline-price-msg"> 
                             <p>{{$voucher->short_description}}</p>
                             <div>
                                 <input type="text" class="form-control" placeholder="{{$voucher->price}}" id="pret_card_cadou">
                                 <div id="moneda">lei</div>
                                 <img src="img/logo.svg" alt="">
                             </div>
                        </div>
                    </div> <!-- end card_cadou -->
                    @endif
                    <a href="" data-toggle="modal" data-target="#voucherModal">
                        <div class="yellow_btn yellow-button-no-arrow">{{__('site.buy-voucher')}}</div>
                    </a>
                </div> <!--  end col-md-6-->

                <div class="col-md-6 pl-5">
                    <h1 class="blue-text">{{$indexMotocycleTitle->text}}</h1>
                    <p>{!!str_replace("\n","<br>",$indexMotocycleDescription->text)!!}</p>
                    <img src="{{ route('thumb', ['width:700', $indexMotocycleImage->images[0]]) }}" alt="">
                    <a href="#" data-toggle="modal" data-target="#offerModal">
                        <div class="yellow_btn yellow-button-no-arrow">{{__('site.request-offer')}}</div>
                    </a>
                </div> <!--  end col-md-6-->
            </div> <!--  end row-->
            @if($voucher)
            <div id="offers_mobile">
                <div class="toggler" id="toggler_offroad">{{$indexVoucherTitle->text}}</div>
                <div id="offroad_content">
                     <div class="card_cadou">
                        <h1>{{$voucher->name}}</h1>
                        <div class="inline-price-msg"> 
                             <p>{{$voucher->short_description}}</p>
                             <div>
                                 <input type="text" class="form-control" placeholder="{{$voucher->price}}" id="pret_card_cadou">
                                 <div id="moneda">lei</div>
                                 <img src="img/logo.svg" alt="">
                             </div>
                        </div>
                        {{--  <input type="text" class="form-control" id="name_card_cadou" placeholder="Name here">  --}}
                    </div> <!-- end card_cadou -->
                    <p class="mt-3">{!!str_replace("\n","<br>",$indexVoucherDescription->text)!!}</p>
                    <a href="" data-toggle="modal" data-target="#voucherModal">
                        <div class="yellow_btn">{{__('site.buy-voucher')}}</div>
                    </a> 
                  
                </div>
                <div class="toggler" id="toggler_course">{{$indexMotocycleTitle->text}}</div>
                <div id="course_content">
                    <img src="{{ route('thumb', ['width:700', $indexMotocycleImage->images[0]]) }}" alt="">
                    <p class="mt-3">{!!str_replace("\n","<br>",$indexMotocycleDescription->text)!!}</p>
                    <a href="#" data-toggle="modal" data-target="#offerModal">
                        <div class="yellow_btn">{{__('site.request-offer')}}</div>
                    </a>
                </div>
            </div>
            @endif
            @if($voucher)
            <form class="modal fade voucher_form" action='{{ action("PaymentController@sendOrderVoucher") }}' id="voucherModal" tabindex="-1" role="dialog" aria-labelledby="voucherModal"
                    aria-hidden="true">
                    {{ csrf_field() }}
                    <div class="modal-dialog modal-dialog-centered" role="document">
                        <div class="modal-content">
                            <input type="hidden" class="form-control" id = "voucher_id" name = "voucher" value = "{{$voucher->id}}">
                            <input type="hidden" class="form-control" id = "voucher_total" name = "total" value = "{{$voucher->price}}">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel">{{__('site.buy-voucher')}}</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                <p class = "mdal-text-anunt">{{__('site.modal-text')}}</p>
                                <div class="form-group">
                                    <label for="nume">{{__('site.voucher-name')}}</label>
                                    <input type="text" class="form-control" name = "recipient_name">
                                </div>
                                <div class="form-group">
                                    <label for="nume">{{__('site.voucher-email')}}</label>
                                    <input type="email" class="form-control" name = "recipient_email">
                                </div>
                                <div class="form-group">
                                    <label for="nume">{{__('site.name')}}</label>
                                    <input type="text" class="form-control" name = "name">
                                </div>
                                <div class="form-group">
                                    <label for="telefon">{{__('site.phone')}}</label>
                                    <input type="number" class="form-control" name = "phone">
                                </div>
                                <div class="form-group">
                                    <label for="email">Email</label>
                                    <input type="email" class="form-control" name = "email">
                                </div>
                                <div class="form-group">
                                    <label for="mesaj">{{__('site.message')}}</label>
                                    <textarea class="form-control" name = "message" rows="3"></textarea>
                                    <img src="/img/card.png" alt="" class="img-fluid" />
                                </div>
                                <div class="d-block">
                                        <input type="checkbox" name="terms" class="rounded-checkbox" />
                                        <label for="acord" class="mb-0 form-acord">{{__('site.agree')}}<a href="/policy">{{__('site.policy')}}</a></label>
                                    </div> <!-- end div d-block -->
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-dismiss="modal">{{__('site.voucher-close')}}</button>
                                <button type="button" class="btn btn-primary voucher-pay" type="submit">{{__('site.voucher-pay')}}</button>
                            </div>
                        </div>
                    </div>
                </form>
                @endif

            <form class="modal fade" action='{{ action("CourseController@send_request") }}' method="post" id="offerModal" tabindex="-1" role="dialog" aria-labelledby="offerModal"
                aria-hidden="true">
                {{ csrf_field() }}
                <div class="modal-dialog modal-dialog-centered" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">{{__('site.request-offer')}}</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <div class="form-group">
                                <label for="nume">{{__('site.name')}}</label>
                                <input type="text" class="form-control" name="name">
                            </div>
                            <div class="form-group">
                                <label for="telefon">{{__('site.phone')}}</label>
                                <input type="text" class="form-control" name="phone">
                            </div>
                            <div class="form-group">
                                <label for="email">Email</label>
                                <input type="email" class="form-control" name = "email">
                            </div>
                            <div class="form-group">
                                <label for="city">{{__('site.area')}}</label>
                                <input type="text" class="form-control" name="city">
                            </div>
                            <div class="form-group">
                                <label for="start_datepicker">{{__('site.startind-date')}}</label>
                                <input type='text' name = "start_date" class="form-control datepicker-here custom-datepicker"
                                    id="start_datepicker_offer" data-position="bottom right" data-language='en'/>
                            </div>
                            <div class="form-group">
                                <label for="end_datepicker">{{__('site.ending-date')}}</label>
                                <input type='text' name = "end_date" class="form-control datepicker-here custom-datepicker"
                                    id="end_datepicker_offer" data-position="bottom right" data-language='en'
                                    readonly="true" />
                            </div>
                            <div class="form-group">
                                <label for="tour_type">{{__('site.tour-type')}}</label>
                                <select class="form-control" name="tour_type">
                                    @foreach($trips as $trip)
                                        <option value = {{$trip->name}}>{{$trip->name}}</option>
                                    @endforeach
                                </select>
                            </div>

                            <div class="form-group">
                                <label for="mesaj">{{__('site.message')}}</label>
                                <textarea class="form-control" name="message" rows="3"></textarea>
                            </div>
                            <div class="d-block">
                                <input type="checkbox" name="terms" class="rounded-checkbox" />
                                <label for="acord" class="mb-0 form-acord">{{__('site.agree')}}<a href="/politica">{{__('site.privacy')}}</a></label>
                            </div> <!-- end div d-block -->
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" id = "send-request" class="btn btn-primary">{{__('site.send')}}</button>
                        </div>
                    </div>
                </div>
            </form>


        </div> <!--  end my-container-->
    </section>

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
      var $formContact = $('#offerModal');
      $('#send-request').on('click', function (event) {
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

    document.addEventListener("DOMContentLoaded", function () {
        $.ajaxSetup({
    
          headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content'),
          }
        });
        var $formContact = $('.voucher_form');
        $('.voucher-pay').on('click', function (event) {
          event.preventDefault();
          $.ajax({
            method: 'POST',
            url: '{{ action("PaymentController@sendOrderVoucher") }}',
            data: $formContact.serializeArray(),
            context: this,
            async: true,
            cache: false,
            dataType: 'json'
          }).done(function (res) {
            console.log(res);
            if (res.success == true) {
              Notiflix.Notify.Success(res.successMessage);
              if(res.formular){
                  var data = JSON.parse(res.formular);
      
                  var f = document.createElement("form");
                  f.setAttribute('name', 'frmPaymentRedirect');
                  f.setAttribute('method', 'post');
                  f.setAttribute('action', data.postUrl);
      
                  var i1 = document.createElement("input");
                  i1.setAttribute('name', 'env_key');
                  i1.setAttribute('type', 'hidden');
                  i1.setAttribute('value', data.env_key);
      
                  var i2 = document.createElement("input");
                  i2.setAttribute('name', 'data');
                  i2.setAttribute('type', 'hidden');
                  i2.setAttribute('value', data.data);
      
                  f.appendChild(i1);
                  f.appendChild(i2);
      
                  document.getElementsByTagName('body')[0].appendChild(f);
                  setTimeout(function () { f.submit() }, 1000);
              }
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

            $start_date=null;
            $end_date=null;
            $('#start_datepicker').datepicker({
                minDate: new Date(),
                onHide: function(dp, animationCompleted){
                    if (!animationCompleted) {
                        $start_date = $('#start_datepicker').val();
                    }
                }
            })
            $('#end_datepicker').datepicker({
                minDate: new Date(),
                onHide: function(dp, animationCompleted){
                    if (!animationCompleted) {
                        $end_date = $('#end_datepicker').val();
                    }
                }
            })
            $('#search_bike_header').click(function(){
                if($start_date != null && $end_date != null){
                    if($end_date<$start_date){
                        $aux = $end_date;
                        $end_date = $start_date;
                        $start_date = $aux;
                    }
                    window.location.href = 'rent?start_date='+$start_date+'&end_date='+$end_date;
                }else{
                    if($start_date == null){
                        Notiflix.Notify.Failure('{{__('site.insert-start')}}');
                    }
                    if($end_date == null){
                        Notiflix.Notify.Failure('{{__('site.insert-end')}}');
                    }
                }
            });



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
    $('#start_datepicker_offer').datepicker({
        minDate: new Date(),
    });
    AOS.init();
    var swiper2 = new Swiper('.swiper-container.s2', {
        slidesPerView: 1,
        spaceBetween: 10,
        slidesPerGroup: 1,
        loop: true,
        navigation: {
            // nextEl: '.swiper-button-next2',
            // prevEl: '.swiper-button-prev2',
          
            nextEl: '#next-mobile',
                    prevEl: '#prev-mobile',
        },
        breakpoints: {
            1024: {
                slidesPerView: 3,
                spaceBetween: 30,
                slidesPerGroup: 3,
                navigation: {
                    nextEl: '#next-desktop',
                   prevEl: '#prev-desktop',
                },
            }
        }
    });
    var swiper3 = new Swiper('.swiper-container.s3', {
        slidesPerView: 1,
        spaceBetween: 30,
        slidesPerGroup: 1,
        loop: false,
        navigation: {
            nextEl: '.swiper-button-next3',
            prevEl: '.swiper-button-prev3',
        },
    });
    var swiper4 = new Swiper('.swiper-container.testimoniale_swiper', {
        slidesPerView: 1,
        spaceBetween: 10,
        slidesPerGroup: 1,
        loop: false,
        navigation: {
            nextEl: '.swiper-button-next-test',
            prevEl: '.swiper-button-prev-test',
        },
        breakpoints: {
            1024: {
                slidesPerView: 3,
                spaceBetween: 30,
                slidesPerGroup: 3,
            }
        }
    });
    $(document).ready(function () {
        $("#toggler_offroad").click(function () {
            $("#offroad_content").slideToggle();
            $("#toggler_offroad").toggleClass('up');
        });
        $("#toggler_course").click(function () {
            $("#course_content").slideToggle();
            $("#toggler_course").toggleClass('up');
        });
    });
</script>
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
@endpush