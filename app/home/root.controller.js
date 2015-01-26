cubeApp.controller('RootController', [ '$scope', function($scope) {
  $scope.ollList = {
    edge: [
      { name: 'Opposite', image: 'opposite.png', algorithms: ["F (R U R' U') F'"] },
      { name: 'Adjacent', image: 'adjacent.png', algorithms: ["f (R U R' U') f'"] },
      { name: 'None', image: 'None.png', algorithms: ["[F (R U R' U') F'][f (R U R' U') f']"] }
    ],
    corner: [
      { name: 'Sune', image: 'Sune.png', algorithms: ["(R U)(R' U)(R U2 R')"] },
      { name: 'Anti-Sune', image: 'Anti-Sune.png', algorithms: ["(R' U' R) (U' R' U2 R)"] },
      { name: 'Car', image: 'Car.png', algorithms: ["F (R U R' U')(R U R' U')(R U R' U') F'"] },
      { name: 'Blinker', image: 'Blinker.png', algorithms: ["[f (R U R' U') f'][F (R U R' U') F']", "(R U2)(R2 U')(R2 U')(R2 U2 R)"] },
      { name: 'Headlights', image: 'Headlights.png', algorithms: ["(R2 D)(R' U2)(R D')(R' U2 R')"] },
      { name: 'Chameleon', image: 'Chemeleon.png', algorithms: ["(r U R' U')(r' F R F')"] },
      { name: 'Bowtie', image: 'Bowtie.png', algorithms: ["F'(r U R' U')(r' F R)"] }
    ]
  };

  $scope.pllList = {
    corner: [
      { name: 'CW Corner 3-Cycle', image: 'cw-corner-3-cycle.png', algorithms: ["x [(R' U R') D2] [(R U' R') D2] R2"] },
      { name: 'E-Perm', image: 'e-perm.png', algorithms: ["x' [(R U' R') D (R U R')] u2 [(R' U R) D (R' U' R)]"] },
    ],
    edge: [
      { name: 'CW Edge 3-Cycle', image: 'cw-edge-3-cycle.png', algorithms: ["R2 U (R U R' U')(R' U')(R' U R')"] },
      { name: 'CCW Edge 3-Cycle', image: 'ccw-edge-3-cycle.png', algorithms: ["(R U')(R U R U)(R U')(R' U' R2)"] },
      { name: 'H-Perm', image: 'h-perm.png', algorithms: ["(M2 U) (M2 U2 M2) (U M2)"] },
      { name: 'Z-Perm', image: 'z-perm.png', algorithms: ["(M2 U M2 U) M' (U2 M2 U2 M' U2)"] }
    ]
  };
}]);
