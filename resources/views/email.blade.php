<!DOCTYPE html PUBLIC “-//W3C//DTD XHTML 1.0 Transitional//EN” “https://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd”>

<html xmlns=“https://www.w3.org/1999/xhtml”>

<head>

<title>Test Email Sample</title>

<meta http–equiv=“Content-Type” content=“text/html; charset=UTF-8” />

<meta http–equiv=“X-UA-Compatible” content=“IE=edge” />
<meta name="viewport" content="width=device-width, initial-scale=1,  user-scalable=no" />
<style type="text/css">
    @font-face {
        font-family: "Montserrat-SemiBold";
        src: url('{{config('app.url')}}/fonts/Montserrat-SemiBold.ttf');
      }
      @font-face {
        font-family: "OpenSans-Light";
        src: url('{{config('app.url')}}/fonts/OpenSans-Light.ttf');
      }
      @font-face {
        font-family: "OpenSans-Regular";
        src: url('{{config('app.url')}}/fonts/OpenSans-Regular.ttf');
      }
      @font-face {
        font-family: "OpenSans-SemiBold";
        src: url('{{config('app.url')}}/fonts/OpenSans-SemiBold.ttf');
      }
      @font-face {
        font-family: "Oswald-Regular";
        src: url('{{config('app.url')}}/fonts/Oswald-Regular.ttf');
      }
</style>

<body>

</body>
<?php
$facebook = App\Http\Controllers\HomeController::getData('facebook');
$instagram = App\Http\Controllers\HomeController::getData('instagram');
$youtube = App\Http\Controllers\HomeController::getData('youtube');

$phone = App\Http\Controllers\HomeController::getData('phone');
$email = App\Http\Controllers\HomeController::getData('email');
$location = App\Http\Controllers\HomeController::getData('location');

