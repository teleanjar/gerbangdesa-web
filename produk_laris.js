//===========================================================================
// Document.ready BEGIN
//===========================================================================
$(document).ready(function(){
//var template = $('#produk-template').html();

var template =
"<div class='col-sm-3 mix category-smartphone' data-price='64900' data-date='20130521' data-popularity='3'>"+
    "<div class='ec-box'>"+
        "<a href='produk.html?id_produk={id_produk}'><img src='http://103.245.181.211/gerbangdesa/assets/img/{gambar}' alt='' class='padding-top-20 margin-bottom'></a>"+
        "<div class='ec-box-header italic'><a href='produk.html?id_produk={id_produk}'>{produk}</a><br>"+
        "<p>Rp {harga}</p>"+
        "</div>"+
    "</div>"+
"</div>"
;

$.getJSON("http://103.245.181.211/gerbangdesa/api/produk_laris/", function(jsonData) {
	$.each(jsonData,function(index,data){
		$('#produk_laris').append(render(template,data));
	});
});
});
//===========================================================================
// Document.ready END
//===========================================================================
