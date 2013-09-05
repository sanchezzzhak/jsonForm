/**
 * https://github.com/sanchezzzhak/jsonForm
 * Получить из указаного элемента контейнера данные в виде JSON
 * @param el DOM элемент контейнер
 * @param options { 
 *		isEmpty : true/false,         // Исключить из результата пустые данные
 *		rules: {},                    // Массив в виде правил
 *	}
 * @example jsonForm($('#form'));
 **/		
jsonForm = function(el,options){
	var 
		json_result = {}, 
		json_errors = {},
		json_rule_message = {};
	
	options.isEmpty = options.isEmpty || false;
	
	var	input_arr   = $(el).find('input,textarea,select');	
	
	/* 
	* Валидация полей по правилам из аттребутов инпута
	* @param el 
	*/
	var validation = function(el){
	
	};
		
	$.each(input_arr,function(key,item){	
		if($(item).is('[name]')){
		
		
			var type = $(item).attr('type') , val = $(item).val();
			if((type=='radio' || type=='checkbox')){
				if(!$(item).is(':checked')) return true; 
				if(val.length==0) val=1;
			}
			if(isEmpty==true && val.length==0) return true;
			var name = $(item).attr('name'),
			    arrind = name.match(/([a-z_]+)?\[\]/i);
			if(arrind && arrind.length==2){
			  inc_auto = json_result[arrind[2]].length;
			  if(inc_auto >0)inc_auto++;
			  json_result[arrind[2]][inc_auto] = val;
			}else{
				json_result[name] = val;
			}
			
			
		}
	});
	
	return json_result;
}
