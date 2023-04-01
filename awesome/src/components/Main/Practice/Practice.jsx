import s from "./Practice.module.css";

const Practice = (props) => {
  let state = props.practicePage; //здесь пришел наш объект с двумя массивами, которые наде преобразовать "мапить"
  let usersData = state.usersData.map((u) => (
    <div key={u.id}>
      {" "}
      <div>{u.name}</div>
      <div>{u.birthplace}</div>
    </div>
  ));
  let commentsData = state.usersComments.map((c) => (
    <div key={c.id}>{c.text}</div>
  ));

  const addComment = () => {
    props.addComment();
  };

  const updateCommentText = (e) => {
    let body = e.target.value;
    props.updateCommentText(body);
  };
  return (
    <div>
      <div className={s.dialogs}>
        <span> {usersData} </span>
        <span>{commentsData}</span>
      </div>
      <div>
        <textarea
          placeholder="Enter your comment"
          onChange={updateCommentText} //updating state (bll) FLUX
          value={state.newCommentText} //тут значение сначала по-умолчанию,которое в initialState,далее зачищается
        ></textarea>
      </div>
      <div>
        <button onClick={addComment} className={s.btn}>
          Send
        </button>
      </div>
    </div>
  );
};
export default Practice;
