angular.module('movieDB')
    .controller('ListController', ListController)
    .controller('FormController', FormController)
    .controller('DeleteController', DeleteController);

ListController.$inject = ['dataFactory'];
function ListController (dataFactory) {
    this.movies = dataFactory.getAll();
}

FormController.$inject = ['$state', '$stateParams', 'dataFactory'];
function FormController ($state, $stateParams, dataFactory) {
    this.title =  '';
    this.year = '';

    if($stateParams.id) {
        dataFactory.read({id: $stateParams.id}).$promise.then(function(movie) {
            this.title = movie.title;
            this.year = movie.year;
        }.bind(this));
    }

    this.save = function () {
        var data = {
            title: this.title,
            year: this.year
        };
        if ($stateParams.id) {
            data.id = $stateParams.id;
            dataFactory.update(data).$promise.then($state.go.bind($state, 'list'));
        } else {
            dataFactory.create(data).$promise.then($state.go.bind($state, 'list'));
        }
    }.bind(this);
}

DeleteController.$inject = ['$state', '$stateParams', 'dataFactory'];
function DeleteController ($state, $stateParams, dataFactory) {
    dataFactory.delete({id: $stateParams.id}).$promise.then(function() {
        $state.go('list');
    });
}

