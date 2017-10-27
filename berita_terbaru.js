//===========================================================================
// Document.ready BEGIN
//===========================================================================
$(document).ready(function(){

var template =
"<div class='col-md-4 col-sm-6 masonry-item blog-item wow fadeInUp'>"+
            "<div class='thumbnail'>"+
                "<div class='caption'>"+
                	"<img src='http://103.245.181.211/gerbangdesa/assets/img/{gambar}' class='img-responsive' alt='Image' style='max-height:200px;'>"+
                    	"<h3>{judul}</h3>"+
                    	"<p>{isi}</p>"+
                    	"<hr class='dotted'>"+
                    "<a href='berita_detail.html?id={id}' class='btn btn-ar btn-primary pull-right' role='button'>Selengkapnya &raquo;</a>"+
                    "<div class='clearfix'></div>"+
                "</div>"+
            "</div>"+
        "</div>"
;

$.getJSON("http://103.245.181.211/gerbangdesa/api/berita/terbaru", function(jsonData) {
	$.each(jsonData.data,function(index,data){
		data.isi = data.isi.substring(1,200) + "...";
		$('#berita').append(render(template,data));
	});
});
});
//===========================================================================
// Document.ready END
//===========================================================================
