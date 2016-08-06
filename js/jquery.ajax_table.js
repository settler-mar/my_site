;(function($){
	var defaults={
		url:undefined,
		item_on_page:[10,20,50,100],
	}
	
	function Ajax_table(element,options){
		this.table=$(element)
		this.config=$.extend({},defaults,options);
		if(this.table.attr('url')!=undefined)this.config.url=this.table.attr('url')
		
		if(this.config.url==undefined){
			console.error('Parametr URL not found')
		}
		this.init();	
	}
	
	Ajax_table.prototype.init=function(){
		var par_el=this.table.wrap($("<div/>",{
			class:'content_table'
		}));
		var table_conrol=$("<div/>",{
			class:'table_conrol'
		})
		$('<div/>',{
			class:'table_info'
		})
		$('<ul/>',{
			class:'pagination'
		})
		this.table.after(table_conrol);
		
		var table_length=$("<div/>",{
			class:'table_length'
		});
		var select=$('<select/>',{
			 size:"1",
			 name:"basic2_length"
		})
		var i,y;
		for(i=0,y=this.config.item_on_page.length;i<y;i++){
			$('<option/>',{
				text:this.config.item_on_page[i],
				value:this.config.item_on_page[i]
			}).appendTo(select)
		}
		select.appendTo(table_length)
		$('<label/>',{
				text:' записей на странице'
		}).appendTo(table_length)
			
		$('<div/>',{
			class:'control'
		}).appendTo(table_length)
		
		this.table.before(table_length);
	}
	
	$.fn.ajax_table=function(options){
		return this.each(function(options){
			new Ajax_table(this,options)
		})
	}
})(jQuery);
