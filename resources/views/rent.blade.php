@extends('parts.template')
@php($large_header = false)
@section('title', 'Page Title')

@section('content')
<div id="rent_bike_page">
    <a href="#" class="go-top">
        <img src="/img/up_to_top.svg" alt="">
    </a>
    <div class="my_container">
        <div class="rent-section d-flex align-items-center rent-mobile-visible">
            <div class="d-flex flex-column">
                <div class="title">{{__('site.rent')}}</div>
                <div class="subtitle">{{__('site.select')}}</div>
            </div> <!-- end div d-flex -->
            <div class="position-relative">
                <input type='text' class="datepicker-here custom-datepicker start_datepicker"
                    data-position="right top" data-language='en' placeholder="{{__('site.rent-start')}}" />
            </div> <!--  end div pos relative -->
            <div class="position-relative">
                <input type='text' class="datepicker-here custom-datepicker end_datepicker" 
                    data-position="right top" data-language='en' placeholder="{{__('site.rent-end')}}" />
            </div> <!--  end div pos relative -->
            <a class="custom-button" id = "search_bike_header">{{__('site.search-bike')}}</a> <!--  end custom-button-->
        </div> <!-- end rent-section-->

    </div> <!-- end my-container-->
    <div class="my_container container-principal rent-container">

        <div class="row">
            <div class="col-md-12 text-center">
                <h1 class="blue-text underline_title mt-5">{{__('site.all-the-bikes')}}</h1>
            </div><!-- /.col-md-12 -->
        </div><!-- /.row -->

        @if(count($bikes))
        <div class="row">
            @foreach($bikes as $bike)
            <div class="col-lg-6 pr-0 pr-lg-5">
                <div data-aos="fade-right" data-aos-easing="ease-out-cubic" data-aos-duration="1500">

                    <div class="bike_box">
                        <img src="{{ route('thumb', ['width:700', $bike->image]) }}" alt="" />
                        <h5>{{$bike->name}}</h5>
                        @if($bike->tags)
                        <div class="d-flex tag-list">
                            @foreach($bike->tags as $tag)
                            <div class="tag" style="background-color:{{$tag->color}}">{{$tag->tag}}</div>
                            @endforeach
                        </div>
                        @endif
                        <div class="bike-description">{!!substr($bike->description,0,220)!!}...</div>
                        <a class = "bike-link" href="bike/{{$bike->slug}}">{{__('site.rent-this-bike')}}</a>
                    </div><!-- /.bike_box -->
                </div>
            </div>
            @endforeach
        </div>
        @else
        <div class = "no-bikes" style = "margin-bottom: 20px;">{{__('site.no-bikes')}}</div>
        @endif

    </div><!-- /.container -->
</div>
@endsection

@push('scripts')
<script>
    $(document).ready(function(){
        $start_date=null;
        $end_date=null;
        $('.start_datepicker').datepicker({
            minDate: new Date(),
            onHide: function(dp, animationCompleted){
                if (!animationCompleted) {
                    $start_date = $('.start_datepicker').val();
                }
            }
        })
        $('.end_datepicker').datepicker({
            minDate: new Date(),
            onHide: function(dp, animationCompleted){
                if (!animationCompleted) {
                    $end_date = $('.end_datepicker').val();
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
        $('.bike-link').click(function(e){
            $bike_start_date = getUrlParameter('start_date');
            $bike_end_date = getUrlParameter('end_date');
            if(!$bike_start_date && !$bike_end_date){
                e.preventDefault();
                Notiflix.Notify.Failure('{{__('site.insert-start')}}');
                Notiflix.Notify.Failure('{{__('site.insert-end')}}');
            }else{
                $link = $(this).attr('href');
                $link = $link +'?start_date='+$bike_start_date+'&end_date='+$bike_end_date;
                $(this).attr('href',$link);

            }
        });
    });

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
    AOS.init();
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