import s from "./Interior.module.css";
import InteriorContent from "./InteriorContent/InteriorContent";

const Interior = (props) => {
  console.log(props);
  let chairs = props.interiorPage.interiorData.map((c) => (
    <InteriorContent message={c.furniture} />
  ));
  let textAreaValue = props.interiorPage.newChairText;
  let addChairItem = () => {
    props.onShowChairCLick();
  };
  let onTextAreaChange = (e) => {
    let text = e.target.value;
    props.onShowChairChange(text);
  };
  return (
    <div className={s.chairsContainer}>
      <div className={s.chairsElements}>{chairs}</div>
      <div className={s.form}>
        <div className={s.textarea}>
          <textarea
            value={textAreaValue}
            onChange={onTextAreaChange}
          ></textarea>
        </div>
        <div className={s.btn}>
          <button onClick={addChairItem}>Add chair</button>
        </div>
      </div>
    </div>
  );
};
export default Interior;
