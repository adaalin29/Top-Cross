@extends('parts.template')
@php($large_header = false)
@section('title', 'Page Title')

@section('content')
<div id="gallery_page">
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
    <div class="my_container container-principal">

        <div class="row">
            <div class="col-md-12 text-center">
                <h1 class="blue-text underline_title mt-5">{{__('site.gallery')}}</h1>
            </div><!-- /.col-md-12 -->
        </div><!-- /.row -->

        <div class="row">
            @if($galleries)
                @foreach($galleries as $gallery)
                <div class="col-xl-3 col-lg-4 col-md-6 mb-3">
                    <figure>
                    <a data-fancybox="images-{{$gallery->name}}" href = "{{ route('thumb', ['width:300', $gallery->images[0]]) }}">
                        <img src="{{ route('thumb', ['width:1920', $gallery->images[0]]) }}" class="img-fluid">
                        <figcaption>
                            <img src="/img/zoom-in.svg" class="img-fluid" alt="">
                        </figcaption>
                    </a>
                    </figure>
                </div>
                @foreach($gallery->images as $key=>$image)
                    @if($key!=0)
                    <div style="display: none;">
                        <a href="{{ route('thumb', ['width:300', $image]) }}" data-fancybox="images-{{$gallery->name}}" 
                    
                        data-thumb="{{ route('thumb', ['width:1920', $image]) }}"></a>
                    </div>
                    @endif
                @endforeach
                @endforeach
                
            @endif
        </div>

    </div><!-- /.container -->
</div>
@endsection

@push('scripts')
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
    })
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