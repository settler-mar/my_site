$( document ).ready(function(){
	$('.kurs_blk input[type=checkbox]').change(function(){
		el=$(this).parent()
		el.addClass('view')
		$(this).prop('disabled',true)
		el.delay(1000).fadeOut( 400,function(){
			$(this).remove()
		})
	})
})
