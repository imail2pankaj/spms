@extends('emails.layout.app')
@section('content')
    <p>
        Hello {{$user['first_name']}},<br/><br/>

        Your account has been created in SPMS. Use below credentials to login to SPMS<br/><br/>

        <b>Email: </b>{{$user['email']}}<br/>
        <b>Password: </b>{{$user['password']}}<br/><br/>

        Click on <a href="{{route("login")}}">Login</a> to login to access your account.<br/><br/>

        With Regards,<br/>
        Scenic IT Solutions
    </p>
@endsection
