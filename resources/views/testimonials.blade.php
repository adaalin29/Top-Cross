@extends('parts.template')
@php($large_header = false)
@section('title', 'Page Title')

@section('content')
<div id="testimonials_page">
    <a href="#" class="go-top">
        <img src="/img/up_to_top.svg" alt="">
    </a>
    <div class="container">

        <div class="row">
            <div class="col-lg-12 mt10 text-center">
                <h1 class="blue-text underline_title">{{__('site.testimonials')}}</h1>
            </div><!-- /.col-lg-12  -->
        </div><!-- /.row -->
        <div class="row" id="testimoniale_desktop">
            <div class="col-lg-12 testimonials">
                @if($testimonials)
                    @foreach($testimonials as $key=>$testimonial)
                        @if($key%2==0)
                        <div class="row testimonial">
                            <div class="col-lg-2">
                                <img src="{{ route('thumb', ['width:300', $testimonial->image]) }}" alt= />
                            </div><!-- /.col-lg-2 -->
                            <div class="col-lg-6 d-flex align-items-center">
                                <p class="no_margin">{{$testimonial->text}}</p>
                            </div><!-- /.col-lg-6 -->
                            <div class="col-lg-1">
                                <div class="brd"></div>
                            </div>
                            <div class="col-lg-3">
                                <h6>{{$testimonial->name}}</h6>
                                <p class="no_margin">{{$testimonial->informations}}</p>
                            </div><!-- /.col-lg-3 -->
                        </div><!-- /.row -->
                        @else
                        <div class="row testimonial">
                            <div class="col-lg-3">
                                <h6>{{$testimonial->name}}</h6>
                                <p class="no_margin">{{$testimonial->informations}}</p>
                            </div><!-- /.col-lg-3 -->
                            <div class="col-lg-1">
                                <div class="brd"></div>
                            </div>
                            <div class="col-lg-6 d-flex align-items-center">
                                <p>{{$testimonial->text}}</p>
                            </div><!-- /.col-lg-6 -->
                            <div class="col-lg-2">
                                <img src="{{ route('thumb', ['width:300', $testimonial->image]) }}" alt= />
                            </div><!-- /.col-lg-2 -->
                        </div><!-- /.row -->
                        @endif
                    @endforeach
                @endif
            </div><!-- /.col-lg-12 testimonias -->
        </div><!-- /row -->


        <div id="testimoniale_mobile">
            @if($testimonials)
                @foreach($testimonials as $key=>$testimonial)
                    @if($key%2 == 0)
                    <div class="testimonial testimonial_left">
                        <div class="d-flex">
                            <img src="{{ route('thumb', ['width:300', $testimonial->image]) }}" alt="testimonial imagine" class="mb-3" />
                            <div class="details ml-3">
                                <h6>{{$testimonial->name}}</h6>
                                <p class="no_margin">{{$testimonial->informations}}</p>
                                <div class="underline"></div>
                            </div>
                        </div>
                        <p>{{$testimonial->text}}</p>
                    </div>
                    @else
                    <div class="testimonial testimonial_right">
                        <div class="d-flex justify-content-end">
                            <div class="details mr-3">
                                <h6>{{$testimonial->name}}</h6>
                                <p class="no_margin">{{$testimonial->informations}}</p>
                                <div class="underline"></div>
                            </div>
                            <img src="{{ route('thumb', ['width:300', $testimonial->image]) }}" alt="testimonial imagine" class="mb-3" />
                        </div>
                        <p>{{$testimonial->text}}</p>
                    </div>
                    @endif
                @endforeach
            @endif
        </div>
    </div><!-- /.container -->
</div><!-- /.testimonials_page -->
@endsection