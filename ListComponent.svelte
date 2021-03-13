<script>
  import ListElement from "./ListElement.svelte";
  import Header from "./Header.svelte";
  let elements = [
    {
      id: 1,
      date: "21:00",
      text: "Esto haciendo algo chilo"
    },
    {
      id: 2,
      date: "22:00",
      text: "Estamos usando Svelte"
    },
    {
      id: 3,
      date: "23:00",
      text: "Tirando codigo bruh"
    },
    {
      id: 4,
      date: "00:00",
      text: "Mimiendo"
    },
    {
      id: 5,
      date: "20:00",
      text: "I am working on developing the WTF Am I Doing notes app."
    }
  ];

  const addFunction = text => {
    let date = new Date();
    elements = [
      ...elements,
      {
        id: elements.length > 0 ? elements[elements.length - 1].id + 1 : 1,
        date: date.getHours() + ":" + date.getMinutes(),
        text: text
      }
    ];
    console.log(elements);
  };
  export let db;
  // db.readAll().catch(res => console.log("res", res));
  import { afterUpdate } from "svelte";

  afterUpdate(() => {
    console.log("the component just updated");
  });
</script>

<style>
  section {
    background: white;
    border-radius: 5px;
    width: 80%;
    height: auto;
    margin: 0 auto;
  }
</style>

<Header add={addFunction}/>
<section>
  {#each elements as el}
    <ListElement date={el.date} text={el.text}/>
  {/each}
</section>