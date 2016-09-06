var app = angular.module("CodingApp");

app.controller("PostsController", ["$scope", "CodingService", function ($scope, CodingService) {
    //    $scope.formattedText = "";
    $scope.newPost = {};
    $scope.CodingService = CodingService;
    //    $scope.postsObjects = {};
    //        $scope.text = JSON.parse({"text": "sdf\nsdf\n    sdf\n    sdf"});

    CodingService.getPosts().then(function (data) {
        $scope.postsObjects = data;
        console.log(data);
    });

    //    $scope.checkCode = function (){
    //        Prism.highlightAll();
    //        return false;
    //    }


    $scope.addPost = function (newPost) {
        newPost.code = (newPost.code);
        CodingService.addPost(newPost);
        $scope.newPost = {};
        //        $scope.postsObjects.push(newPost);
    };

    $scope.deletePost = function (post, index) {
        CodingService.deletePost(post, index);
    };

    $scope.updatePost = function (post, index) {
        CodingService.updatePost(post, index).then(function () {
            post.editing = false;
        });
    };

    $scope.addComment = function (post, index) {
        //        comment = JSON.stringify(comment);
        CodingService.updatePost(post, index, post.newComment, "comment")
        post.newComment = "";
    }

    $scope.deleteComment = function (post, index, comment) {
        CodingService.deleteComment(post, index, comment)
    }

    $scope.$on('ngRepeatFinished', function (ngRepeatFinishedEvent) {
        Prism.highlightAll();
    });
}]);
