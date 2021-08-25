@extends('parts.template')
@php($large_header = false)
@section('title', 'Page Title')

@section('content')
<div id="search_page">
    <a href="#" class="go-top">
        <img src="/img/up_to_top.svg" alt="">
    </a>
    <div class="my_container">
        <div class="rent-section d-flex align-items-center">
            <div class="d-flex flex-column">
                <div class="title">RENT a bike</div>
                <div class="subtitle">Select your booking period </div>
            </div> <!-- end div d-flex -->
            <div class="position-relative">
                <input type='text' class="datepicker-here custom-datepicker" id="start_datepicker"
                    data-position="right top" data-language='en' placeholder="Start date" />
            </div> <!--  end div pos relative -->
            <div class="position-relative">
                <input type='text' class="datepicker-here custom-datepicker" id="end_datepicker"
                    data-position="right top" data-language='en' placeholder="End date" />
            </div> <!--  end div pos relative -->
            <div class="custom-button"> Search Bike </div> <!--  end custom-button-->
        </div> <!-- end rent-section-->

    </div> <!-- end my-container-->
    <div class="my_container container-principal">

        <div class="row">
            <div class="col-md-12 text-center">
                <h1 class="blue-text underline_title mt-5">Search result</h1>
            </div><!-- /.col-md-12 -->
        </div><!-- /.row -->

        <div class="row">
            <div class="col-lg-6 pr-0 pr-lg-5">
                <div data-aos="fade-right" data-aos-easing="ease-out-cubic" data-aos-duration="1500">

                    <div class="bike_box">
                        <img src="img/bike.png" alt="" />
                        <h5>Yamaha Tenere 700</h5>
                        <div class="d-flex tag-list">
                            <div class="tag" style="background-color:#2CBF92">800cm3</div>
                            <div class="tag" style="background-color:#FFC400">alt tag</div>
                            <div class="tag" style="background-color:#FF4141">alt tag</div>
                        </div>
                        <p class="bike-description">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                        <a href="rent/selected_bike">Rent this bike</a>
                    </div><!-- /.bike_box -->
                </div>
            </div>
            <div class="col-lg-6 pl-3 pl-lg-5">
                <div data-aos="fade-left" data-aos-easing="ease-out-cubic" data-aos-duration="1500">

                    <div class="bike_box">
                        <img src="img/bike.png" alt="" />
                        <h5>Yamaha Tenere 700</h5>
                        <div class="d-flex tag-list">
                            <div class="tag" style="background-color:#2CBF92">800cm3</div>
                            <div class="tag" style="background-color:#FFC400">alt tag</div>
                            <div class="tag" style="background-color:#FF4141">alt tag</div>
                        </div>
                        <p class="bike-description">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                        <a href="rent/selected_bike">Rent this bike</a>
                    </div><!-- /.bike_box -->

                </div>
            </div>
        </div>

    </div><!-- /.container -->
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