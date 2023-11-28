export default function EntryForm() {
  return (
    <>
      <form className="entry-form">
        <label htmlFor="Motto">Motto</label>
        <input id="Motto"></input>
        <label htmlFor="Notes">Notes</label>
        <textarea name="entry" id="Notes" cols="30" rows="5"></textarea>
        <a href="#" className="create-button">
          Create
        </a>
      </form>
    </>
  );
}
