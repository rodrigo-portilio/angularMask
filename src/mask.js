'use stric';

angular.module('skyang.mask', [])
    .directive('skyangMask', function mask() {
        return {
            scope: {
                ngModel: '=',
                skyangMask: '@'
            },
            replace: true,
            link: function(scope, element, attrs) {
                scope.$watch('ngModel', function(newValue, oldValue) {
                    if (newValue !== oldValue) {
                        var text = '';
                        var data = newValue;
                        var c, m, i, x;

                        for (i = 0, x = 1; x && i < scope.skyangMask.length; ++i) {
                            c = data.charAt(i);
                            m = String(scope.skyangMask).charAt(i);

                            switch (String(scope.skyangMask).charAt(i)) {
                                case '9' : if (/\d/.test(c)) {text += c;} else {x = 0;} break;
                                case 'A' : if (/[a-z]/i.test(c)) {text += c;} else {x = 0;} break;
                                case 'N' : if (/[a-z0-9]/i.test(c)) {text += c;} else {x = 0;} break;
                                case 'X' : text += c; break;
                                default  : text += m; break;
                            }
                        }

                        scope.ngModel = text;
                    }
                }, true);
            }
        };

    });
