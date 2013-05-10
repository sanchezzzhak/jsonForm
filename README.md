jsonForm
========
Get Inputs Data
Usage

<div class="form">
  <label>Login</label>
  <input type="text" name="auth[login]">
  <label>Password</label>
  <input type="password" name="auth[password]">
  <button class="send">Sing in</button>

</div>
<script>
$(function(){
    $('.send').on('click',function(ev){
      var json_data = jsonForm( $('.form') , true );
      console.log(json_data);
    });
});
</script>

Demo http://jsfiddle.net/zv8ra/



