@extends('parts.template')
@php($large_header = false)
@section('title', 'Page Title')

@section('content')
<div id="politica_page">
    <a href="#" class="go-top">
        <img src="/img/up_to_top.svg" alt="">
    </a>
    <div class="my_container">
        <div class="row">
            <div class="col-md-12 text-center mt-5 ">
                <h1 class="blue-text underline_title">
                    Privacy Policy
                </h1>
            </div><!-- /.col-md-12 -->
        </div><!-- /.row -->

        <div id="page_content">

            <div class="row">
                <div class="col-md-12">
                    <h5>
                        1. informatii generale
                    </h5>
                    <p>
                        Orice utilizare a prezentei pagini web furnizate de RAMS , este supusa Termenilor si conditiilor
                        de utilizare. Aceşti Termeni de utilizare pot fi modificaţi sau înlocuiţi de alţi termeni şi
                        condiţii. Site-ul Pantheon Hotels si toate informațiile conținute sunt proprietatea Pantheon
                        Hotels și nu pot fi valorificate, copiate sau reproduse în niciun fel, pe niciun suport fără
                        acordul prealabil scris al Pantheon Hotels.
                    </p>
                </div><!-- /.col-md-12 -->
            </div><!-- /.row -->

            <div class="row">
                <div class="col-md-12">
                    <h5>
                        1. informatii generale
                    </h5>
                    <p>
                        Orice utilizare a prezentei pagini web furnizate de RAMS , este supusa Termenilor si conditiilor
                        de utilizare. Aceşti Termeni de utilizare pot fi modificaţi sau înlocuiţi de alţi termeni şi
                        condiţii. Site-ul Pantheon Hotels si toate informațiile conținute sunt proprietatea Pantheon
                        Hotels și nu pot fi valorificate, copiate sau reproduse în niciun fel, pe niciun suport fără
                        acordul prealabil scris al Pantheon Hotels.
                    </p>
                </div><!-- /.col-md-12 -->
            </div><!-- /.row -->

            <div class="row">
                <div class="col-md-12">
                    <h5>
                        1. informatii generale
                    </h5>
                    <p>
                        Orice utilizare a prezentei pagini web furnizate de RAMS , este supusa Termenilor si conditiilor
                        de utilizare. Aceşti Termeni de utilizare pot fi modificaţi sau înlocuiţi de alţi termeni şi
                        condiţii. Site-ul Pantheon Hotels si toate informațiile conținute sunt proprietatea Pantheon
                        Hotels și nu pot fi valorificate, copiate sau reproduse în niciun fel, pe niciun suport fără
                        acordul prealabil scris al Pantheon Hotels.
                    </p>
                </div><!-- /.col-md-12 -->
            </div><!-- /.row -->

            <div class="row">
                <div class="col-md-12">
                    <h5>
                        1. informatii generale
                    </h5>
                    <p>
                        Orice utilizare a prezentei pagini web furnizate de RAMS , este supusa Termenilor si conditiilor
                        de utilizare. Aceşti Termeni de utilizare pot fi modificaţi sau înlocuiţi de alţi termeni şi
                        condiţii. Site-ul Pantheon Hotels si toate informațiile conținute sunt proprietatea Pantheon
                        Hotels și nu pot fi valorificate, copiate sau reproduse în niciun fel, pe niciun suport fără
                        acordul prealabil scris al Pantheon Hotels.
                    </p>
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
                    <div class="info_descriere">Adventure rides with Yamaha Tenere 700, Yamaha UTV side-by-side
                        YXZ1000R and 4x4s</div>
                </div>
            </div>
            <div class="col-lg-4 px-0">
                <div
                    class="bg-yellow py-3 h-100 d-flex flex-lg-column justify-content-between justify-content-lg-around align-items-center">
                    <img src="img/gps.svg" alt="" class="px-3">
                    <div class="info_descriere blue-text ">15 minutes from the International Bucharest - Otopeni
                        Airport, Romania.</div>
                </div>
            </div>
            <div class="col-lg-4 px-0">
                <div class="bg-blue py-3 h-100 d-flex flex-lg-column justify-content-around align-items-center"
                    id="info3" style="border-radius: 0px 10px 10px 0px;">
                    <img src="img/phone.svg" alt="" class="px-3">
                    <div class="info_descriere">Contact us and get a quote and availability for your next
                        trip in Bucharest, Romania. </div>
                </div>
            </div>
        </div> <!-- end row-->
    </div>

    <section id="newsletter_section">
        <div class="overlay"></div>
        <div class="container">
            <div class="row">
                <div class="col-lg-3"></div>
                <div class="col-lg-6 text-center d-flex flex-column">
                    <h1 class="text-white">Our newsletter</h1>
                    <p class="text-white">Subscribe to our monthly newsletter in order to be up to date with our latest
                        news.</p>
                    <input type='text' class="form-control" id="newsletter" placeholder="Your name here" />
                    <div class="d-block mt-3 ">
                        <input type="checkbox" id="newsletter_acord" class="rounded-checkbox" />
                        <label for="newsletter_acord" class="mb-0 form-acord">I agree my datas will be colected in the
                            database as is writter
                            in <a href="/politica">Privacy Policy</a></label>
                    </div> <!-- end div d-block -->
                    <div class="subscribe_btn align-self-center">
                        Subscribe
                    </div>
                </div> <!--  end col-md-8-->
                <div class="col-lg-3"></div>
            </div> <!--  end row-->
        </div> <!--  end container-->
    </section> <!--  end section newsletter-->

</div><!-- /#terms_page -->
@endsection