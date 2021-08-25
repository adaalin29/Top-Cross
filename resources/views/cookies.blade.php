<?php
$cookies = App\Http\Controllers\HomeController::getData('cookies');
?>

@extends('parts.template')
@php($large_header = false)
@section('title', 'Page Title')

@section('content')
<div id="terms_page">
    <a href="#" class="go-top">
        <img src="/img/up_to_top.svg" alt="">
    </a>
    <div class="my_container">
        <div class="row">
            <div class="col-md-12 text-center mt-5 ">
                <h1 class="blue-text underline_title">{{__('site.cookies')}}</h1>
            </div><!-- /.col-md-12 -->
        </div><!-- /.row -->

        <div id="page_content">

            <div class="row">
                <div class="col-md-12">
                    <p>{!!str_replace("\n","<br>",$cookies->text)!!}</p>
                </div><!-- /.col-md-12 -->
            </div><!-- /.row -->
        </div><!-- /#page_content -->
    </div><!-- /.container -->

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

</div><!-- /#terms_page -->
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