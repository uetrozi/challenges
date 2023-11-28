export default function EntryForm() {
  return (
    <>
      <form className="main-section__entryForm">
        <label htmlFor="Motto">Motto</label>
        <input id="Motto"></input>
        <label htmlFor="Notes">Notes</label>
        <textarea name="entry" id="Notes" cols="30" rows="5"></textarea>
        <button type="button">Create</button>
      </form>
    </>
  );
}
