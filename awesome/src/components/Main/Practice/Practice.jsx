import s from "./Practice.module.css";

const Practice = (props) => {
  let table = props.practicePage.table;
  console.log(table);

  let tableData = table.map((t) => (
    <div className={s.table}>
      <div className={s.position}>{t.Position}</div>
      <div>
        <img src={t.SquadLogo} alt="photo" className={s.logo} />
      </div>
      <div className={s.name}>{t.Name}</div>
      <div>Plays:{t.Played}</div>
      <div>Wins: {t.Winned}</div>
      <div>Lose: {t.Loosed}</div>
      <div className={s.points}>Points: {t.Points}</div>
    </div>
  ));

  return (
    <div>
      <div className={s.tableData}>{tableData}</div>
    </div>
  );
};
export default Practice;
