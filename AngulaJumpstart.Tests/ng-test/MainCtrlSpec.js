
/// <reference path="../../angulajumpstart/scripts/angular.js" />
/// <reference path="../../angulajumpstart/scripts/angular-mocks.js" />
/// <reference path="../../AngulaJumpstart/Scripts/ng-scripts/MainCtrl.js"/>

describe("Controller: MainCtrl", function () {
  beforeEach(module("MyApp"));
  var MainCtrl, scope;
  beforeEach(inject(function($controller) {
    scope = {};
    MainCtrl = $controller("MainCtrl", {
      $scope: scope
    });
  }));
  it("should have scope defined", function() {
    expect(scope).toBeDefined();
  });
});

