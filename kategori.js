//===========================================================================
// Document.ready BEGIN
//===========================================================================
$(document).ready(function(){

$.getJSON("http://103.245.181.211/gerbangdesa/api/katproduk", function(jsonData) {
	$.each(jsonData.data,function(index,data){
		$('#kategori').append(render(getTemplate(data.id==1),data));
	});
});
});
//===========================================================================
// Document.ready END
//===========================================================================

//===========================================================================
// getTemplate BEGIN
//===========================================================================
var template_begin = "<li";
var template_end = "><a href='#cat{id}' data-toggle='tab'><i class='glyphicon glyphicon-circle-arrow-down'></i> {keterangan}</a></li>";

function getTemplate(active) {
	var result = template_begin;
	if (active==true){
		result += " class='active'"
	}
	result += template_end;
	return result;
}
//===========================================================================
// getTemplate END
//===========================================================================
