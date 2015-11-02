# angularMask
Input mask using directive

copy the maskDir.js to your Directive

####using 
var app = angular.module('app', []); // You app

#####Declare of mask
app.directive("maskDir", require('./directive/maskDir'));

###Example:
MASK
input type="text" class="form-control" mask-dir="999.999.999-99"

MONEY
input type="text" class="form-control" mask-dir="money"

You like? Donate in PAYPAL to rodrigo.portilio@outlook.com
