<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use SMSGateway;

class SmsController extends Controller
{
    public function show()
    {
        return view(
        	'smsform',
        	[
                'devices' => json_encode(SMSGateway::getDevices())
            ]
        );
    }

    public function send(Request $request)
    {
        $number = $request->input('cellphone');
        $message = $request->input('textcontent');

        error_log($number);
        error_log($message);
        if ($number && $message)
        {
            // Sendind a message
			$deviceID = 91207;
			$message =  SMSGateway::sendMessageToNumber($number, $message, $deviceID);
            error_log(json_encode($message));
        }
        return redirect('sms');
    }
}
