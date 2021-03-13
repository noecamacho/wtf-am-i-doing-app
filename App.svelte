<script>
	import { onMount } from "svelte";
	import Button from "./Button.svelte";
	import Modal from "./Modal.svelte";
	import ListComponent from "./ListComponent.svelte";
	import IndexDB from "./indexDB.js";
	let showModal = false;

	const db = new IndexDB("WTF_NOTES");

	function openDBSuccess() {
	  console.log("open db success");
	}

	function openDBError() {
	  console.log("open db error");
	}

	function openDBUpgradeNeeded() {
	  console.log("open db upgradedneeded");
	}

	const keyPath = "id";
	const objName = "notes";
	const objData = [
	  { id: "1", date: "2021-03-13T05:09:21.188Z", text: "Working on...A" },
	  { id: "2", date: "2021-03-13T06:09:21.188Z", text: "Working on...B" }
	];

	onMount(() => {
	  db.open(
	    openDBSuccess,
	    openDBError,
	    openDBUpgradeNeeded,
	    objName,
	    keyPath,
	    objData
	  );
	  console.log("the component has mounted");
	  // db.read(1)
	  //   .catch(res => console.log("res", res))
	  //   .err(err => console.log("err", err));
	});
</script>

<style>
	* {
	  font-family: Work Sans;
	  margin: 0;
	  padding: 0;
	  box-sizing: border-box;
	}

	main {
	  text-align: center;
	  background: #db605e;
	  height: 100%;
	  padding-bottom: 20px;
	}

	.title {
	  color: #f6ccbd;
	  display: flex;
	  flex-flow: row nowrap;
	  justify-content: center;
	  align-items: center;
	}

	.wft {
	  color: white;
	  font-size: 8rem;
	  font-weight: bold;
	}

	.ami {
	  font-size: 3rem;
	  width: 100%;
	  display: block;
	}

	.doing {
	  font-size: 2rem;
	}

	.title-left,
	.title-right {
	  min-height: 100px;
	  display: inline-block;
	}
</style>

<main>

	<div class="title">
		<div class="title-left">
			<span class="wft">WTF </span>
		</div>
		<div class="title-right">
			<span class="ami">AM I</span>
			<span class="doing">DOING?</span>
		</div>
	</div>
	<ListComponent db={db} />
	
	<button on:click="{() => showModal = true}">
		show modal
	</button>

	{#if showModal}
		<Modal on:close="{() => showModal = false}">
		</Modal>
	{/if}
</main>


