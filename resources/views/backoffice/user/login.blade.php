<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="description" content="">
        <meta name="author" content="">
        <link rel="icon" type="image/png" sizes="16x16" href="{{ asset('images/backoffice/favicon.png') }}">
        <title>Sabanastays - Login</title>
        <link href="{{ asset('css/backoffice/backoffice.css') }}" rel="stylesheet">
    </head>
    <body>

        <script>
            var dashboardlink = '{{ route("dashboard") }}';
        </script>

        <!-- Loadinf gor Ajax call -->
        <div id="loader">
            <div></div>
        </div>

        <section id="wrapper" class="login-register">
            <div class="login-box">
                <div class="white-box">
                    <form class="form-horizontal form-material" id="loginform" action="index.html">
                        @include('messages/error')
                        <h3 class="box-title m-b-20">Sign In</h3>
                        <div class="form-group ">
                            <div class="col-xs-12">
                                <input class="form-control" type="email" required="" name="email" placeholder="Username">
                            </div>
                        </div>
                        <div class="form-group">
                            <div class="col-xs-12">
                                <input class="form-control" type="password" required="" name="password" placeholder="Password">
                            </div>
                        </div>
                        <div class="form-group">

                        <div class="form-group text-center m-t-20">
                            <div class="col-xs-12">
                                <button class="btn btn-info btn-lg btn-block text-uppercase waves-effect waves-light" type="submit">Log In</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </section>

        <script type="text/javascript" src="{{ asset('js/adminlogin.js') }}"></script>
    </body>
</html>
