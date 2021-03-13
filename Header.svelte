<script>
  // add function prop
  export let add = () => {
    console.log("click");
  };
  let date = new Date();
  let now = date.toDateString();
</script>

<style>
  .header {
    background-color: #f6ccbd;
    border-radius: 10px;
    display: flex;
    flex-direction: row;
    -webkit-box-shadow: -2px 3px 6px 1px rgba(0, 0, 0, 0.48);
    -moz-box-shadow: -2px 3px 6px 1px rgba(0, 0, 0, 0.48);
    box-shadow: -2px 3px 6px 1px rgba(0, 0, 0, 0.48);
    margin: 0 5% 0 5%;
    max-height: 60px !important;
  }
  span {
    padding: 10px 0px 10px 0px;
    font-size: 20px;
    font-weight: bold;
    align-self: center;
    margin-left: auto;
    margin-right: auto;
    color: black;
  }
  .round-btn {
    font-size: 4em;
    font-weight: bold;
    border-radius: 50%;
    background-color: #ed9373;
    color: white;
    text-align: center;
    cursor: pointer;
    width: 80px;
    height: 80px;
    outline: none;
    -webkit-box-shadow: -2px 3px 6px 1px rgba(0, 0, 0, 0.48);
    -moz-box-shadow: -2px 3px 6px 1px rgba(0, 0, 0, 0.48);
    box-shadow: -2px 3px 6px 1px rgba(0, 0, 0, 0.48);
  }
</style>

<div class="header">
<span>{now}</span>
<button on:click={add("Testing")} class="round-btn">+</button>
</div>