?>
    <div style = "display: block;margin:0 auto;padding:21px 15px;position:relative;width:95%;">
        <div style = "display:flex;flex-direction:row;justify-content:space-between;">
            <a style="width:347px;height:35px;" href = "{{config('app.url')}}"><img src = "{{config('app.url')}}/img/logo.png" style="width:100%;height:100%;"></a>
            <div style = "display:flex;flex-direction:row;justify-content:center;">
                <a target = "_blank" href = "{{$facebook->text}}" style = "display:block;width:27px;height:27px;margin-right:20px;"><img src = "{{config('app.url')}}/img/facebook.png" style="width:100%;height:100%;"></a>
                <a target = "_blank" href = "{{$youtube->text}}" style = "display:block;width:27px;height:27px;margin-right:20px;"><img src = "{{config('app.url')}}/img/youtube.png" style="width:100%;height:100%;"></a>
                <a target = "_blank" href = "{{$instagram->text}}" style = "display:block;width:27px;height:27px;margin-right:20px;"><img src = "{{config('app.url')}}/img/instagram.png" style="width:100%;height:100%;"></a>
            </div>
        </div>
        <div style = "width:100%;height:3px;background-color:#C7C7C7;border-radius:20px;margin-top:20px;"></div>
        

        <div style = "display:flex;flex-direction:column;margin-top:40px;margin-bottom:40px;">
            <div style = 'font-family: "Montserrat-SemiBold";font-size:36px;color:#182877'>Hello, Alexandru</div>
            <div style = "width:105px;height:4px;border-radius:50px;background-color:#FFDC47;margin-top:10px;"></div>
            <div style = 'font-family: "OpenSans-Regular";font-size:22px;color:#5F5F5F;margin-top:20px;margin-bottom:40px;width:50%;'>{{__('site.request')}}</div>

            <div style ='font-family: "OpenSans-Regular";font-size:12px;color:#5F5F5F;'>{{__('site.name')}}</div>
            <div style = "width:23px;height:3px;background-color:#FFDC47;"></div>
            <div style = 'font-family: "OpenSans-SemiBold";font-size:16px;color:#5F5F5F;margin-top:5px;margin-bottom:30px;'>Alexandru Angheliu</div>

            <div style ='font-family: "OpenSans-Regular";font-size:12px;color:#5F5F5F;'>{{__('site.phone')}}</div>
            <div style = "width:23px;height:3px;background-color:#FFDC47;"></div>
            <div style = 'font-family: "OpenSans-SemiBold";font-size:16px;color:#5F5F5F;margin-top:5px;margin-bottom:30px;'>Alexandru Angheliu</div>

            <div style ='font-family: "OpenSans-Regular";font-size:12px;color:#5F5F5F;'>Email</div>
            <div style = "width:23px;height:3px;background-color:#FFDC47;"></div>
            <div style = 'font-family: "OpenSans-SemiBold";font-size:16px;color:#5F5F5F;margin-top:5px;margin-bottom:30px;'>Alexandru Angheliu</div>

            <div style ='font-family: "OpenSans-Regular";font-size:12px;color:#5F5F5F;'>{{__('site.area')}}</div>
            <div style = "width:23px;height:3px;background-color:#FFDC47;"></div>
            <div style = 'font-family: "OpenSans-SemiBold";font-size:16px;color:#5F5F5F;margin-top:5px;margin-bottom:30px;'>Alexandru Angheliu</div>

            


            <div style = 'display:flex;flex-direction:row;justify-content:flex-start;margin-bottom:30px;'>
                <div style = 'margin-right:40px;'>
                    <div style ='font-family: "OpenSans-Regular";font-size:12px;color:#5F5F5F;'>{{__('site.startind-date')}}</div>
                    <div style = "width:23px;height:3px;background-color:#FFDC47;"></div>
                    <div style = 'font-family: "OpenSans-SemiBold";font-size:16px;color:#5F5F5F;margin-top:5px;'>Alexandru Angheliu</div>
                </div>

                <div>
                    <div style ='font-family: "OpenSans-Regular";font-size:12px;color:#5F5F5F;'>{{__('site.ending-date')}}</div>
                    <div style = "width:23px;height:3px;background-color:#FFDC47;"></div>
                    <div style = 'font-family: "OpenSans-SemiBold";font-size:16px;color:#5F5F5F;margin-top:5px;'>Alexandru Angheliu</div>
                </div>
            </div>

            <div style ='font-family: "OpenSans-Regular";font-size:12px;color:#5F5F5F;'>{{__('site.tour-type')}}</div>
            <div style = "width:23px;height:3px;background-color:#FFDC47;"></div>
            <div style = 'font-family: "OpenSans-SemiBold";font-size:16px;color:#5F5F5F;margin-top:5px;margin-bottom:30px;'>Alexandru Angheliu</div>

            <div style ='font-family: "OpenSans-Regular";font-size:12px;color:#5F5F5F;'>{{__('site.message')}}</div>
            <div style = "width:23px;height:3px;background-color:#FFDC47;"></div>
            <div style = 'font-family: "OpenSans-SemiBold";font-size:16px;color:#5F5F5F;margin-top:5px;margin-bottom:30px;'>Alexandru Angheliu</div>

        </div>


        <div style = "width:100%;height:3px;background-color:#C7C7C7;border-radius:20px;margin-top:20px;margin-bottom:40px;"></div>
        <div style = "display:flex;flex-direction:row;justify-content:space-between;align-items:center">
            <div style = "display:flex;flex-direction:row;justify-content:flex-start;align-items:center;width:33%;">
                <img src = "{{config('app.url')}}/img/email.png" style = "width:46px;height:42px;margin-right:20px;">
                <div style = "display:flex;flex-direction:column;">
                    <div style = 'font-family: "Montserrat-SemiBold";color:#5F5F5F;font-size:22px;'>{{__('site.footer-email')}}</div>
                    <a href= "mailto:{{$email->text}}" style = 'font-family: "OpenSans-Regular";font-size:18px;color:#5F5F5F;text-decoration:none;'>{{$email->text}}</a>
                </div>
            </div>
            <div style = "display:flex;flex-direction:row;justify-content:flex-start;align-items:center;width:33%;">
                <img src = "{{config('app.url')}}/img/phone.png" style = "width:46px;height:42px;margin-right:20px;">
                <div style = "display:flex;flex-direction:column;">
                    <div style = 'font-family: "Montserrat-SemiBold";color:#5F5F5F;font-size:22px;'>{{__('site.footer-call')}}</div>
                    <a href= "tel:{{$phone->text}}" style = 'font-family: "OpenSans-Regular";font-size:18px;color:#5F5F5F;text-decoration:none;'>{{$phone->text}}</a>
                </div>
            </div>
            <div style = "display:flex;flex-direction:row;justify-content:flex-start;align-items:center;width:33%;">
                <img src = "{{config('app.url')}}/img/pin.png" style = "width:46px;height:42px;margin-right:10px;object-fit:contain;">
                <div style = "display:flex;flex-direction:column;">
                    <div style = 'font-family: "Montserrat-SemiBold";color:#5F5F5F;font-size:22px;'>{{__('site.footer-location')}}</div>
                    <div style = 'font-family: "OpenSans-Regular";font-size:18px;color:#5F5F5F;'>{{$location->text}}</div>
                </div>
            </div>
        </div>
        <a style="width:347px;height:35px;" href = "{{config('app.url')}}"><img src = "{{config('app.url')}}/img/logo.svg" style="width:303px;height:31px;margin-top:40px;"></a>
    </div>
</head>