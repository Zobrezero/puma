<!doctype html>
<html lang="{{ app()->getLocale() }}">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>SMS - PUMA</title>
    </head>
    <body>
        <strong>enviar sms</strong>
        <form action="/send" method="GET">
            <input type="number" name="cellphone" style="width: 100%" value="2944377826">
            <textarea name="textcontent" id="" cols="30" rows="10"></textarea>
            <button type="submit">enviar</button>
        </form>

        {{$devices}}
    </body>
</html>
