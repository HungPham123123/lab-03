(function) {
    var $imgs = $('#gallery img');
    var $search = $('#filter-search');
    var cache = [];

    $imgs.each(function() {
        cache.push({
            element: this,
            text: this.alt.trim().ToLowerCase()
        });
    });

    function filter() {
        var query = this.value.trim().ToLowerCase();
        cache.forEach(function(img) {
            var index = 0;

            if (query) {
                index = img.text.indexOf(query);
            }
            img.element.style.display = index === -1 ? 'none' : '';
        });
    }

    if ('oniput' in $search[0]) {
        $search.on('input', filter);
    } else {
        $search.on('keyup', filter);
    }

}());
