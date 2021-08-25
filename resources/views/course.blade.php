@extends('parts.template')
@php($large_header = false)
@section('title', 'Page Title')

@section('content')
<div id="course_page">
    <a href="#" class="go-top">
        <img src="/img/up_to_top.svg" alt="">
    </a>
    <div class="my_container">
        <div class="row">
            <div class="col-lg-12">
                <h1 class="text-center blue-text underline_title mt-5">{{__('site.mooto-courses')}}</h1>
            </div>
        </div>
        <!-- categorii cursuri -->
        @if($categories)
        <div class="d-flex justify-content-center align-items-center mb-5">
                @foreach($categories as $category)
                <div class="course_category" category = "{{$category->id}}">{{$category->name}} </div>
                @endforeach
            </div>
        @endif
       
        @if($courses)
            <div class = "courses-container">
                @foreach($courses as $course)
                <div class="course-element col-lg-4 category-{{$course->id_category}}">
                    <div class="course">
                        <img src="{{ route('thumb', ['width:700', $course->image1]) }}" alt="" class="img-fluid">
                        <a href="/course-detail/{{$course->slug}}">
                            <div class="tour-description">{{$course->name}}</div>
                        </a>
                    </div>
                </div>
                @endforeach
            </div>
        @else
            <div class = "nu-exista-cursuri">{{__('site.no-courses')}}</div>
        @endif
    </div>
</div>
@endsection

@push('scripts')

<script>
    function selectCategory() {
        $('.course_category').toggleClass('category_selected');
    }
</script>
<script>
    $('.course_category').click(function(){
      var category = $(this).attr('category');
      $('.course_category').removeClass('category_selected');
        var evenimente_afisate = '.category-' + category;
      $('.course-element').hide();
      $(evenimente_afisate).fadeIn();
      $(this).addClass('category_selected');
    });
</script>
@endpush