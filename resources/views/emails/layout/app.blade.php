<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{{config('app.name')}}</title>
</head>
<body style="font-family: 'Montserrat', sans-serif;font-size:14px;line-height:1.8;color: #272829;border:1px #F68B1F solid; width:100%; max-width:600px;margin:20px auto;min-height:200px;border-radius:10px;box-shadow:2px 2px 2px #F68B1F">
    @include("emails.layout.header")
    <div style="padding: 10px;">
        @yield('content')
    </div>
    @include("emails.layout.footer")
</body>
</html>