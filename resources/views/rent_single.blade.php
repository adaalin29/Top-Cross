@extends('parts.template')
@php($large_header = false)
@section('title', 'Page Title')

@section('content')
<div id="rent_single">
    <a href="#" class="go-top">
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

    </div> <!-- end my-container-->
    <div class="my_container container-principal rent-single">
        <div class="row">
            <div class="col-md-12 text-center">
                <h1 class="blue-text underline_title mt-5">{{__('site.your-selection')}}</h1>
            </div><!-- /.col-md-12 -->
        </div><!-- /.row -->

        <div class="row align-items-center">
            <div class="col-lg-5 d-flex justify-content-center">
                <img src="{{ route('thumb', ['width:700', $bike->image]) }}" alt="" class="img-fluid" />
            </div>
            <!--/.col-md-5 -->
            <div class="col-lg-1"></div>
            <div class="col-lg-6">
                <h5 class = "bike-name">{{$bike->name}}</h5>
                @if($bike->tags)
                <div class="d-flex tag-list">
                    @foreach($bike->tags as $tag)
                    <div class="tag" style="background-color:{{$tag->color}}">{{$tag->tag}}</div>
                    @endforeach
                </div>
                @endif
                <p class="bike_description">{!!$bike->description!!}</p>
                <div class="d-flex align-items-center">
                    <div class="d-flex mr-4 mr-lg-5">
                        <img src="./img/calendar.svg" alt="" class="mr-1">
                        <div class="date_element d-flex flex-column">
                            <h6 class="mb-0">{{__('site.starting')}}</h6>
                            <p class="mb-0 starting-date">{{__('site.invalid-data')}}</p>
                        </div>
                    </div>
                    <div class="d-flex mr-4 mr-lg-5">
                        <img src="./img/calendar.svg" alt="" class="mr-1">
                        <div class="date_element d-flex flex-column">
                            <h6 class="mb-0">{{__('site.until')}}</h6>
                            <p class="mb-0 ending-date">{{__('site.invalid-data')}}</p>
                        </div>
                    </div>
                    <div class="d-flex mr-4 mr-lg-5">

                        <div class="price_element d-flex flex-column">
                            <p class="mb-0">{{__('site.price')}}</p>
                            <h6 class="mb-0 price-div">{{__('site.invalid-data')}} <sup>euro</sup></h6>
                        </div>
                    </div>

                </div>
            </div>
            <!--/.col-md-6 -->
        </div><!-- /.row -->

        <div class="row">
            <div class="col-md-12 text-center">
                <h1 class="blue-text underline_title mt10">{{__('site.complete')}}</h1>
            </div><!-- /.col-md-12 -->
        </div><!-- /.row -->

        <form class = "rent-form" action='{{ action("RentController@do_rent") }}' method="post">
            <div class="row">
                <div class="col-lg-6">
                    <div class="form-group">
                        <label for="nume">{{__('site.bike-name')}}</label>
                        <input type="text" class="form-control" name="name">
                        <input type="hidden" class="form-control" id = "start_date_form" name="start_date">
                        <input type="hidden" class="form-control" id = "end_date_form" name="end_date">
                        <input type="hidden" class="form-control" value = {{$bike->id}} name="id_bike">
                    </div>
                    <div class="form-group">
                        <label for="telefon">{{__('site.bike-phone')}}</label>
                        <input type="number" class="form-control" name="phone">
                    </div>
                    <div class="form-group">
                        <label for="email">Email*</label>
                        <input type="email" class="form-control" name="email">
                    </div>
                    <div class="form-group">
                        <label for="mesaj">{{__('site.bike-message')}}</label>
                        <textarea class="form-control" name="message" rows="3"></textarea>
                    </div>
                    <div class="form-group">
                        <label for="reg_com">Voucher</label>
                        <input type="text" class="form-control" name="voucher">
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="form-group">
                        <label for="company">{{__('site.bike-company')}}</label>
                        <input type="text" class="form-control" name="company">
                    </div>
                    <div class="form-group">
                        <label for="company_address">{{__('site.bike-address')}}</label>
                        <input type="text" class="form-control" name="company_address">
                    </div>
                    <div class="form-group">
                        <label for="vat_nr">{{__('site.bike-vat')}}</label>
                        <input type="text" class="form-control" name="vat">
                    </div>
                    <div class="form-group">
                        <label for="reg_com">{{__('site.bike-reg')}}</label>
                        <!-- <input type="text" class="form-control" id="reg_com"> -->
                        <textarea class="form-control" id="reg_com" name = "reg" rows="3"></textarea>
                    </div>
                    
                </div>
            </div>
    
            <div class="row">
                <div class="col-md-12">
                    <div class="flinstones_carpet">{{__('site.recive-email')}}</div>
                </div>
            </div>
    
            <div class="row">
                <div class="col-lg-12 content-between">
                    <img src="/img/card.png" alt="" class="img-fluid" />
                    <button class="i_hate_you rent-button rent-button-muta">{{__('site.rent-bike')}}</button>
                </div>
                
    
            </div>
            <div class="row mt-5 anulam-marginea">
                <div class="col-lg-8">
                    <div class="d-block">
                        <input type="checkbox" name="terms" class="rounded-checkbox" />
                        <label for="acord" class="mb-0 form-acord">{{__('site.agree')}}<a href="/politica">{{__('site.policy')}}</a></label>
                    </div> <!-- end div d-block -->
                </div> <!-- end col-md-6 -->
            </div> <!-- end row -->
            <div class = "se-muta-aici"></div>
        </form>
    </div><!-- /.container -->
