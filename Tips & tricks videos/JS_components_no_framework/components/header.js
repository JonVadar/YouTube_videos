const header = () => {
  return /* HTML */ `<header class="bg-zinc-900 text-white">
    <nav class="flex justify-between items-center p-4">
      <a href="#" class="py-1 px-3 rounded-md hover:bg-zinc-700">Moments</a>
      <div>
        <a href="#" class="material-icons rounded-md hover:bg-zinc-700 p-1"
          >add</a
        >
        <a href="#" class="material-icons rounded-md hover:bg-zinc-700 p-1 ml-2"
          >menu</a
        >
      </div>
    </nav>
  </header>`;
};

export default header;
