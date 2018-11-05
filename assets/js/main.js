var kirim = document.getElementById('btnkirim')
kirim.onclick = function() {
  	$('#formlapor').attr('action',
                       'mailto:ganasdev@gmail.com?subject=' +
                       $('#txtnama').val() + '&body=' + $('#txtkontak').val()	);
       	 $('#formlapor').submit();
   	console.log('ok');
};

var kanan = document.getElementById('kanan'), 
  count = 0;

kanan.onclick = function() {
  count -= 330;
  $('.img-1').css('margin-left', count);
  console.log(count);
  $('.pindah-kiri').css('display', 'block');
  	if (count == -5280) {
  		 $('.pindah-kanan').css('display', 'none');
  	} else {
  		$('.pindah-kiri').css('display', 'block');
  	}
};


kiri.onclick = function() {
  count += 330;
    console.log(count);
  $('.img-1').css('margin-left', count);
  if (count == 0) {
  		 $('.pindah-kiri').css('display', 'none');
  	} else {
  		$('.pindah-kanan').css('display', 'block');
  	}
};
// Responsiv Navbar

function myFunction() {
    document.getElementsByClassName("topnav")[0].classList.toggle("responsive");
}

// Pada Saat Halaman Di Load
$(window).on('load', function() {
	$('.header .slogan h1').addClass('sMuncul');
	$('.header .slogan p').addClass('sMuncul');
	$('.header .slogan button').addClass('bMuncul');
	$('.header .hero img').addClass('hMuncul');
	$('.header .smartcity').addClass('sMuncul');
	$('.slogan hr').addClass('hrMuncul');
});

// Event Hamburger
$(function() {
	$('.icon').click(function() {
		$('.icon').toggleClass('active');
	})
});
// Geser Testimoni
 // Geser 1 
	$('.kanan-1').click(function() {
		$('.testimoni-2').addClass('aktifkan');
		$('.testimoni-1').removeClass('aktifkan');
	});
	$('.kiri-1').click(function() {
		$('.testimoni-5').addClass('aktifkan');
		$('.testimoni-1').removeClass('aktifkan');
	});
 // Geser 2 
	$('.kanan-2').click(function() {
		$('.testimoni-3').addClass('aktifkan');
		$('.testimoni-2').removeClass('aktifkan');
	});
	$('.kiri-2').click(function() {
		$('.testimoni-1').addClass('aktifkan');
		$('.testimoni-2').removeClass('aktifkan');
	});
 // Geser 3 
	$('.kanan-3').click(function() {
		$('.testimoni-4').addClass('aktifkan');
		$('.testimoni-3').removeClass('aktifkan');
	});
	$('.kiri-3').click(function() {
		$('.testimoni-2').addClass('aktifkan');
		$('.testimoni-3').removeClass('aktifkan');
	});
 // Geser 4
	$('.kanan-4').click(function() {
		$('.testimoni-5').addClass('aktifkan');
		$('.testimoni-4').removeClass('aktifkan');
	});
	$('.kiri-4').click(function() {
		$('.testimoni-3').addClass('aktifkan');
		$('.testimoni-4').removeClass('aktifkan');
	});	
 // Geser 5
	$('.kanan-5').click(function() {
		$('.testimoni-1').addClass('aktifkan');
		$('.testimoni-5').removeClass('aktifkan');
	});
	$('.kiri-5').click(function() {
		$('.testimoni-4').addClass('aktifkan');
		$('.testimoni-5').removeClass('aktifkan');
	});	

