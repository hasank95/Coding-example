var app = angular.module("CodingApp");

app.service("CodingService", ["$http", function ($http) {
    var self = this;
    this.postsList = [];

    this.getPosts = function () {
        return $http.get("http://localhost:3000/codes").then(function (response) {
            self.postsList = response.data;
            return response.data;
        })
    };

    this.addPost = function (newPost) {
        return $http.post("http://localhost:3000/codes", newPost).then(function (response) {
            self.postsList.push(response.data);
        });
    };

    this.deletePost = function (post, index) {
        return $http.delete("http://localhost:3000/codes/" + post._id).then(function (response) {
            self.postsList.splice(index, 1);
        })
    };

    this.deleteComment = function (post, index, comment) {
        self.postsList[index].comments.splice(comment, 1);
        return $http.put("http://localhost:3000/codes/" + post._id, post).then(function (response) {
            self.postsList[index] = response.data;
        })
    };

    this.updatePost = function (post, index, comment, doWhat) {
        if (doWhat === "comment") {
            post.comments.push(comment)
        }
        return $http.put("http://localhost:3000/codes/" + post._id, post).then(function (response) {
            self.postsList[index] = response.data;
        });
    };
}]);

app.directive('onFinishRender', function ($timeout) {
    return {
        restrict: 'A',
        link: function (scope, element, attr) {
            if (scope.$last === true) {
                $timeout(function () {
                    scope.$emit(attr.onFinishRender);
                });
            }
        }
    }
});
