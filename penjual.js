//===========================================================================
// Document.ready BEGIN
//===========================================================================
$(document).ready(function(){

var data = [
    {
		image_penjual: 'assets/img/demo/telur.jpg',
        title_penjual: '@GudangTelurJaya',
        abstraction_penjual: 'Pusat Penjual telur Terpercaya.',
    },
    {
		image_penjual: 'assets/img/demo/beras.jpg',
        title_penjual: '@Akbar_Beras',
        abstraction_penjual: 'Pusat penjual beras berkualitas.',
    },
    {
		image_penjual: 'assets/img/demo/tani.jpg',
        title_penjual: '@TanamTani',
        abstraction_penjual: 'Menjual kebutuhan pertanian.',
    },
    {
		image_penjual: 'assets/img/demo/bibit.jpg',
        title_penjual: '@Sukma-Bibit',
        abstraction_penjual: 'Penjual bibit tanaman berkualitas.',
    },
    {
		image_penjual: 'assets/img/demo/tunas.jpg',
        title_penjual: '@Tunas_abadi',
        abstraction_penjual: 'Penjual Tunas Berkualitas.',
    },
    {
		image_penjual: 'assets/img/demo/pupuk.jpg',
        title_penjual: '@PupukKilat',
        abstraction_penjual: 'Penjual pupuk murah berkualitas.',
    }
];


var template = $('#penjual-template').html();

for (var i = 0; i < 7; i++) {
    $('#penjual').append(render(template, data[i]));
}

});
//===========================================================================
// Document.ready END
//===========================================================================