// Geser bullet bawah
	$('.pilih-1').click(function() {
		$('.testimoni-1').addClass('aktifkan');
		$('.testimoni-2').removeClass('aktifkan');
		$('.testimoni-3').removeClass('aktifkan');
		$('.testimoni-4').removeClass('aktifkan');
		$('.testimoni-5').removeClass('aktifkan');
	});
	$('.pilih-2').click(function() {
		$('.testimoni-2').addClass('aktifkan');
		$('.testimoni-1').removeClass('aktifkan');
		$('.testimoni-3').removeClass('aktifkan');
		$('.testimoni-4').removeClass('aktifkan');
		$('.testimoni-5').removeClass('aktifkan');
	});	
	$('.pilih-3').click(function() {
		$('.testimoni-3').addClass('aktifkan');
		$('.testimoni-1').removeClass('aktifkan');
		$('.testimoni-2').removeClass('aktifkan');
		$('.testimoni-4').removeClass('aktifkan');
		$('.testimoni-5').removeClass('aktifkan');
	});	
	$('.pilih-4').click(function() {
		$('.testimoni-4').addClass('aktifkan');
		$('.testimoni-1').removeClass('aktifkan');
		$('.testimoni-3').removeClass('aktifkan');
		$('.testimoni-2').removeClass('aktifkan');
		$('.testimoni-5').removeClass('aktifkan');
	});	
	$('.pilih-5').click(function() {
		$('.testimoni-5').addClass('aktifkan');
		$('.testimoni-1').removeClass('aktifkan');
		$('.testimoni-3').removeClass('aktifkan');
		$('.testimoni-4').removeClass('aktifkan');
		$('.testimoni-2').removeClass('aktifkan');
	});			

// Event pada saat link di klik
$(window).scroll(function() {
	var wScroll = $(this).scrollTop();

	// MASALAH
	if ( wScroll > $('.masalah').offset().top - 300 ) {
		$('.km-1').addClass('masalahparallax');
		$('.km-2').addClass('masalahparallax');
		$('.gambarmasalah.satu').addClass('masalahparallax'); 

		$('.gambarmasalah.dua').addClass('masalahparallax'); 
	}
	// Memunculkan 1 per 1 Gambar
	if ( wScroll > $('#gallery').offset().top - 300 ) {
		$('.pindah-kanan').addClass('muncul');
		$('.pindah-kiri').addClass('muncul');
		$('.img-thm').each(function(i) {
			setTimeout(function() {
				$('.img-thm').eq(i).addClass('muncul');
			}, 300 * (i+1) );
		});
	}
	// Memunculkan 1 per 1 Hitung
	if ( wScroll > $('.hitung').offset().top - 550 ) {
		$('.hitung .hitung1').each(function(i) {
			setTimeout(function() {
				$('.hitung .hitung1').eq(i).addClass('muncul');
			}, 300 * (i+1) );
		});
	}
	// Memunculkan 1 per 1 FUTER
	if ( wScroll > $('.futer').offset().top - 550 ) {
		$('.isifuter').each(function(i) {
			setTimeout(function() {
				$('.isifuter').eq(i).addClass('isifuterparallax');
			}, 300 * (i+1) );
		});
	}
	// Memunculkan Efek Terbang Pada Fitur
	if(wScroll > $('.fitur').offset().top - $(window).height())  {
		
		var offset = Math.min(0, wScroll - $('.fitur').offset().top + $(window).height() - 500);
		
		$('.fitur1.satu').css({
			'transform' : 'translate('+ offset +'px , '+ Math.abs(offset * 0.2) +'px)'});

		$('.fitur1.tiga').css({
			'transform' : 'translate('+ Math.abs(offset) +'px , '+ Math.abs(offset * 0.2) +'px)'});

	}
	// Navbar
	if ( wScroll > $('.masalah').offset().top -680 ) {
		$('.napbar').css({
			background: 'rgba(0,0,0,1)'
		}); 
	} else {
		$('.napbar').css({
			background: 'transparent'
		}); 	
	}
	// TESTIMONI
	if ( wScroll > $('.testimoni').offset().top - 100 ) {
		$('.kanan').addClass('kananparallax');
		$('.kiri').addClass('kiriparallax');
	}
	if ( wScroll > $('#laporkan').offset().top - 250 ) {
		$('.inputnama').addClass('Muncul');
		$('.inputkontak').addClass('Muncul');
		$('.inputciri').addClass('Muncul');
		$('.inputketerangan').addClass('Muncul');	
		$('.inputalamat').addClass('Muncul');	
		$('.inputfile').addClass('Muncul');	
		$('.btn-lapor').addClass('Muncul');					
		
	
	}
});
