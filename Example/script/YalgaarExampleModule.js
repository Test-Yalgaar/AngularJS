var app = angular.module('demo', ['YalgaarAngular']);

app.controller('demoCntrl', function ($scope, Yalgaar) {
    $scope.chkSSL = false;
    $scope.txtClientKey = "";
    $scope.txtUUID = "YalgaarANJSUUID";
    $scope.txtChannel = "YalgaarChannel";
    $scope.ConnectToYalgaar = function () {
        var data = {
            ClientKey: $scope.txtClientKey,
            SSL: $scope.chkSSL,
            UUID: $scope.txtUUID,
        };
        Yalgaar.ConnectToYalgaar(data, Callback = function (callbackdata) {
            console.log(callbackdata);
        }, Error = function (errordata) {
            console.log(errordata);
        });
    }

    $scope.SubscribeMessage = function () {
        Yalgaar.SubscribeMessage($scope.txtChannel, Callback = function (Message, channel, acknowledgment) {
            if (Message != "") {
                $('#txtList').append(Message + '\n');
            }
        }, CallbackPresence = function (message, channel, acknowledgment) {
			$('#txtList').append(message + '\n');
        });
    }

    $scope.UnsubscribeMessage = function () {
        Yalgaar.UnsubscribeMessage($scope.txtChannel, Callback = function (acknowledgment) {
		$('#txtList').append(acknowledgment + '\n');
        });
    }

    $scope.PublishMessage = function () {
        Yalgaar.PublishMessage($scope.txtChannel, $scope.txtMsg, Callback = function (acknowledgment) {
            console.log(acknowledgment);
        })
    }
	
    $scope.Disconnect = function () {
        Yalgaar.Disconnect();
    }
    $scope.Clear = function () {
        $('#txtList').html('');
        $scope.txtList = "";
    }
});


