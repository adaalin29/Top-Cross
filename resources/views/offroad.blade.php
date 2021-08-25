@extends('parts.template')
@php($large_header = false)
@section('title', 'Page Title')

@section('content')
<?php


$experiencesDescription = App\Http\Controllers\HomeController::getData('experiences-description');
?>
<div id="offroad_page">
    <a href="#" class="go-top">
        <img src="/img/up_to_top.svg" alt="">
    </a>
    <div class="my_container">
        <div class="row">
            <div class="col-lg-12">
                <h1 class="text-center blue-text underline_title mt-5">{{__('site.off-road')}}</h1>
                <p class="text-center">{{$experiencesDescription->text}}</p>
            </div>
        </div>

        @if($experiences)
            @foreach($experiences as $key=>$experience)
                @if($key%2==0)
                    <div class="row align-items-center mt-5 left-right ">
                        <div class="col-lg-6 lg6imagine">
                            <div>
                                <img src="{{ route('thumb', ['width:700', $experience->image]) }}" alt="top cross" class="img-fluid margine-mobil-offroad">
                            </div>
                        </div>
                        <div class="col-lg-6 pl-3 pl-lg-5">
                            <h1 class="blue-text blue-text-experience">{{$experience->title}}</h1>
                            <p class="mb-5 mt-3 mt-lg-0">{!!$experience->description!!}</p>
                            <div class = "off-road-butoane">
                                <div class="yellow_btn yellow-button-modified voucher-btn">{{__('site.buy-voucher')}}</div>
                                @if($experience->id ==1)
                                    <a data-fancybox href="{{$videos[0]->video_link}}" class="yellow_btn yellow-button-modified">{{__('site.view-video')}}</a>
                                @endif
                                {{--  @if($experience->id ==2)
                                    <a data-fancybox href="{{$videos[0]->video_link}}" class="yellow_btn yellow-button-modified">{{__('site.view-video')}}</a>
                                @endif  --}}
                                @if($experience->id ==4)
                                    <a data-fancybox href="{{$videos[1]->video_link}}" class="yellow_btn yellow-button-modified">{{__('site.view-video')}}</a>
                                @endif
                            </div>
                        </div>
                    </div>
                @else
                    <div class="row align-items-center mt-5 left-right reverse">
                        <div class="col-lg-6 pr-3 pr-lg-5 text-left text-lg-right right-text">
                            <h1 class="blue-text blue-text-experience">{{$experience->title}}</h1>
                            <p class="mb-5 mt-3 mt-lg-0">{!!$experience->description!!}</p>
                            <div class = "off-road-butoane">
                                <div class="yellow_btn yellow-button-modified voucher-btn">{{__('site.buy-voucher')}}</div>
                                @if($experience->id ==1)
                                    <a data-fancybox href="{{$videos[0]->video_link}}" class="yellow_btn yellow-button-modified">{{__('site.view-video')}}</a>
                                @endif
                                {{--  @if($experience->id ==2)
                                    <a data-fancybox href="{{$videos[0]->video_link}}" class="yellow_btn yellow-button-modified">{{__('site.view-video')}}</a>
                                @endif  --}}
                                @if($experience->id ==4)
                                    <a data-fancybox href="{{$videos[1]->video_link}}" class="yellow_btn yellow-button-modified">{{__('site.view-video')}}</a>
                                @endif
                            </div>
                        </div>
                        <div class="col-lg-6 lg6imagine">
                            <div>
                                <img src="{{ route('thumb', ['width:700', $experience->image]) }}" alt="top cross" class="img-fluid">
                            </div>
                        </div>
                    </div>
                @endif
            @endforeach
        @endif
        <div data-aos="fade-up" data-aos-easing="ease-out-cubic" data-aos-duration="1500">
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
        </div>
        @if($videos)
        <div data-aos="fade-up" data-aos-easing="ease-out-cubic" data-aos-duration="1500">
            <div class="row">
                <div class="col-lg-12">
                    <h1 class="text-center blue-text underline_title mt-5 pt-5 mai-scoatem-din-margina">{{__('site.video-gallery')}}</h1>
                </div>
            </div>
            <div class = "swiper-images-container-da">
                <div class="swiper-container video-swiper">
                    <div class="swiper-wrapper">
                        @foreach($videos as $video)
                        <div class="swiper-slide">
                            <a class = "video-item" data-fancybox href="{{$video->video_link}}">
                                <img class = "video-image" src="" />
                                <img src="/img/play.svg" alt="" class="play">
                            </a>
                        </div>
                        @endforeach
                    </div>
                </div>
                <div class="swiper-button-next swiper-video-next"></div>
                <div class="swiper-button-prev swiper-video-prev"></div>
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
                        <div id="response_video">

                        </div>
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
                    
                        <iframe src="https://www.youtube.com/embed/clL4JqN2HUI" frameborder="0"></iframe>
                    </div>

                </div>
            </div>
        </div>


        <div data-aos="fade-up" data-aos-easing="ease-out-cubic" data-aos-duration="1500">
            <div class="row">
                <div class="col-lg-12">
                    <h1 class="text-center blue-text underline_title mt-5 pt-5 mai-scoatem-din-margina">{{__('site.gift')}} </h1>
                </div>
            </div>
            {{--  <div class="row px-0 pb-lg-5 pb-3" id="gift_images">
                @foreach($vouchers as $voucher)
                <div class="col-lg-6 voucher-item" voucher_id = "{{$voucher->id}}">
                    <a href="" data-toggle="modal" data-target="#voucherModal">
                        <div class = "voucher-container">
                            <img src = "img/quad.svg" class = "voucher-image">
                            <div class = "voucher-title">{{$voucher->name}}</div>
                            <div class = "voucher-linie"></div>
                            <div class = "voucher-description-container">
                                <div class = "voucher-description">{{$voucher->short_description}}</div>
                                <div class = "voucher-pret-container">
                                    <div class = "voucher-pret-pret-container">
                                        <div class = "voucher-pret-cifra">{{$voucher->price}}</div>
                                        <div class = "voucher-pret-lei">lei</div>
                                    </div>
                                    <img src = "img/logo.svg" class = "logo-voucher">
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
                @endforeach
            </div>  --}}
            <div class = "swiper-images-container-da">
                <div class="swiper-container gift_swiper">
                    <div class="swiper-wrapper">
                        @foreach($vouchers as $voucher)
                        <div class="swiper-slide">
                            <a href="" data-toggle="modal" data-target="#voucherModal" class = "voucher-item" voucher_id = "{{$voucher->id}}">
                                <div class = "voucher-container">
                                    <img src = "img/quad.svg" class = "voucher-image">
                                    <div class = "voucher-title">{{$voucher->name}}</div>
                                    <div class = "voucher-linie"></div>
                                    <div class = "voucher-description-container">
                                        <div class = "voucher-description">{{$voucher->short_description}}</div>
                                        <div class = "voucher-pret-container">
                                            <div class = "voucher-pret-pret-container">
                                                <div class = "voucher-pret-cifra">{{$voucher->price}}</div>
                                                <div class = "voucher-pret-lei">lei</div>
                                            </div>
                                            <img src = "img/logo.svg" class = "logo-voucher">
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                        @endforeach
                    </div>
                </div> <!-- gift-swiper -->
                <div class="swiper-button-next swiper-voucher-next"></div>
                <div class="swiper-button-prev swiper-voucher-prev"></div>
            </div>
        </div>

        <form class="modal fade voucher_form" action='{{ action("PaymentController@sendOrderVoucher") }}' id="voucherModal" tabindex="-1" role="dialog" aria-labelledby="voucherModal"
            aria-hidden="true">
            {{ csrf_field() }}
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                    <input type="hidden" class="form-control" id = "voucher_id" name = "voucher" value = "">
                    <input type="hidden" class="form-control" id = "voucher_total" name = "total" value = "">
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

            $('.voucher-btn').click(function(){
                $('html, body').animate({
                    scrollTop: $(".voucher-container").offset().top
                }, 2000);
            })

            $('.voucher-item').click(function(){
                $('#voucher_id').val($(this).attr('voucher_id'));
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
                slidesPerView: 3,
            },
        }
    });
    $slidesVideo = 3;
    $slidesVoucher = 2;
    if(screen.width<=1024){
        $slidesVideo = 2;
        $slidesVoucher = 2;
    }
    if(screen.width<=768){
        $slidesVideo = 1;
        $slidesVoucher = 1;
    }

    var swiper2 = new Swiper('.swiper-container.video-swiper', {
        slidesPerView: $slidesVideo,
        spaceBetween: 20,
        loop: true,
        centeredSlides: true,
        grabCursor: true,
        navigation: {
            nextEl: '.swiper-video-next',
            prevEl: '.swiper-video-prev',
        },
    });
    var swiper = new Swiper('.swiper-container.gift_swiper', {
        slidesPerView: $slidesVoucher,
        spaceBetween: 20,
        loop: true,
        grabCursor: true,
        navigation: {
            nextEl: '.swiper-voucher-next',
            prevEl: '.swiper-voucher-prev',
        },
    });
    AOS.init();
</script>
@endpush