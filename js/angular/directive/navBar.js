
/**
 * @ngdoc directive
 * @name ionNavBar
 * @module ionic
 * @delegate ionic.service:$ionicNavBarDelegate
 * @restrict E
 *
 * @description
 * If we have an {@link ionic.directive:ionNavView} directive, we can also create an
 * `<ion-nav-bar>`, which will create a topbar that updates as the application state changes.
 *
 * We can add a back button by putting an {@link ionic.directive:ionNavBackButton} inside.
 *
 * We can add buttons depending on the currently visible view using
 * {@link ionic.directive:ionNavButtons}.
 *
 * Note that the ion-nav-bar element will only work correctly if your content has an
 * ionView around it.
 *
 * @usage
 *
 * ```html
 * <body ng-app="starter">
 *   <!-- The nav bar that will be updated as we navigate -->
 *   <ion-nav-bar class="bar-positive">
 *   </ion-nav-bar>
 *
 *   <!-- where the initial view template will be rendered -->
 *   <ion-nav-view>
 *     <ion-view>
 *       <ion-content>Hello!</ion-content>
 *     </ion-view>
 *   </ion-nav-view>
 * </body>
 * ```
 *
 * @param {string=} delegate-handle The handle used to identify this navBar
 * with {@link ionic.service:$ionicNavBarDelegate}.
 * @param align-title {string=} Where to align the title of the navbar.
 * Available: 'left', 'right', 'center'. Defaults to 'center'.
 * @param {boolean=} no-tap-scroll By default, the navbar will scroll the content
 * to the top when tapped.  Set no-tap-scroll to true to disable this behavior.
 *
 * </table><br/>
 *
 * ### Alternative Usage
 *
 * Alternatively, you may put ion-nav-bar inside of each individual view's ion-view element.
 * This will allow you to have the whole navbar, not just its contents, transition every view change.
 *
 * This is similar to using a header bar inside your ion-view, except it will have all the power of a navbar.
 *
 * If you do this, simply put nav buttons inside the navbar itself; do not use `<ion-nav-buttons>`.
 *
 *
 * ```html
 * <ion-view title="myTitle">
 *   <ion-nav-bar class="bar-positive">
 *     <ion-nav-back-button>
 *       Back
 *     </ion-nav-back-button>
 *     <div class="buttons primary-buttons">
 *       <button class="button">
            Button
 *       </button>
 *     </div>
 *   </ion-nav-bar>
 * </ion-view>
 * ```
 */
IonicModule
.directive('ionNavBar', ['$ionicConfig', function($ionicConfig) {
  return {
    restrict: 'E',
    controller: '$ionNavBar',
    scope: true,
    compile: function(tElement) {
      tElement.attr('class', 'nav-bar-container');
      ionic.DomUtil.cachedAttr(tElement, 'nav-bar-transition', $ionicConfig.navBar.transition());

      return function($scope, $element, $attr, navBarCtrl) {
        navBarCtrl.init();
      };
    }
  };
}]);

