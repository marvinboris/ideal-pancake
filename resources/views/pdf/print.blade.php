<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
    <style>
        html,
        body {
            width: 210mm;
            height: 297mm;
            padding: 0;
            margin: 0;
            box-sizing: border-box;
        }

        body {
            padding: 15px;
            padding-top: 100px;
            padding-left: 100px;
            font-size: 1rem;
            background: white;
        }
        
        .row, .d-flex {
            display: -webkit-box; /* wkhtmltopdf uses this one */
            display: -webkit-flex;
            -webkit-box-pack: start; /* wkhtmltopdf uses this one */
        }

        .justify-content-end {
            -webkit-justify-content: end;
            -webkit-box-pack: end;
            justify-content: flex-end;
        }

        .align-items-center {
            -webkit-align-items: center;
            align-items: center;
        }
    </style>
</head>

<body>
    <div class="bg-white mx-auto">
        <div class="row justify-content-between align-items-center mb-5">
            <div class="col-7">
                <div class="text-green text-xx-large text-600 mb-4">Invoice</div>
            
                <div class="mb-3">NO : {{ $no }}</div>
                <div class="mb-3"><div class="d-inline-block" style="width: 100px">Account No</div> : #{{ $no }}</div>
                <div class="mb-3"><div class="d-inline-block" style="width: 100px">Date</div> : {{ $date }}</div>
            
                <div class="text-700 text-large mt-5">Grand Total</div>
                <div class="d-flex text-green">
                    <div class="pr-3 text-large">$</div>
                    <div class="text-xx-large text-600">{{ $total_amount }}</div>
                </div>
            </div>
    
            <div class="col-5 pt-4">
                <div class="text-large mb-2">Invoice to</div>
                <div class="text-700 text-large mb-4">{{ $customer['name'] }}</div>
    
                <div class="mb-2">{{ $customer['address'] }}</div>
                <div class="mb-4">{{ $customer['country'] }}</div>
            
                <div class="mb-2">P : {{ $customer['phone'] }}</div>
                <div class="mb-2">M : {{ $customer['email'] }}</div>
            </div>
        </div>
    
        <div class="row border-top border-bottom text-large text-green text-500 mb-2 pb-2">
            <div class="py-3 border-bottom col-6 border-right">Item Descriptions</div>
            <div class="py-3 border-bottom col-2 text-center border-right">Qty</div>
            <div class="py-3 border-bottom col-2 text-center border-right">Price</div>
            <div class="py-3 border-bottom col-2 text-center">Total</div>
        </div>
    
        @foreach ($tasks as $task)
        <div class="row border-bottom">
            <div class="py-3 col-6 border-right">
                <div class="text-700">{{ $task['title'] }}</div>
                {{ $task['description'] }}
            </div>
            <div class="py-3 col-2 text-center border-right">{{ $task['pivot']['quantity'] }}</div>
            <div class="py-3 col-2 text-center border-right">{{ $task['pivot']['price'] }}</div>
            <div class="py-3 col-2 text-center">{{ $task['pivot']['quantity'] * $task['pivot']['price'] }}</div>
        </div>
        @endforeach
    
        <div class="text-large text-700">
            <div class="row justify-content-end">
                <div class="border-bottom col-4 d-flex justify-content-end align-items-center border-right py-3">Subtotal</div>
                <div class="border-bottom col-2 text-center py-3">$ {{ $subtotal }}</div>
            </div>
            <div class="row justify-content-end">
                <div class="border-bottom col-4 d-flex justify-content-end align-items-center border-right py-3">Tax</div>
                <div class="border-bottom col-2 text-center py-3">$ {{ $tax }}</div>
            </div>
            <div class="row justify-content-end">
                <div class="border-bottom col-4 d-flex justify-content-end align-items-center border-right py-3">Discounts</div>
                <div class="border-bottom col-2 text-center py-3">$ {{ $discount }}</div>
            </div>
            <div class="row justify-content-end text-green">
                <div class="border-bottom col-4 d-flex justify-content-end align-items-center border-right py-3">Grand Total</div>
                <div class="border-bottom col-2 text-center py-3">$ {{ $total_amount }}</div>
            </div>
        </div>
    </div>
</body>

</html>