@extends('parts.template')
@php($large_header = false)
@section('title', 'Page Title')

@section('content')
<div id="search_page">
    <a href="#" class="go-top">
        <img src="/img/up_to_top.svg" alt="">
    </a>
    @if($status =='platita')
    <div class="my_container">
        <div class = "col-md-12 text-center mt-5 mt-lg-5 pt-lg-5">
            <h1 class ="blue-text underline_title">{{__('site.success-title')}}</h1>
            <div class="row">
                <div class="col-md-12">
                    <p class="text-center">{{__('site.success-description')}}</p>

                </div>
            </div>
        </div>
    </div>
    @endif
    @if($status =='asteptare')
    <div class="my_container">
        <div class = "col-md-12 text-center mt-5 mt-lg-5 pt-lg-5">
            <h1 class ="blue-text underline_title">{{__('site.waiting-title')}}</h1>
            <div class="row">
                <div class="col-md-12">
                    <p class="text-center">{{__('site.waiting-description')}}</p>

                </div>
            </div>
        </div>
    </div>
    @endif
    @if($status =='canceled')
    <div class="my_container">
        <div class = "col-md-12 text-center mt-5 mt-lg-5 pt-lg-5">
            <h1 class ="blue-text underline_title">{{__('site.canceled-title')}}</h1>
            <div class="row">
                <div class="col-md-12">
                    <p class="text-center">{{__('site.canceled-description')}}</p>

                </div>
            </div>
        </div>
    </div>
    @endif
</div>
@endsection

@push('scripts')
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