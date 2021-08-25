@extends('parts.template')
@php($large_header = false)
@section('title', 'Page Title')

@section('content')
<?php


$location = App\Http\Controllers\HomeController::getData('location');
$phone = App\Http\Controllers\HomeController::getData('phone');
$email = App\Http\Controllers\HomeController::getData('email');

?>
<div id="contact_page" class="overflow-hidden">
    <a href="#" class="go-top">
        <img src="/img/up_to_top.svg" alt="">
    </a>
    <p></p>
    <div class="my_container mt-5">
        <div class="row">
            <div class="col-md-12 text-center">
                <h1 class="blue-text underline_title mt-3">{{__('site.contact-us')}}</h1>
                <!-- <div class="yellow_underline mb-3"></div> -->

            </div>
        </div> <!-- end row-->
        <div class="row">
            <div class="col-md-3"></div>
            <div class="col-md-6 text-center">
                <p class="mb-5">{{__('site.contact-subitle')}}</p>
            </div>
            <div class="col-md-3"></div>
        </div> <!-- end row-->

        <form class="row contact-form" action='{{ action("ContactController@mail_contact") }}' method="post">
            {{ csrf_field() }}
            <div class="col-lg-6 pr-0">
                <div class="form-group">
                    <label for="nume">{{__('site.name')}}</label>
                    <input type="text" class="form-control" name = "name">
                </div>
                <div class="form-group">
                    <label for="telefon">{{__('site.phone')}}</label>
                    <input type="number" name = "phone" class="form-control">
                </div>
                <div class="form-group">
                    <label for="email">Email</label>
                    <input type="email" name = "email" class="form-control">
                </div>
                <div class="form-group">
                    <label for="mesaj">{{__('site.message')}}</label>
                    <textarea class="form-control" name = "message" rows="3"></textarea>
                </div>
                <div class="row mt-5">
                    <div class="col-lg-8">
                        <div class="d-block">
                            <input type="checkbox" name = "terms" class="rounded-checkbox" />
                            <label for="acord" class="mb-0 form-acord">{{__('site.agree')}} <a href="/policy">{{__('site.policy')}}</a></label>
                        </div> <!-- end div d-block -->
                    </div> <!-- end col-md-6 -->
                    <div class="col-lg-4">
                        <button   class="blue_border_btn mt-5 mt-lg-0 float-xl-right float-lg-left mb-5 send-message">{{__('site.send-message')}}</button>
                    </div> <!-- end col-md-6 -->
                </div> <!-- end row -->

            </div> <!-- end col-md-6-->
            <div class="col-lg-4 pl-3 pl-md-5" id="detalii_contact">
                <h3 class="mb-4 grey-text">RAMS Motors SRL</h3>
                <h6>{{__('site.address')}}</h6>
                <p>{{$location->text}}</p>
                <h6 class="mt-5">{{__('site.phone')}}</h6>
                <p class="mb-0">{{$phone->text}}</p>
                <h6 class="mt-5">Email</h6>
                <p>{{$email->text}}</p>
            </div> <!-- end col-md-6 -->
            <div class="col-lg-2"></div><!-- end col-md-6 -->
        </form>

    </div>



    <div id="map"></div>
    <div id="locatii"></div>

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
      var $formContact = $('.contact-form');
      $('.send-message').on('click', function (event) {
        event.preventDefault();
        $.ajax({
          method: 'POST',
          url: '{{ action("ContactController@mail_contact") }}',
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
            
            }, 4000);
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
    const locations = [{
        label: 'RAMS Motors',
        location: {
            lat: 44.5549698,
            lng: 26.0700823
        }

    }];

    let map, Popup;

    function initMap() {
        map = new google.maps.Map(document.getElementById("map"), {
            center: {
                lat: 44.5549698,
                lng: 26.0700823
            },
            zoom: 13
        });

        class Popup extends google.maps.OverlayView {
            constructor(position, content) {
                super();
                this.position = position;
                content.classList.add("popup-bubble");
                // This zero-height div is positioned at the bottom of the bubble.
                const bubbleAnchor = document.createElement("div");
                bubbleAnchor.classList.add("popup-bubble-anchor");
                bubbleAnchor.appendChild(content);
                // This zero-height div is positioned at the bottom of the tip.
                this.containerDiv = document.createElement("div");
                this.containerDiv.classList.add("popup-container");
                this.containerDiv.appendChild(bubbleAnchor);
                // Optionally stop clicks, etc., from bubbling up to the map.
                Popup.preventMapHitsAndGesturesFrom(this.containerDiv);
            }
            /** Called when the popup is added to the map. */
            onAdd() {
                this.getPanes().floatPane.appendChild(this.containerDiv);
            }
            /** Called when the popup is removed from the map. */
            onRemove() {
                if (this.containerDiv.parentElement) {
                    this.containerDiv.parentElement.removeChild(this.containerDiv);
                }
            }
            /** Called each frame when the popup needs to draw itself. */
            draw() {
                const divPosition = this.getProjection().fromLatLngToDivPixel(
                    this.position
                );
                // Hide the popup when it is far out of view.
                const display =
                    Math.abs(divPosition.x) < 4000 && Math.abs(divPosition.y) < 4000 ?
                    "block" :
                    "none";

                if (display === "block") {
                    this.containerDiv.style.left = divPosition.x + "px";
                    this.containerDiv.style.top = divPosition.y + "px";
                }

                if (this.containerDiv.style.display !== display) {
                    this.containerDiv.style.display = display;
                }
            }
        }

        locations.forEach((element) => {
            new google.maps.Marker({
                position: element.location,
                map,
                icon: '/img/maps_pin.svg',
                animation: google.maps.Animation.DROP,
            });

            var pop = document.createElement("div");
            pop.setAttribute('id', 'content' + locations.indexOf(element));

            var text = document.createElement("div");
            text.classList.add("popup_text");

            text.innerText = element.label;

            pop.appendChild(text);

            console.log('pop: ', pop);
            document.getElementById("locatii").appendChild(pop);

            popup = new Popup(
                new google.maps.LatLng(element.location.lat, element.location.lng),
                document.getElementById('content' + locations.indexOf(element))
            )
            popup.setMap(map);
        });


    }
</script>
@endpush