Obs: tentei utilizar API do Flickr porem as imagens ficaram muito distorcidas e sem qualidade alguma, ai preferi usar algo estatico, codigo de exemplo a baixo

<pre>
// FLICKERAPI
    var specificName = character.character.name.replace(" ", "+");
    var flickerApi = "https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=39e2daa9665a0a0d574145ea8b4e6c89&tags=star+wars&tag_mode=all&text=" + specificName + "&content_type=4&format=json&nojsoncallback=1&per_page=1";

    $http.get(flickerApi)
    .then(function (response) {

        var photo = response.data.photos.photo[0];

        if (photo) {
            var imgUrl = 'https://farm{farm_id}.staticflickr.com/{server_id}/{photo_id}_{secret_id}_m.jpg';
            imgUrl = imgUrl.replace('{farm_id}', photo.farm);
            imgUrl = imgUrl.replace('{server_id}', photo.server);
            imgUrl = imgUrl.replace('{photo_id}', photo.id);
            imgUrl = imgUrl.replace('{secret_id}', photo.secret);

            character.imgUrl = imgUrl;
        }

    })
    .catch(function (err) {
        console.log(err);
        return $q.reject(err);
    });
// FLICKERAPI
</pre>