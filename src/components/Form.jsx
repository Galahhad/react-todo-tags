function Form({
  handleSubmit,
  blank,
  text,
  handleText,
  handleBlur,
  textNone,
  somer,
}) {
  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <input
          className={`form_input ${blank ? "error_input" : ""}`}
          value={text}
          onChange={handleText}
          onBlur={handleBlur}
        />
        <button
          className="form_button"
          type="submit"
          disabled={textNone || somer ? true : false}
        >
          Отправить
        </button>
      </form>
      {blank && <p className="error_blank">Поле ввода не должно быть пустым</p>}
    </>
  );
}

export default Form;