</div><!-- /.rent_single -->
<div class="modal modal-already" tabindex="-1" role="dialog">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">{{__('site.already-rezervation')}}</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body"></div>
        <div class="modal-footer">
          <button type="button" class="btn btn-primary" style = "background-color:#ffdc47">{{__('site.reserve')}}</button>
          <button type="button" class="btn btn-secondary" style = "background-color:rgba(2, 22, 119, 1)" data-dismiss="modal">{{__('site.close')}}</button>
        </div>
      </div>
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
      $start_date = null;
      $end_date = null;
      var $formContact = $('.rent-form');
      $('.rent-button').on('click', function (event) {
        event.preventDefault();
        $.ajax({
          method: 'POST',
          url: '{{ action("RentController@do_rent") }}',
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
                window.location.href = '/';
            
            }, 1500);
          } else {
            if(res.date_founded){
                $('.modal-body').text(res.msg);
                $('.modal-already').modal('show');
                $start_date = res.start_date;
                $end_date = res.end_date;
            }else{
                if(res.error_voucher){
                    Notiflix.Notify.Failure(res.error);
                }else{
                    var eroare = res.error;
                    for (var i = 0; i < eroare.length; i++) {
                        eroare[i] = eroare[i] + "\n";
                        Notiflix.Notify.Failure(eroare[i]);
                    }
                }
            }
          }
        });
        return;
      });
  
    });
    $('.btn-primary').click(function(){
        if($start_date && $end_date){
            window.location.href = 'bike/{{$bike->slug}}?start_date='+$start_date+'&end_date='+$end_date;
        }else{
            Notiflix.Notify.Failure('Unknown error');
        }
    })
</script>
<script>
    $(document).ready(function(){
        $start_date=null;
        $end_date=null;
        $bike_start_date = getUrlParameter('start_date');
        $bike_end_date = getUrlParameter('end_date');
        if($bike_end_date<$bike_start_date){
            $aux = $bike_end_date;
            $bike_end_date = $bike_start_date;
            $bike_start_date = $aux;
        }
        $pricePerDay = {{$bike->daily_price}};
        $dayDif = datediff(parseDate($bike_start_date), parseDate($bike_end_date));
        $customPrice = {{$bike->custom_day_price}};
        $customDay = {{$bike->custom_day}};
        if($customPrice && $customDay){
            if($dayDif>$customDay){
                $pricePerDay = $customPrice;
            }
        }
        if($bike_start_date && $bike_end_date){
            $('.starting-date').text($bike_start_date);
            $('.ending-date').text($bike_end_date);
            $html = $dayDif*$pricePerDay +'<sup>euro</sup>';
            $('.price-div').html($html);
            $('#start_date_form').val($bike_start_date);
            $('#end_date_form').val($bike_end_date);
        }
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
        if(screen.width<=1024){
            $('.rent-button-muta').appendTo('.se-muta-aici');
        }
        $('#search_bike_header').click(function(){
            if($start_date != null && $end_date != null){
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
    });
    function parseDate(str) {
        var mdy = str.split('/');
        return new Date(mdy[2], mdy[0]-1, mdy[1]);
    }
    function datediff(first, second) {
        return Math.round((second-first)/(1000*60*60*24));
    }
    var getUrlParameter = function getUrlParameter(sParam) {
        var sPageURL = window.location.search.substring(1),
            sURLVariables = sPageURL.split('&'),
            sParameterName,
            i;
    
        for (i = 0; i < sURLVariables.length; i++) {
            sParameterName = sURLVariables[i].split('=');
    
            if (sParameterName[0] === sParam) {
                return typeof sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
            }
        }
        return false;
    };
</script>
<script>
    // AOS.init();
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