<script>
  export let date = "00:00";
  export let text = "Unkonw description";
</script>
<style>
  .list-element {
    padding: 20px 10px 0 40px;
    color: black;
  }

  div.list-element:last-child {
    padding-bottom: 20px;
  }

  .list-element span {
    font-size: 20px;
    font-weight: normal;
    display: block;
    width: 100%;
    text-align: left;
  }

  .list-element h3 {
    font-size: 20px;
    font-weight: bold;
    text-align: left;
    margin: 0;
  }
</style>

<div class="list-element">
	<span>{date}</span>
  <h3>{text}</h3>
</div>
