<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="">
    <link rel="icon" type="image/png" sizes="16x16" href="{{ asset('images/backoffice/favicon.png') }}">
    <title>Sabanastays - Dashboard</title>
    <link href="{{ asset('css/backoffice/backoffice.css') }}" rel="stylesheet">
</head>

<body>
    <!-- Preloader -->
    <div class="preloader">
        <div class="cssload-speeding-wheel"></div>
    </div>
    <div id="wrapper">
        <!-- Navigation -->
        @include('backoffice/header')

        <!-- Left navbar-header -->
        @include('backoffice/menu')

        <!-- Page Content -->
        @include('backoffice/content')

    </div>
    <script type="text/javascript" src="{{ asset('js/backoffice.js') }}"></script>
</body>

</html>
