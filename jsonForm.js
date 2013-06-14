/**
 * https://github.com/sanchezzzhak/jsonForm
 * Получить из указаного элемента контейнера данные.
 * @param  el DOM Элемент контейнер
 * @param isEmpty bool Исключить из результата пустые данные 
 * @example jsonForm($('#form'));
 **/		
jsonForm = function(el,isEmpty){
	var isEmpty = isEmpty || false;
	var json_result = {},
	input_txt = $(el).find('input,textarea,select');			
	$.each(input_txt,function(key,item){	
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
