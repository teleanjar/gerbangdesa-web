//===========================================================================
// Document.ready BEGIN
//===========================================================================
$(document).ready(function() {
    var template = $('#produk-template').html();
    var id_produk = getUrlParameter("id_produk");
	$.getJSON("http://103.245.181.211/gerbangdesa/api/produk/?id_produk=" + id_produk, function(jsonData) {
        $.each(jsonData, function(key, value) {
            if (key == "produk") {
                $("#produk_judul").html(value);
            } else if (key == "keterangan") {
                $("#produk_keterangan").html(value);
            } else if (key == "stok") {
                $("#produk_stok").html(value);
            } else if (key == "berat") {
                $("#produk_berat").html(value);
            } else if (key == "minimumorder") {
                $("#produk_minimumorder").html(value);
            } else if (key == "harga") {
                $("#produk_harga").html(value);
            } else if (key == "gambar") {
                $("#produk_gambar").html("<img src='http://103.245.181.211/gerbangdesa/assets/img/demo/" + value + "' style='height:350px; width:350px;'/>");
            }
        });
    });
});
//===========================================================================
// Document.ready END
//===========================================================================

//===========================================================================
// render BEGIN
// Very basic templating
//===========================================================================
var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = decodeURIComponent(window.location.search.substring(1)),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : sParameterName[1];
        }
    }
};
//===========================================================================
// render END
//===========================================================================
