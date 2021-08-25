@extends('parts.template')
@php($large_header = false)
@section('title', 'Page Title')

@section('content')
<div id="offroad_details_page">
    <a href="#" class="go-top">
        <img src="/img/up_to_top.svg" alt="">
    </a>
    <div class="my_container">
        <div class="row" id="introduction">
            <div class="col-md-12 text-center">
                <h1 class="blue-text underline_title mt-5">Name of the course here</h1>
            </div><!-- /.col-md-12 -->
        </div><!-- /.row -->
        <div class="row">
            <div class="col-md-3"></div>
            <div class="col-md-6 text-center">
                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                    laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi</p>
            </div>
            <div class="col-md-3"></div>
        </div>

        <div class="row align-items-center mt-5 left-right">
            <div class="col-lg-6">
                <img src="/img/biker1.svg" alt="" class="img-fluid">
            </div>
            <div class="col-lg-6 pl-3 pl-lg-5">
                <p class="mb-5  mt-3 mt-lg-0"> “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor
                    incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                </p>

            </div>
        </div>
        <div class="row align-items-center mt-5 left-right">
            <div class="col-lg-6 pr-3 pr-lg-5 text-left text-lg-right right-text">
                <p class="mb-5  mt-3 mt-lg-0"> “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor
                    incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                </p>

            </div>
            <div class="col-lg-6">
                <img src="/img/biker2.svg" alt="" class="img-fluid left-img">
            </div>
        </div>

        <div class="row">
            <div class="col-lg-12">
                <h1 class="text-center blue-text underline_title mt-5 pt-5">
                    Photo gallery
                </h1>
            </div>
        </div>

        <div class="swiper-container photo-swiper">
            <div class="swiper-wrapper">
                <div class="swiper-slide">
                    <a data-fancybox="gallery" href="img/Image28.svg">
                        <img src="img/Image28.svg">
                    </a>
                </div>
                <div class="swiper-slide">
                    <a data-fancybox="gallery" href="img/photo2.svg">
                        <img src="/img/photo2.svg">
                    </a>
                </div>
                <div class="swiper-slide">
                    <a data-fancybox="gallery" href="img/photo3.svg">
                        <img src="/img/photo3.svg">
                    </a>
                </div>
                <div class="swiper-slide">
                    <a data-fancybox="gallery" href="img/photo4.svg">
                        <img src="/img/photo4.svg">
                    </a>
                </div>
                <div class="swiper-slide">
                    <a data-fancybox="gallery" href="img/photo5.svg">
                        <img src="/img/photo5.svg">
                    </a>
                </div>
                <div class="swiper-slide">
                    <a data-fancybox="gallery" href="img/photo1.svg">
                        <img src="/img/photo1.svg">
                    </a>
                </div>
                <div class="swiper-slide">
                    <a data-fancybox="gallery" href="img/photo2.svg">
                        <img src="/img/photo2.svg">
                    </a>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-lg-12">
                <h1 class="text-center blue-text underline_title mt-5 pt-5">
                    Video gallery
                </h1>
            </div>
        </div>

        <div class="swiper-container video-swiper">
            <div class="swiper-wrapper">
                <div class="swiper-slide">
                    <a href="" data-toggle="modal" data-target="#videoModal1">
                        <img src="https://img.youtube.com/vi/N5t0N6vfXIc/0.jpg" />
                        <img src="/img/play.svg" alt="" class="play">
                    </a>
                </div>
                <div class="swiper-slide">
                    <a href="" data-toggle="modal" data-target="#videoModal2">
                        <img src="https://img.youtube.com/vi/N5t0N6vfXIc/0.jpg" />
                        <img src="/img/play.svg" alt="" class="play"></a>
                </div>

            </div>
        </div>
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
                        <iframe src="https://www.youtube.com/embed/N5t0N6vfXIc" frameborder="0"></iframe>
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
                        <iframe src="https://www.youtube.com/embed/N5t0N6vfXIc" frameborder="0"></iframe>
                    </div>

                </div>
            </div>
        </div>
        <div class="row mt-5">
            <div class="col-md-12 text-center">
                <h1 class="blue-text mt-5 mb-5">Interested? Request and offer</h1>
            </div><!-- /.col-md-12 -->
        </div><!-- /.row -->

        <div class="row">
            <div class="col-lg-6">
                <div class="form-group">
                    <label for="nume">Nume, Prenume</label>
                    <input type="text" class="form-control" id="nume">
                </div>
                <div class="form-group">
                    <label for="email">Email</label>
                    <input type="email" class="form-control" id="email">
                </div>
                <div class="form-group">
                    <label for="city">Area/city</label>
                    <input type="text" class="form-control" id="city">
                </div>

            </div>
            <div class="col-lg-6">
                <div class="form-group">
                    <label for="telefon">Telefon</label>
                    <input type="text" class="form-control" id="telefon">
                </div>
                <div class="row">
                    <div class="col-lg-6">
                        <div class="form-group">
                            <label for="start_datepicker">Starting date</label>
                            <input type='text' class="form-control datepicker-here custom-datepicker"
                                id="start_datepicker" data-position="bottom right" data-language='en' />
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="form-group">
                            <label for="end_datepicker">Returning date</label>

                            <input type='text' class="form-control datepicker-here custom-datepicker"
                                id="end_datepicker" data-position="bottom right" data-language='en' />
                        </div>
                    </div>
                </div><!-- end row-->
                <div class="form-group">
                    <label for="tour_type">Tour type</label>
                    <select class="form-control" id="tour_type">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </select>
                </div>


            </div> <!-- end col-lg-6-->

        </div> <!-- end row-->
        <div class="row">
            <div class="col-lg-12">
                <div class="form-group">
                    <label for="mesaj">Mesaj</label>
                    <textarea class="form-control" id="mesaj" rows="3"></textarea>
                </div>
            </div>
        </div>
        <div class="row mt-5">
            <div class="col-lg-8">
                <div class="d-block">
                    <input type="checkbox" id="acord" class="rounded-checkbox" />
                    <p class="mb-0 form-acord">I agree my datas will be colected in the database as is writter
                        in <a href="/politica">Privacy Policy</a></p>
                </div> <!-- end div d-block -->
            </div> <!-- end col-md-6 -->
            <div class="col-lg-4">
                <div class="blue_border_btn float-xl-right float-lg-left mb-5">
                    Send message
                </div>
            </div> <!-- end col-md-6 -->
        </div> <!-- end row -->

        <div class="row mt-5">
            <div class="col-md-12 text-center">
                <h1 class="blue-text underline_title">Other offroad courses</h1>
            </div><!-- /.col-md-12 -->
        </div><!-- /.row -->
        <div class="row" id="other_tours">
            <div class="col-md-4 poza">
                <img src="/img/road.svg" class="poza" alt="image1" />
                <div class="div_holder">
                    <a href="#" class="tour-description">Dicover Transalpina</a>
                </div>
            </div><!-- /.col-md-4 -->
            <div class="col-md-4 poza">
                <img src="/img/bird.svg" class="poza" alt="image2" />
                <div class="div_holder">
                    <a href="#" class="tour-description">Discover Delta Danube Tour and more information
                    </a>
                </div>
            </div><!-- /.col-md-4 -->
            <div class="col-md-4 poza">
                <img src="/img/bike.svg" class="poza" alt="image3" />
                <div class="div_holder">
                    <a href="#" class="tour-description">Romania bike tour</a>
                </div>
            </div><!-- /.col-md-4 -->

        </div><!-- /.row -->
        <div class="swiper-container other_tours_swiper">
            <div class="swiper-wrapper">
                <div class="swiper-slide">
                    <img src="/img/road.svg" class="img-fluid" alt="" />
                    <div class="div_holder">
                        <a href="#" class="tour-description">Dicover Transalpina</a>
                    </div>
                </div>
                <div class="swiper-slide">
                    <img src="/img/bird.svg" class="img-fluid" alt="" />
                    <div class="div_holder">
                        <a href="#" class="tour-description">Dicover Transalpina</a>
                    </div>
                </div>
            </div>
            <div class="swiper-button-next swiper-button-next-other"></div>
            <div class="swiper-button-prev swiper-button-prev-other"></div>
        </div>
    </div>
</div>
@endsection

@push('scripts')

<script>
    var swiper = new Swiper('.swiper-container.photo-swiper', {
        slidesPerView: 2,
        spaceBetween: 20,
        loop: true,
        centeredSlides: true,
        grabCursor: true,
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
    var swiper2 = new Swiper('.swiper-container.video-swiper', {
        slidesPerView: 2,
        spaceBetween: 20,
        loop: true,
        centeredSlides: true,
        grabCursor: true,
        breakpoints: {

            1024: {
                slidesPerView: 2,
                centeredSlides: false,

            },
        }
    });
    var swiper3 = new Swiper('.swiper-container.other_tours_swiper', {
        slidesPerView: 1,
        spaceBetween: 30,
        slidesPerGroup: 1,
        loop: false,
        navigation: {
            nextEl: '.swiper-button-next-other',
            prevEl: '.swiper-button-prev-other',
        },
    });
</script>
@endpush